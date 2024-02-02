let numeroMaximo = 0;
let intentos=0;
let listaNumeroSorteados =[];

let nSecreto ;
condicionesIniciales();


function print(texto){
    console.log(texto);
}


function intentoVerificarUsuario(){
    let numeroUsuario = parseInt(document.getElementById("numeroUsuario").value);

    intentos++;
    if(numeroUsuario===nSecreto){
        definirTextoElemento("p","Ganaste el juego del número secreto!");
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        
        if(numeroUsuario<nSecreto){
            definirTextoElemento("p",`El número secreto es MAYOR que ${numeroUsuario}!`);
        }else{
            definirTextoElemento("p",`El número secreto es MENOR que ${numeroUsuario}!`);
        }
        definirTextoElemento("strong",intentos);
        limpiarCaja();
    }
    

}

function reiniciarJuego(){
    
    condicionesIniciales();
    limpiarCaja();
    definirTextoElemento("strong",intentos);
 
    document.getElementById("reiniciar").setAttribute("disabled",true);
}

function limpiarCaja(){
    document.getElementById("numeroUsuario").value="";
}

function definirTextoElemento(selector, texto){
    let elementoHTML = document.querySelector(selector);
    elementoHTML.innerHTML = texto;
}

function definirPlaceholderElemento(selector, texto){
    let elementoHTML = document.querySelector(selector);
    elementoHTML.placeholder = texto;
}

function condicionesIniciales(){
    numeroMaximo = 10;
    intentos=0;

    nSecreto = numeroSecreto();

    definirTextoElemento("h1","Juego del número secreto");
    definirTextoElemento("p",`Ingrese un número del 1 al ${numeroMaximo}`);
    definirPlaceholderElemento(".container__input","Ingrese número");
}

function numeroSecreto(){
    let numeroGenerado = Math.floor((Math.random()*numeroMaximo)+1);

    if(listaNumeroSorteados.includes(numeroGenerado)){ // busca si existe el numeroGenerado en el array
        return numeroSecreto();
    }else{
        if(listaNumeroSorteados.length==3){
            listaNumeroSorteados.push(numeroGenerado);
            listaNumeroSorteados.splice(0,1);
            return numeroGenerado;
        }else{
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }

    }

}

