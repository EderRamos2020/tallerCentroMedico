//Obteniendo la informacion del DOM por medio de los id
//Campos compartidos entre medicos y pacientes
const nombres= document.getElementById("labelNombres")
const apellidos= document.getElementById("labelApellidos")
const cedula= document.getElementById("labelCedula")
const telefono= document.getElementById("labelTelefono")
const especialidad= document.getElementById("labelEspecialidad")
//Campos propios de medicos
const consultorio= document.getElementById("labelConsultorio")
const email= document.getElementById("labelEmail")
//Campos propios de pacientes
const edad= document.getElementById("labelEdad")

//Llamado de los formularios
const formularioMedicos = document.getElementById("registroMedicos_form")
const formularioPacientes = document.getElementById("registroPacientes_form")

//Creamos la clase Usuario y su constructor que luego utilizaremos para inicializar los objetos
class Usuario {

    constructor(nombres, apellidos, cedula, telefono, especialidad) {
        this.nombres= nombres
        this.apellidos= apellidos
        this.cedula= cedula
        this.telefono= telefono
        this.especialidad= especialidad
    }

}


const mostrarMedicos= function (){
    let medicos= []
    let cuerpoTabla=document.getElementById("cuerpoTabla_Medicos")
    let localMedicos= localStorage.getItem("medicos")
    //esta condicion if es igual a (localPersonasJson != null) es decir la variable no esta vacia y tiene datos
    //si la variable "localMedicos" viene con datos(arreglo de objetos en formato JSON) entra al "if", 
    //la convierte en un arreglo de objetos de javascript y la guarda en la variable de tipo arreglo "medicos".
    if(localMedicos){
        medicos= JSON.parse(localMedicos)
    }

    //"forEach" para recorrer todas las posiciones del arreglo de objetos
    //Dentro del "forEach" por cada posicion del arreglo crea un elemento html y lo guardar en la variable
    //"filaMedico", "<tr>" es como una fila dentro de una tabla en html
    //En cada fila va agregando celda tras celda y lo guarda en sus respectivas variables 
    medicos.forEach(medico => {
        let filaMedico=document.createElement("tr")
        //para crear una celda en el Dom hay un metodo que es insertCell() es similar al appendChild()
        let celdaNombres= filaMedico.insertCell()
        let celdaApellidos= filaMedico.insertCell()
        let celdaCedula= filaMedico.insertCell()
        let celdaConsultorio= filaMedico.insertCell()
        let celdaTelefono= filaMedico.insertCell()
        let celdaEmail= filaMedico.insertCell()
        let celdaEspecialidad= filaMedico.insertCell()
        let celdaPaciente= filaMedico.insertCell()
        //En cada celda en su respectivo atributo "textContent" se guarda el valor que tiene el objeto "medico" 
        //en su atributo respectivo
        celdaNombres.textContent= medico.nombres
        celdaApellidos.textContent= medico.apellidos
        celdaCedula.textContent= medico.cedula
        celdaConsultorio.textContent= medico.consultorio
        celdaTelefono.textContent= medico.telefono
        celdaEmail.textContent= medico.email
        celdaEspecialidad.textContent= medico.especialidad
        celdaPaciente.textContent= "sin asignar"
        //por cada posicion del arreglo "medicos" en el cuerpo de la tabla se va adjuntando como hijo cada fila
        //que dentro lleva sus respectivas celdas con la informacion a mostrar   
        cuerpoTabla.appendChild(filaMedico)      
    })

    /* 
        for(i=0; i<medicos.length; i++){
        let filaMedico=document.createElement("tr");
        //para crear una celda en el Dom hay un metodo que es insertCell() es similar al appendChild()
        let celdaNombres= filaMedico.insertCell();
        let celdaApellidos= filaMedico.insertCell();
        let celdaCedula= filaMedico.insertCell();
        let celdaConsultorio= filaMedico.insertCell();
        let celdaTelefono= filaMedico.insertCell();
        let celdaEmail= filaMedico.insertCell();
        let celdaEspecialidad= filaMedico.insertCell();
        let celdaPaciente= filaMedico.insertCell();

        celdaNombres.textContent= medicos.nombres;
        celdaApellidos.textContent= medicos.apellidos;
        celdaCedula.textContent= medicos.cedula;
        celdaConsultorio.textContent= medicos.consultorio;
        celdaTelefono.textContent= medicos.telefono;
        celdaEmail.textContent= medicos.email;
        celdaEspecialidad.textContent= medicos.especialidad;
        celdaPaciente.textContent= "sin asignar";

        cuerpoTabla.appendChild(filaMedico);

    } 
    */
}
/* 
//**********Funcionalidad del tabla Lista de Pacientes***************
const mostrarPacientes= function (){
    let pacientes= []
    let cuerpoTabla=document.getElementById("cuerpoTabla_Pacientes")
    let localPacientes= localStorage.getItem("pacientes")
    //esta condicion if es igual a (localPersonasJson != null) es decir la variable no esta vacia y tiene datos
    //si la variable "localMedicos" viene con datos(arreglo de objetos en formato JSON) entra al "if", 
    //la convierte en un arreglo de objetos de javascript y la guarda en la variable de tipo arreglo "medicos".
    if(localPacientes){
        pacientes= JSON.parse(localPacientes)
    }

    //"forEach" para recorrer todas las posiciones del arreglo de objetos
    //Dentro del "forEach" por cada posicion del arreglo crea un elemento html y lo guardar en la variable
    //"filaMedico", "<tr>" es como una fila dentro de una tabla en html
    //En cada fila va agregando celda tras celda y lo guarda en sus respectivas variables 
    pacientes.forEach(paciente => {
        let filaPaciente=document.createElement("tr")
        //para crear una celda en el Dom hay un metodo que es insertCell() es similar al appendChild()
        let celdaNombres= filaPaciente.insertCell()
        let celdaApellidos= filaPaciente.insertCell()
        let celdaCedula= filaPaciente.insertCell()
        let celdaEdad= filaPaciente.insertCell()
        let celdaTelefono= filaPaciente.insertCell()
        let celdaEspecialidad= filaPaciente.insertCell()
        let celdaMedico= filaPaciente.insertCell()
        
        //En cada celda en su respectivo atributo "textContent" se guarda el valor que tiene el objeto "medico" 
        //en su atributo respectivo
        celdaNombres.textContent= paciente.nombres
        celdaApellidos.textContent= paciente.apellidos
        celdaCedula.textContent= paciente.cedula
        celdaEdad.textContent= paciente.edad
        celdaTelefono.textContent= paciente.telefono
        celdaEspecialidad.textContent= paciente.especialidad
        celdaMedico.textContent= "sin asignar";
        
        //por cada posicion del arreglo "medicos" en el cuerpo de la tabla se va adjuntando como hijo cada fila
        //que dentro lleva sus respectivas celdas con la informacion a mostrar   
        cuerpoTabla.appendChild(filaPaciente)

        
    })

}
//***************************************************************
 */

