
function numero() {

    var i;
    //for (i = 0; i < 20000; i++) {
        //console.log(i);
    //}
}

numero();

function boton() {
    console.log("se dio click");
}



// Sección 2 Variables, Objetos, Typeof, y Condicionales

//Tipos Primitivos
var num = 10;
var str = "Texto";
var bol = true;
var und = undefined;
var nul = null;

//Objetos

var obj = {
    numero: 10,
    texto: "Nuevo Texto",

    ObjetoHijo: {
        numero2: 2,
        texto2: "Nuevo Texto 2" 
    }
}

//console.log(obj);

//Video 12 Notación de puntos y corchetes
var persona = {
    nombre: "Andres",
    apellido: "Ortega",
    edad: 33,
    direccion: {
        pais: "Ecuador",
        ciudad: "Quito",
        edificio: {
            nombre: "Iñaquito",
            telefono: "222-333"
        }
    }
}

//console.log(persona.nombre)
//console.log(persona.direccion.ciudad);

persona.direccion.postal = 123456; //Se agrega un dato mas al objeto persona dentro del otro objeto direccion
//console.log(persona.direccion.postal);

//Notación de Punto

var piso = persona.direccion.edificio;
piso.numpiso = "8vo piso";

//console.log(piso.numpiso);

//Notacion de corchete
//console.log(persona["edad"]);



//FUNCIONES
//var a = 30;
function miFuncion() {
    var a = 30;
    console.log( a );
}

//miFuncion();


//FUNCIONES CON PARAMETROS
function imprimir1(nombre, apellido) {
    apellido = apellido || "Cualquier apellido"; //Esto quiere decir que si se declara en la llamada de la fncion en apellido sera ese nombre caso contrario se imprme el texto cualquier apellido
    console.log(nombre, apellido);
}


//var nombre = "Andres" //Esto es una variable anonima para las funciones con parametros
//imprimir1("Andres"); //Esto es una variable anonima para las funciones con parametros

// FUNCION CON OBJETO

function imprimir(persona) {
    console.log(persona.nombre + " "  + persona.apellido);
}

var obj = {
    nombre: "Andres",
    apellido: "Ortega Pindo",
}

//imprimir(obj);


//Metodos y el objeto THIS
var nombre = "Juan Carlos";

var persona = {
    nombre: "Maria",
    apellido: "Dubon",
    imprimirNombre : function () {
        console.log(this.nombre, this.apellido); // Aqui el this recoje los datos de la variable persona que llega hacer un obj
    },
    direccion: {
        pais: "Costa Rica",
        obtenerPais: function(){
            var self = this; // Con esto me retoma el this al obj direccion
            var nuevaDireccion = function(){
                console.log(self);
                //console.log(this);  //Regresa a la ventana raiz (window)
            }
            nuevaDireccion();
        }                    

    }
    
}


//persona.direccion.obtenerPais();
//persona.imprimirNombre();
//persona.direccion.obtenerPais();


//La PALABRA RESERVADA NEW
function person(nombre, apellido) {

    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = 30;

    this.imprimirPersona = function() {
        return this.nombre + " " + this.apellido + "(" + this.edad + ")"; 
    }

}

var juan = new person("Andres", "Ortega"); //Cuando yo no coloco la palabra reservada new (el resultado sera undifined) regresa window con los paramwtros q le pase a la funcion persona en consola se lo puede ver con colocando la palabra this
// si coloco la palabr new me regresa la funcion person como un objeto
console.log(juan.imprimirPersona()); //Me imprime lo que esta dentro de this.imprimirPersona
//console.log(juan); // me imprimero el objeto person