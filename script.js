
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

miFuncion();