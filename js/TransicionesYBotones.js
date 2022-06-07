// Variables que seleccionan pantalla

var pantallaPrincipal = document.querySelector("#pantalla-principal");
var pantallaComoJugar = document.querySelector("#pantalla-comoJugar");
var pantallaCategorias = document.querySelector("#pantalla-categorias");
var pantallaAgregarPalabra = document.querySelector("#pantalla-agregarPalabra");
var pantallaJuego = document.querySelector("#pantalla-juego");


// variables que seleccionan botones correspondientes

var botonNuevoJuego = document.getElementById("botonNuevoJuego");
var botonComoJugar = document.querySelector("#botonComoJugar");
var botonVolver = document.querySelector("#botonVolver");
var botonJuegoPersonalizado = document.querySelector("#boton-juegoPersonalizado");
var botonJugar = document.querySelector("#botonJugar");

//funcion que realiza la transicion entre las pantallas
function transicionPantallas(pantalla1, propiedad1, pantalla2, propiedad2){
    pantalla1.style.display = propiedad1;
    pantalla2.style.display = propiedad2;
}

//funcionamiento de los botones

botonNuevoJuego.addEventListener("click", function(e){
    transicionPantallas(pantallaPrincipal, "none", pantallaCategorias, "block");
})

botonJuegoPersonalizado.addEventListener("click", function(e){
    transicionPantallas(pantallaCategorias, "none", pantallaAgregarPalabra, "flex");
})

botonVolver.addEventListener("click", function(e){
    transicionPantallas(pantallaAgregarPalabra,"none",pantallaCategorias,"block");
})

botonComoJugar.addEventListener("click", function(e){
    transicionPantallas(pantallaPrincipal, "none", pantallaComoJugar, "block");
})

botonJugar.addEventListener("click", function(e){
    transicionPantallas(pantallaComoJugar, "none", pantallaCategorias,"block");
})

//arrays que contienen las palabras de la categoria elegida
var equiposFutbol = ["BOCA JUNIORS", "BARCELONA", "ARSENAL", "MILAN","INDEPENDIENTE","RACING"];
var animales = ["PERRO", "GATO", "CABALLO", "CABRA", "CERDO"];
var tecnologia = ["IPHONE", "ANDROID", "NETFLIX", "AMAZON", "JAVASCRIPT"];

//capturar que boton se presiono en pantallaCategorias
var botonFutbol = document.getElementById("botonFutbol");
var botonAnimales = document.querySelector("#botonAnimales");
var botonTecnologia = document.querySelector("#botonTecnologia");
var botonGuardarYJugar = document.querySelector("#botonGuardarYJugar");


// Funcionamiento de la seccion de agregar una palabra

// var palabraElegida = "";
// var inputNuevaPalabra = document.querySelector("#input-nueva-palabra");

// inputNuevaPalabra.addEventListener("keyup", function(e){
//     inputNuevaPalabra.value = inputNuevaPalabra.value.toUpperCase();
//     inputNuevaPalabra.value = inputNuevaPalabra.value.replace(/[^A-Z]/, "");
    
// })

// botonGuardarYJugar.addEventListener("click", function(e){
    

    




















