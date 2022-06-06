//arrays que contienen las palabras de la categoria elegida
var equiposFutbol = ["BOCA JUNIORS", "BARCELONA", "ARSENAL", "MILAN","INDEPENDIENTE","RACING"];
var animales = ["PERRO", "GATO", "CABALLO", "CABRA", "CERDO"];
var tecnologia = ["IPHONE", "ANDROID", "NETFLIX", "AMAZON", "JAVASCRIPT"];

//capturar que boton se presiono en pantallaCategorias
var botonFutbol = document.getElementById("botonFutbol");
var botonAnimales = document.querySelector("#botonAnimales");
var botonTecnologia = document.querySelector("#botonTecnologia");
var botonGuardarYJugar = document.querySelector("#botonGuardarYJugar");


//Elegir palabra random y crear los guiones correspondientes con las letras
//ocultas
var palabraSecreta = "";
function crearGuionesPalabra(array){
    palabraSecreta = array[Math.floor(Math.random()*array.length)];
    var tableroJuego = document.getElementById("tablero-juego");
    
    for(let i = 0; i <= (palabraSecreta.length - 1); i++){
        var div = document.createElement("div");
        var span = document.createElement("span");
        div.classList.add("guionPalabraSecreta");
        span.classList.add("letra-oculta");
        div.appendChild(span);
        span.textContent = palabraSecreta[i];
        tableroJuego.appendChild(div);
    }
    return palabraSecreta;
}

//funcionamiento de los botones que inician el juego

botonFutbol.addEventListener("click", function(e){
    transicionPantallas(pantallaCategorias,"none",pantallaJuego,"block");
    crearGuionesPalabra(equiposFutbol);
})

botonAnimales.addEventListener("click", function(e){
    transicionPantallas(pantallaCategorias,"none",pantallaJuego,"block");
    crearGuionesPalabra(animales);
})

botonTecnologia.addEventListener("click", function(e){
    transicionPantallas(pantallaCategorias,"none",pantallaJuego,"block");
    crearGuionesPalabra(tecnologia);
})


// Funcionamiento de la seccion de agregar una palabra

var inputNuevaPalabra = document.querySelector("#input-nueva-palabra");

inputNuevaPalabra.addEventListener("keyup", function(e){
    inputNuevaPalabra.value = inputNuevaPalabra.value.toUpperCase();
    inputNuevaPalabra.value = inputNuevaPalabra.value.replace(/[^A-Z]/, "");
    
})

botonGuardarYJugar.addEventListener("click", function(e){
    var palabraElegida = [];
    palabraElegida.push(inputNuevaPalabra.value);
    palabraSecreta = palabraElegida[0];
    crearGuionesPalabra(palabraElegida);
    transicionPantallas(pantallaAgregarPalabra,"none",pantallaJuego,"block");
})













































//funcionamiento del canvas













