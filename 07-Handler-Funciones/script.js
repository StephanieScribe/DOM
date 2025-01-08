/* 

    Handler - Funciones

    El handler en un evento es una función que se ejecuta cuando el evento ocurre.

    Hay 3 formas de escribir la función Handler.

    1. Como una función externa
    2. Como una función anónima
    3. Como una función flecha

        Función externa

    Esta función se escribe por fuera del evento y pasa como argumento al addEventListener. 

    function handler() {
        //código a ejecutar 
    }

    elemento.addEventListener
    (tipoEvento . handler)

        Función anónima
    
    Se escribe dentro del evento y no tiene nombre.

    elemento.addEventListener(tipoEvento , function() { //Código que se ejecuta } );

        Función flecha

    Se escribe dentro del evento, no tiene nombre, pero es más concisa. 

        elemento.addEventListener(tipoEvento, () => { //Código que se va a ejecutar })

    *Cuando el código que se ejecuta tiene más de una línea, se debe escribir entre las llaves
    *Si el código que se ejecuta solo tiene una línea, se pueden omitir. 

*/

/* Referencias */

const externa = document.getElementById('externa');
const anonima = document.getElementById('anonima');
const flecha = document.getElementById('flecha');

/* Función externa */

function funcionExterna() {
    console.log("Click en el botón externo")
};

externa.addEventListener('click' , funcionExterna);

/* Función anónima */

anonima.addEventListener('click' , function(){
    console.log("click en el botón anónima")
})

/* Función flecha */

flecha.addEventListener('click' , () => {
    console.log("Click en el botón flecha")
})