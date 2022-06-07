
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
    iniciarJuego(equiposFutbol);
})

botonAnimales.addEventListener("click", function(e){
    transicionPantallas(pantallaCategorias,"none",pantallaJuego,"block");
    iniciarJuego(animales);
})

botonTecnologia.addEventListener("click", function(e){
    transicionPantallas(pantallaCategorias,"none",pantallaJuego,"block");
    iniciarJuego(tecnologia);
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
    transicionPantallas(pantallaAgregarPalabra,"none",pantallaJuego,"block");
    iniciarJuego(palabraElegida);
})


var letraOculta = document.getElementsByClassName("letra-oculta");
var letrasPresionadas = document.getElementById("letrasIncorrectas");
var cantidadVidas = document.querySelectorAll(".vida");

//Inicio de las reglas y del juego en si
var aciertos = 0;
var errores = 5;
var vidasDisponibles = 4;
var letrasseleccionadas = "";
var letrasUsadas = [];


function juegoPerdido(){
    alert("PERDISTE PELOTUDO");
}


function juegoGanado(){
    alert("GANASTE");
}


function letraEsIncorrecta(){
    cantidadVidas[vidasDisponibles].style.opacity = 0
    errores--
    vidasDisponibles--
    if (errores == 0){
        juegoPerdido();
    }
}



function letraEsCorrecta(letraPresionada){
    for (let i = 0; i <= (palabraSecreta.length - 1); i++){
        if ((letraPresionada) === (letraOculta[i].textContent)){
            letraOculta[i].style.opacity = 1;
            aciertos++
         }
    }
    if (aciertos == (palabraSecreta.length)){
        juegoGanado();
    }
}



function letraesValida(letraPresionada){
    if (palabraSecreta.includes(letraPresionada)){
        letraEsCorrecta(letraPresionada);
    } else {
        letraEsIncorrecta(letraPresionada);
    }

}


function eventoLetra(e){
    let letraPresionada = (e.key.toUpperCase());
    if (letraPresionada.match(/^[a-zñ]$/i) && !letrasUsadas.includes(letraPresionada)) {

        letraesValida(letraPresionada); 
    }
} 


function iniciarJuego(array){
    document.addEventListener("keydown", eventoLetra)   
    crearGuionesPalabra(array);
}






// for (let i = 0; i <= (palabraSecreta.length - 1); i++){
//     if ((e.key.toUpperCase()) === (letraOculta[i].textContent)){
//         letraOculta[i].style.opacity = 1;
//     }
// }
// letrasIncorrectas.push(e.key.toUpperCase());
// letrasPresionadas.textContent = "letras presionadas: " + letrasIncorrectas;



















































































//funcionamiento del canvas













