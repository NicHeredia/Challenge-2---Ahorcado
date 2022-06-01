var pantallaPrincipal = document.querySelector("#pantalla-principal");
var pantallaAgregarPalabra = document.querySelector("#section-agregar-palabra");


var botonNuevaPalabra = document.querySelector("#boton-nuevaPalabra");
var botonSalir = document.querySelector("#botonSalir");

botonNuevaPalabra.addEventListener("click", function(e){
    pantallaPrincipal.style.display = "none";
    pantallaAgregarPalabra.style.display = "flex";

})

botonSalir.addEventListener("click", function(e){
    pantallaAgregarPalabra.style.display = "none";
    pantallaPrincipal.style.display = "block";

})

var inputNuevaPalabra = document.querySelector("#input-nueva-palabra");

inputNuevaPalabra.addEventListener("keyup", function(e){
    inputNuevaPalabra.value = inputNuevaPalabra.value.toUpperCase();
    inputNuevaPalabra.value = inputNuevaPalabra.value.replace(/ /, "");
})

var arrayNuevasPalabras = [];
var botonGuardarPalabra = document.querySelector("#botonGuardar");
var parrafoPalabrasNuevas = document.querySelector("#mostrarPalabrasNuevas");

botonGuardarPalabra.addEventListener("click", function(e){
    arrayNuevasPalabras.push(inputNuevaPalabra.value);
    parrafoPalabrasNuevas.style.display = "block";
    inputNuevaPalabra.value = "";
    parrafoPalabrasNuevas.textContent = "Se agrego correctamente la palabra " + arrayNuevasPalabras;

})





















