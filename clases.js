class Persona{

  id;
  nombre;
  apellido;
  edad;

  constructor(id, nombre, apellido, edad){
    this.Id = parseInt(id);
    this.Nombre = nombre;
    this.Apellido = apellido;
    this.Edad = parseInt(edad);
  }

  get Id() {
    return this.id;
  }
  get Nombre() {
    return this.nombre;
  }
  get Apellido() {
    return this.apellido;
  }
  get Edad() {
    return this.edad;
  }

  set Id(value) {
    if (value !== null && !isNaN(value))
     this.id = value;
    else
     throw new Error('El Id ingresado es invalido');
  }
  set Nombre(value) {
    if (value !== null && isNaN(value))
     this.nombre = value;
    else
     throw new Error('El Nombre ingresado es invalido');
  }
  set Apellido(value) {
    if (value !== null && isNaN(value))
     this.apellido = value;
    else
     throw new Error('El Apellido ingresado es invalido');
  }
  set Edad(value) {
    if (value !== null && !isNaN(value))
     this.edad = value;
    else
     throw new Error('El Edad ingresado es invalido');
  }

}

class Heroe extends Persona{

  alterego;
  ciudad;
  publicado;

  constructor(id, nombre, apellido, edad, alterego, ciudad, publicado) {

    super(id, nombre, apellido, edad);
    this.Alterego = alterego;
    this.Ciudad = ciudad;
    this.Publicado = parseInt(publicado);

  }

  get Alterego() {
    return this.alterego;
  }
  get Ciudad() {
    return this.ciudad;
  }
  get Publicado() {
    return this.publicado;
  }

  set Alterego(value) {
    if (value !== null && isNaN(value))
     this.alterego = value;
    else
     throw new Error('El alterego ingresado es invalido');
  }
  set Ciudad(value) {
    if (value !== null && isNaN(value))
     this.ciudad = value;
    else
     throw new Error('La Ciudad ingresada es invalida');
  }
  set Publicado(value) {
    if (value !== null && !isNaN(value) && value > 1940)
     this.publicado = value;
    else
     throw new Error('El año de Publicacion ingresado es invalido');
  }

}

class Villano extends Persona{

  enemigo;
  robos;
  asesinatos;
  
  constructor(id, nombre, apellido, edad, enemigo, robos, asesinatos) {

    super(id, nombre, apellido, edad);
    this.Enemigo = enemigo;
    this.Robos = parseInt(robos);
    this.Asesinatos = parseInt(asesinatos);

  }

  get Enemigo() {
    return this.enemigo;
  }
  get Robos() {
    return this.robos;
  }
  get Asesinatos() {
    return this.asesinatos;
  }

  set Enemigo(value) {
    if (value !== null && isNaN(value))
     this.enemigo = value;
    else
     throw new Error('El Enemigo ingresado es invalido');

  }
  set Robos(value) {
    if (value !== null && !isNaN(value) && value > 0)
     this.robos = value;
    else
     throw new Error('La cantidad de Robos ingresado es invalido');
  }
  set Asesinatos(value) {
    if (value !== null && !isNaN(value) && value > 0)
     this.asesinatos = value;
    else
     throw new Error('La cantidad de Asesinatos ingresado es invalido');
  }

}

let listadoPersonas;

class Json{

  static jsonArrayAInstanciaObjeto(arrayObjetos){
    const personas = [];
    arrayObjetos.forEach((personaString) => {
      let persona;
      if (personaString?.alterego != undefined) {
        persona = new Heroe(personaString.id, personaString.nombre, personaString.apellido, personaString.edad, personaString.alterego, personaString.ciudad, personaString.publicado);
      } else {
        persona = new Villano(personaString.id, personaString.nombre, personaString.apellido, personaString.edad, personaString.enemigo, personaString.robos, personaString.asesinatos);
      }
      personas.push(persona);
    });
    return personas;
  }
}

