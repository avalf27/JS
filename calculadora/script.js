var operandoa;
var operandob;
var operacion;

function init(){
    //variables
    var barra = document.getElementById('barra');
    var eliminar = document.getElementById('eliminar');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('dividir');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');
    var coma = document.getElementById('coma');
    var porcentaje = document.getElementById('porcentaje');

    //eventos
    uno.onclick = function(e){
        barra.textContent = barra.textContent  + "1";
    }

    dos.onclick = function(e){
        barra.textContent = barra.textContent  + "2";
    }

    tres.onclick = function(e){
        barra.textContent = barra.textContent  + "3";
    }

    cuatro.onclick = function(e){
        barra.textContent = barra.textContent  + "4";
    }

    cinco.onclick = function(e){
        barra.textContent = barra.textContent  + "5";
    }

    seis.onclick = function(e){
        barra.textContent = barra.textContent  + "6";
    }

    siete.onclick = function(e){
        barra.textContent = barra.textContent  + "7";
    }

    ocho.onclick = function(e){
        barra.textContent = barra.textContent  + "8";
    }

    nueve.onclick = function(e){
        barra.textContent = barra.textContent  + "9";
    }

    cero.onclick = function(e){
        barra.textContent = barra.textContent  + "0";
    }

    coma.onclick = function(e){
        barra.textContent = barra.textContent  + ".";
    }

    porcentaje.onclick = function(e){
        barra.textContent = barra.textContent  + "%";
    }

    eliminar.onclick = function(e){
        resetear();
    }

    suma.onclick = function(e){
        operandoa = barra.textContent;
        operacion = "+";
        limpiar();
    }

    resta.onclick = function(e){
        operandoa = barra.textContent;
        operacion = "-";
        limpiar();
    }

    multiplicacion.onclick = function(e){
        operandoa = barra.textContent;
        operacion = "*";
        limpiar();
    }

    division.onclick = function(e){
        operandoa = barra.textContent;
        operacion = "/";
        limpiar();
    }

    igual.onclick = function(e){
        operandob = barra.textContent;
        resolver();
    }

    porcentaje.onclick = function(e){
        operandoa = barra.textContent;
        operacion="%";
        limpiar();
    }

}

function limpiar(){
    barra.textContent = "";
}

function resetear(){
    barra.textContent = "";
    operandoa=0;
    operandob=0;
    operacion="";
}

function resolver(){
    
    var barra = document.getElementById('barra');
    var operacionValidar = barra.textContent;

    if(expresionValida(operacionValidar)){
    var res= 0;
    switch(operacion){
        case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
            break;
        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;
        case "*":
            res = parseFloat(operandoa) * parseFloat(operandob);
            break;
        case "/":
            res = parseFloat(operandoa) / parseFloat(operandob);
            break;
        case "%": 
            res = (parseFloat(operandoa)*parseFloat(operandob))/100;
            break;
    }
    resetear();
    barra.textContent = res;
    } else {
        alert("Expresion no valida.Porfavor , ingrese una expresion matematica valida. ");
    }
}

function cambiarSigno(numero){
    return numero * (-1);
}

const botonSigno = document.getElementById('mas_menos');
botonSigno.addEventListener("click",() =>{
    const numeroActual = document.getElementById('barra').value;
    document.getElementById('barra').value = cambiarSigno(numeroActual);
})
//Funcion que aplica el patron que se va a utilizar para validar la operacion.
function expresionValida(operacionValidar){
const patron = /^[0-9+\-*/. %]+$/;

if(!patron.test(operacionValidar)){
    return false;
}

if (!tieneParentesis(operacionValidar)){
    return false;
}

    return tieneParentesis(operacionValidar);
}


function tieneParentesis(operacionValidar){
    const pila = [];

    for(let caracter of operacionValidar){
        if(caracter === '('){
            pila.push(caracter);
        }else if (caracter === ')'){
            if(pila.length === 0){
                return false;
            }
            pila.pop();
        }
    }
    return pila.length === 0;

}


 document.getElementById('skin-seleccionada').addEventListener('change',function(){
        var opcionSeleccionada = this.value;

        var styles = document.getElementById('paginas-estilo');

        if(opcionSeleccionada === 'Skin1'){
            styles.href = './css/estilo1.css';
        } else if (opcionSeleccionada === 'Skin2') {
            styles.href = './css/estilo2.css';
        } else if (opcionSeleccionada === 'Skin3'){
            styles.href = './css/estilo3.css';
        }
 });



 //Regla 6: const patron = /^[0-9+\-*=.%]+(?=^(\+|-)$)/;

 //Regla 7: const patron = /^[0-9]+(\.[0-9]{1})?$/;

 //Regla 8: const patron = /^[0-9+\-*=.%]+(?=(/0|0\.0))/;

 //Regla 10: const patron = /^[0-9+\-*=.%]+(?=(=|%|$))/;
