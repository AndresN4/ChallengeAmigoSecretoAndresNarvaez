// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
function asignarTextoElemento (elemento,texto){
    let elementHTML= document.querySelector(elemento);
    elementHTML.innerHTML = texto;
}

let amigoEntrada= 'pedro';
let sorteado= '';
let listaAmigosSecretos= [];
let tamañoLista= 0;
let suerte= '';
let suerteA= '';
function limpiarCaja() {
    document.querySelector('#amigo').value='';
}

function agregarAmigo () {
    amigoEntrada= document.getElementById('amigo').value;

    if (listaAmigosSecretos.includes(amigoEntrada)) {
        limpiarCaja();
        alert('Este nombre ya esta incluido');
        
    } else{
        if (amigoEntrada!='' ) {
            //console.log(amigoEntrada);
            listaAmigosSecretos.push(amigoEntrada);
            tamañoLista= listaAmigosSecretos.length;
            //console.log(listaAmigosSecretos);
            asignarTextoElemento(`h2`, sorteado + amigoEntrada + ` , <br> Amigos ingresado ${tamañoLista}` );
            sorteado = sorteado + amigoEntrada + ' , '; 
            limpiarCaja();
        } else{
            alert ('El campo esta vacio, Ingrese un nombre porfavor');
            limpiarCaja();
        }
    }
}

function sortearAmigo () {
    
    suerteA= Math.floor(Math.random()*tamañoLista);
    if (suerte==suerteA) {
        sortearAmigo();
    }else{
        //console.log(suerteA); 
        asignarTextoElemento(`h2`,`El amigo secreto es ${listaAmigosSecretos[suerteA]} ` );
        suerte=suerteA;
    }
}