window.addEventListener('load', () => {
 
  let stringJson = '[{"id":1, "nombre":"Clark", "apellido":"Kent", "edad":45, "alterego":"Superman", "ciudad":"Metropolis","publicado":2002},{"id":2, "nombre":"Bruce", "apellido":"Wayne", "edad":35, "alterego":"Batman", "ciudad":"Gotica","publicado":20012},{"id":3, "nombre":"Bart", "apellido":"Alen", "edad":30, "alterego":"Flash", "ciudad":"Central","publicado":2017},{"id":4, "nombre":"Lex", "apellido":"Luthor", "edad":18, "enemigo":"Superman", "robos":500,"asesinatos":7},{"id":5, "nombre":"Harvey", "apellido":"Dent", "edad":20, "enemigo":"Batman", "robos":750,"asesinatos":2},{"id":666, "nombre":"Celina", "apellido":"kyle", "edad":23, "enemigo":"Batman", "robos":25,"asesinatos":1}]';
 
  const jsonArray = JSON.parse(stringJson);
  listadoPersonas = Json.jsonArrayAInstanciaObjeto(jsonArray);
 
  Eventos.setearEventos();
 
  Tabla.recargarTabla(listadoPersonas);
 
  document.getElementById("chkID").checked = true;
  document.getElementById("chkNombre").checked = true;
  document.getElementById("chkApellido").checked = true;
  document.getElementById("chkEdad").checked = true;
  document.getElementById("chkAlterego").checked = true;
  document.getElementById("chkCiudad").checked = true;
  document.getElementById("chkPublicado").checked = true;
  document.getElementById("chkEnemigo").checked = true;
  document.getElementById("chkRobos").checked = true;
  document.getElementById("chkAsesinatos").checked = true;

})


class Eventos{

  static setearEventos() {
    const btnAgregar = document.getElementById("btnAgregarTabla");
    btnAgregar.addEventListener("click", () => ABM.formAgregar());
    const btnCalcular = document.getElementById("btnCalcularPromEdad");
    btnCalcular.addEventListener("click", () => Tabla.calcularPromEdad());

    let btnChk = document.getElementById("chkID");
    btnChk.addEventListener("click", e => Tabla.chkCambio(e));
    btnChk = document.getElementById("chkNombre");
    btnChk.addEventListener("click", e => Tabla.chkCambio(e));
    btnChk = document.getElementById("chkApellido");
    btnChk.addEventListener("click", e => Tabla.chkCambio(e));  
    btnChk = document.getElementById("chkEdad");
    btnChk.addEventListener("click", e => Tabla.chkCambio(e));  
    btnChk = document.getElementById("chkAlterego");
    btnChk.addEventListener("click", e => Tabla.chkCambio(e));
    btnChk = document.getElementById("chkCiudad");
    btnChk.addEventListener("click", e => Tabla.chkCambio(e));  
    btnChk = document.getElementById("chkPublicado");
    btnChk.addEventListener("click", e => Tabla.chkCambio(e));  
    btnChk = document.getElementById("chkEnemigo");
    btnChk.addEventListener("click", e => Tabla.chkCambio(e));  
    btnChk = document.getElementById("chkRobos");
    btnChk.addEventListener("click", e => Tabla.chkCambio(e));
    btnChk = document.getElementById("chkAsesinatos");
    btnChk.addEventListener("click", e => Tabla.chkCambio(e));

    const btnsOrdenar = document.getElementsByClassName("btnColumna");
    for (let i = 0; i < btnsOrdenar.length; i++) {
      btnsOrdenar.item(i).onclick = e => Tabla.ordenarTabla(e)
    }
    const filtroSelect = document.getElementById("filtro");
    filtroSelect.addEventListener("change", e => Tabla.recargarTabla(listadoPersonas));
 
    const btnCancelarForm = document.getElementById("btnCancelarForm");
    btnCancelarForm.addEventListener("click", () => {
      Formulario.MostrarOcultarElemento("registros", false);
      Formulario.MostrarOcultarElemento("formABM", true);
    });
    const btnModificarForm = document.getElementById("btnModificarForm");
    btnModificarForm.addEventListener("click", () => {
      ABM.modificarItem();
    });
    const btnEliminarForm = document.getElementById("btnEliminarForm");
    btnEliminarForm.addEventListener("click", () => {
      ABM.eliminarItem();
    });
      // Agrega los eventos al boton Agregar
    const btnAgregarForm = document.getElementById("btnAgregarForm");
    btnAgregarForm.addEventListener("click", () => {
      ABM.agregarItem("registros");
    });
    const tipoUsuario = document.getElementById("tipoUsuario");
    tipoUsuario.addEventListener("change", e => Formulario.ocultarSegunTipo(e.target.value));
    // Oculta el formulario
    Formulario.MostrarOcultarElemento("formABM", true);


  }
}