//Unicamente ejecuta la funcion cuando estamos ubicados en listaMedicos.html
if(window.location.href.endsWith("listaMedicos.html")){
    mostrarMedicos()
}
/* 
if(window.location.href.endsWith("ListaPacientes.html")){
    mostrarPacientes()
}
 */

//Unicamente ejecuta el evento addEventListener cuando estamos ubicados en registroMedicos.html
if(window.location.href.endsWith("registroMedicos.html")){

    //El evento para enviar la informacion del formulario formularioMedicos va ser de tipo enviar o guardar
    // es decir submit
    formularioMedicos.addEventListener("submit", function(event) {
        //previene que la pagina se recargue sin antes hacer la logica del addEventListener
        event.preventDefault()
        //obtenemos los valores ingresados en las etiquetas html o inputs del Dom y luego los guardamos en variables
        let valorNombres= nombres.value
        let valorApellidos= apellidos.value
        let valorCedula = cedula.value
        let valorConsultorio= consultorio.value
        let valorTelefono= telefono.value
        let valorEmail= email.value
        let valorEspecialidad= especialidad.value

        //instanciamos un objeto Medico de tipo Usuario donde almacenaremos los valores de las variables
        //anteriormente creadas en los parametros del constructor del objeto  
        const medico= new Usuario(valorNombres, valorApellidos, valorCedula, valorTelefono, 
            valorEspecialidad)
        //se le crea 2 atributos mas al objeto Medico para guardar los valores de las variables restantes
        medico.consultorio= valorConsultorio
        medico.email= valorEmail
        //se crea el arreglo en el que se almacenaran los objetos a guardar en el localStorage
        let medicos=[]
        //Obtiene del localStorage la llave-valor "medicos" y la guarda en la variable "localMedicos"
        let localMedicos= localStorage.getItem("medicos")
        //Si "localMedicos" no esta vacio es decir tiene valores(objetos) lo convierte a un arreglo de objetos
        // de javascript
        if(localMedicos){
            medicos= JSON.parse(localMedicos) //convierte el arreglo objetos de formato Json a arreglo javascript
        }
        //"medicos" el arreglo de objetos con valores o asi este vacio se va a guardar el nuevo objeto "medico" 
        //con "push" luego en el localStorage guarde este arreglo convertido a formato Json con su respectiva llave
        medicos.push(medico)
        localStorage.setItem("medicos", JSON.stringify(medicos))

        //para comprobar si la app esta tomando los valores de los elementos html del dom
        console.log(medico)
        alert("registrado")
    
    } )

}
/* 

//**********Funcionalidad del fomulario Registro de Pacientes***************
if(window.location.href.endsWith("RegistroPacientes.html")){

    //El evento para enviar la informacion del formulario formularioMedicos va ser de tipo enviar o guardar
    // es decir submit
    formularioPacientes.addEventListener("submit", function(event) {
        //previene que la pagina se recargue sin antes hacer la logica del addEventListener
        event.preventDefault()
        //obtenemos los valores ingresados en las etiquetas html o inputs del Dom y luego los guardamos en variables
        let valorNombres= nombres.value
        let valorApellidos= apellidos.value
        let valorCedula = cedula.value
        let valorEdad= edad.value
        let valorTelefono= telefono.value
        let valorEspecialidad= especialidad.value

        //instanciamos un objeto Medico de tipo Usuario donde almacenaremos los valores de las variables
        //anteriormente creadas en los parametros del constructor del objeto  
        const paciente= new Usuario(valorNombres, valorApellidos, valorCedula, valorTelefono, 
            valorEspecialidad)
        //se le crea 2 atributos mas al objeto Medico para guardar los valores de las variables restantes
        paciente.edad= valorEdad
        //se crea el arreglo en el que se almacenaran los objetos a guardar en el localStorage
        let pacientes=[]
        //Obtiene del localStorage la llave-valor "medicos" y la guarda en la variable "localMedicos"
        let localPacientes= localStorage.getItem("pacientes")
        //Si "localMedicos" no esta vacio es decir tiene valores(objetos) lo convierte a un arreglo de objetos
        // de javascript
        if(localPacientes){
            pacientes= JSON.parse(localPacientes) //convierte el arreglo objetos de formato Json a arreglo javascript
        }
        //"medicos" el arreglo de objetos con valores o asi este vacio se va a guardar el nuevo objeto "medico" 
        //con "push" luego en el localStorage guarde este arreglo convertido a formato Json con su respectiva llave
        pacientes.push(paciente)
        localStorage.setItem("pacientes", JSON.stringify(pacientes))

        //para comprobar si la app esta tomando los valores de los elementos html del dom
        console.log(paciente)
        alert("registrado")
    
    } )

}
//******************************************************************
 */


//10/10 1:06