class Tabla {
  
  static chkCambio(e) {
    let display = !e.target.checked ? 'none' : '';
    Tabla.ocultarColumna(e.target.value, display);
  }
  
  static ocultarColumna(idColumna, display) {
    let element = document.getElementById(idColumna); 
    element.style.display = display; 
    const cuerpoTabla = document.getElementById('cuerpo');
  
    const camposDeFila = cuerpoTabla.querySelectorAll("[columna=" + idColumna + "]");
    camposDeFila.forEach(campo => campo.style.display = display);
}

  static ordenarTabla (e) {
    const listaOrdenada = listadoPersonas.sort((personaUno, personaDos) => Tabla.ordenarPersonasCreciente(personaUno,personaDos, e.target.id));
    Tabla.recargarTabla(listaOrdenada);
  }

  static ordenarPersonasCreciente (personaUno, personaDos, atributoAComparar) {
    let valorUno;
    let valorDos;
    switch (atributoAComparar) {
      case "btnId":
        valorUno = personaUno.Id;
        valorDos = personaDos.Id;
        break;
      case "btnNombre":
        valorUno = personaUno.Nombre;
        valorDos = personaDos.Nombre;
        break;
      case "btnApellido":
        valorUno = personaUno.Apellido;
        valorDos = personaDos.Apellido;
        break;
      case "btnEdad":
        valorUno = personaUno.Edad;
        valorDos = personaDos.Edad;
        break;
      case "btnalterego":
        valorUno = personaUno.Alterego;
        valorDos = personaDos.Alterego;
        break;
      case "btnCiudad":
        valorUno = personaUno.Ciudad;
        valorDos = personaDos.Ciudad;
        break;
      case "btnPublicado":
        valorUno = personaUno.Publicado;
        valorDos = personaDos.Publicado;
        break;
      case "btnEnemigo":
        valorUno = personaUno.Enemigo;
        valorDos = personaDos.Enemigo;
        break;         
      case "btnRobos":
        valorUno = personaUno.Robos;
        valorDos = personaDos.Robos;
        break;
      case "btnAsesinatos":
        valorUno = personaUno.Asesinatos;
        valorDos = personaDos.Asesinatos;
        break;
        
    }
    if (!valorUno) return -1;
    if (!valorDos) return 1;
    return valorUno > valorDos ? 1 : -1;
  }

  static crearFila(columnasData) {    
    const fila = document.createElement("tr");
   
    columnasData.forEach(columnaInfo => {
      
      fila.addEventListener("dblclick", e => ABM.modificarEliminar(e.target.parentNode, "idColum"));
      
      const elemento = document.createElement("td");
      
      elemento.appendChild(document.createTextNode(columnaInfo?.data ?? 'N/A'));
      
      elemento.setAttribute("columna", columnaInfo.idColumna);
      
      elemento.style.display = document.getElementById(columnaInfo.idColumna).style.display;
      
      fila.appendChild(elemento);
    });
  
    document.getElementById("cuerpo").appendChild(fila);
  }

  static recargarTabla (lista) {
    let cuerpoTabla = document.getElementById('cuerpo');
    let filasTabla = cuerpoTabla.getElementsByTagName('tr');
    let rowCount = filasTabla.length;
    for (let i = 0; i < rowCount; i++) {
      cuerpoTabla.removeChild(filasTabla[rowCount - 1 - i]);
    }
    
    const filtro = document.getElementById("filtro").value;
    lista = Tabla.filtrarLista(filtro, lista);
    
    lista.forEach(persona => {
      const columnasData = 
      [{ idColumna: "idColum", data: persona.Id },
      { idColumna: "nombreColum", data: persona.Nombre },
      { idColumna: "apellidoColum", data: persona.Apellido },
      { idColumna: "edadColum", data: persona.Edad },
      { idColumna: "alteregoColum", data: persona.Alterego },
      { idColumna: "ciudadColum", data: persona.Ciudad },
      { idColumna: "publicadoColum", data: persona.Publicado },
      { idColumna: "enemigoColum", data: persona.Enemigo },
      { idColumna: "robosColum", data: persona.Robos },
      { idColumna: "asesinatosColum", data: persona.Asesinatos },
      
    ];
      Tabla.crearFila(columnasData);
    });
  }

  
  static calcularPromEdad () {
    
    const filtro = document.getElementById("filtro").value;
    const listaEnPantalla = Tabla.filtrarLista(filtro, listadoPersonas);
    const sumatoriaEdad = listaEnPantalla.reduce((acumuladorEdades, elementoActual) => { return acumuladorEdades + elementoActual.Edad; } , 0);
    console.log(sumatoriaEdad);
    console.log(listaEnPantalla);
    document.getElementById("idPromedio").value = (sumatoriaEdad / listaEnPantalla.length).toFixed(2);
  }

  static filtrarLista (filtro, listadoAFiltrar) {
    let listadoFiltrado = listadoAFiltrar;
    switch (filtro) {
      case 'Heroe':
        listadoFiltrado = listadoPersonas.filter(persona => persona instanceof Heroe);
        break;
      case 'Villano':
        listadoFiltrado = listadoPersonas.filter(persona => persona instanceof Villano);
        break;
    }
    return listadoFiltrado;
  }

}


class ABM {

  static modificarEliminar (fila, idColumna) {
    const id = parseInt(fila.querySelectorAll("[columna=" + idColumna + "]")[0].innerText);
    const elementoAModificar = ABM.buscarPorId(id);
    if (!elementoAModificar) throw new Error('No se encontro el id a modificar/eliminar');
    
    Formulario.MostrarOcultarElemento("btnAgregarForm", true);
    Formulario.MostrarOcultarElemento("btnModificarForm", false);
    Formulario.MostrarOcultarElemento("btnEliminarForm", false);
      
    if (elementoAModificar instanceof Heroe) {
      Formulario.ocultarSegunTipo("Heroe");
    } else {
      Formulario.ocultarSegunTipo("Villano");
    }

    document.getElementById("idForm").value = elementoAModificar.Id;
    document.getElementById("nombreForm").value = elementoAModificar.Nombre;
    document.getElementById("apellidoForm").value = elementoAModificar.Apellido;
    document.getElementById("edadForm").value = elementoAModificar.Edad;
    document.getElementById("alteregoForm").value = elementoAModificar.Alterego ?? "";
    document.getElementById("ciudadForm").value = elementoAModificar.Ciudad ?? "";
    document.getElementById("publicadoForm").value = elementoAModificar.Publicado ?? "";
    document.getElementById("enemigoForm").value = elementoAModificar.Enemigo ?? "";
    document.getElementById("robosForm").value = elementoAModificar.Robos ?? "";
    document.getElementById("asesinatosForm").value = elementoAModificar.Asesinatos ?? "";
    Formulario.MostrarOcultarElemento("registros", true);
    Formulario.MostrarOcultarElemento("formABM", false, "flex");
  
    const titulo = document.getElementById("tituloABM");
    if(titulo.childNodes.length > 0)
      titulo.removeChild(titulo.childNodes[0]);
    titulo.appendChild(document.createTextNode("Form Modificar/Eliminar"));
  
    // Bloquea los campos que no se pueden modificar
    Formulario.BloquarDesbloquearCamposForm();
  }


  static modificarItem () {
    try {
      const dataForm = ABM.obtenerDataABM();
      listadoPersonas = listadoPersonas.map(persona => {
        if (persona.id === dataForm.id) {
          return dataForm;
        }
        return persona;
      });
      Formulario.Volver();
    } catch (e) {
      window.alert(e.message);
    }
  }
  
  static agregarItem () {
    try {
      // Valida que el id no exista
      const dataForm = ABM.obtenerDataABM();
      if (ABM.buscarPorId(dataForm.id)) throw new Error()
      listadoPersonas.push(dataForm);
      console.log(`Persona agregada: ${dataForm}`);
      Formulario.Volver();
    } catch (e) {
      window.alert(e.message);
    }
  }
  
  static eliminarItem () {
    try {
      const dataForm = ABM.obtenerDataABM();
      listadoPersonas = listadoPersonas.filter(persona => persona.id != dataForm.id);
      Formulario.Volver();
    } catch (e) {
      window.alert(e.message);
    }
  }
  
  static buscarPorId (id) {
    return listadoPersonas.find(persona => persona.id == id);
  }
  

  static formABMLimpiarCampos (camposId) {
    camposId.forEach(idCampo => {
      document.getElementById(idCampo).value = "";
    });
  }
  
  static obtenerDataABM () {
    const data = {
      id: document.getElementById("idForm").value,
      nombre: document.getElementById("nombreForm").value,
      apellido: document.getElementById("apellidoForm").value,
      edad: document.getElementById("edadForm").value,
      alterego: document.getElementById("alteregoForm")?.value ?? null,
      ciudad: document.getElementById("ciudadForm")?.value ?? null,
      publicado: document.getElementById("publicadoForm")?.value ?? null,
      enemigo: document.getElementById("enemigoForm")?.value ?? null,
      robos: document.getElementById("robosForm")?.value ?? null,
      asesinatos: document.getElementById("asesinatosForm")?.value ?? null
    };
    const tipo = document.getElementById("tipoUsuario").value;
    let retorno = null;
    switch (tipo) {
      case 'Heroe':
        retorno = new Heroe(data.id, data.nombre, data.apellido, data.edad, data.alterego, data.ciudad, data.publicado);
        break;
      case 'Villano':
        retorno = new Villano(data.id, data.nombre, data.apellido, data.edad, data.enemigo, data.robos, data.asesinatos);
        break;
    }
    return retorno;
  }
  
  static generarIdUnico () {
    const idList = listadoPersonas.map(persona => persona.id);    
    return Math.max(...idList) + 1;
  }
  
  static formAgregar () {

    Formulario.MostrarOcultarElemento("registros", true);
    Formulario.MostrarOcultarElemento("btnAgregarForm", false);
    Formulario.MostrarOcultarElemento("formABM", false, "flex");
    Formulario.MostrarOcultarElemento("btnAgregarForm", false);
    Formulario.MostrarOcultarElemento("btnModificarForm", true);
    Formulario.MostrarOcultarElemento("btnEliminarForm", true);
    const titulo = document.getElementById("tituloABM");
    if(titulo.childNodes.length > 0)
      titulo.removeChild(titulo.childNodes[0]);
    titulo.appendChild(document.createTextNode("Form Alta"));
    Formulario.ocultarSegunTipo(document.getElementById("tipoUsuario").value);
    ABM.formABMLimpiarCampos(["nombreForm", "apellidoForm", "edadForm", "alteregoForm",
    "ciudadForm", "publicadoForm", "enemigoForm", "robosForm", "asesinatosForm"]);
    document.getElementById("idForm").value = ABM.generarIdUnico();
    Formulario.BloquarDesbloquearCamposForm();

  }


}

class Formulario {

  static ocultarSegunTipo (tipo) {
    switch (tipo) {
      case "Heroe":
        document.getElementById("grupoAlterego").style.display = '';
        document.getElementById("grupoCiudad").style.display = '';
        document.getElementById("grupoPublicado").style.display = '';
        document.getElementById("grupoEnemigo").style.display = 'none';
        document.getElementById("grupoRobos").style.display = 'none';
        document.getElementById("grupoAsesinatos").style.display = 'none';
        document.getElementById("tipoUsuario").value = "Heroe";
        break;
      case "Villano":
        document.getElementById("grupoAlterego").style.display = 'none';
        document.getElementById("grupoCiudad").style.display = 'none';
        document.getElementById("grupoPublicado").style.display = 'none';
        document.getElementById("grupoEnemigo").style.display = '';
        document.getElementById("grupoRobos").style.display = '';
        document.getElementById("grupoAsesinatos").style.display = '';
        document.getElementById("tipoUsuario").value = "Villano";
        break;
    }
  }
  
  static BloquarDesbloquearCamposForm () {
    document.getElementById("idForm").setAttribute('disabled', '');
  }

  static Volver () {
    Formulario.MostrarOcultarElemento("registros", false);
    Formulario.MostrarOcultarElemento("formABM", true);
    Tabla.recargarTabla(listadoPersonas);
  }

  static MostrarOcultarElemento (idForm, ocultar, displayType) {
    const formElement = document.getElementById(idForm);
    const tipoDisplay = displayType ?? "";
    formElement.style.display = ocultar ? 'none' : tipoDisplay;
  }
}





