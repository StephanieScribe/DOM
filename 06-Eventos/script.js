/* 

    Evento 

    Un evento es una acción o suceso que ocurre en el navegador o en un elemento DOM. Puede ser iniciado por el usuario o por el sistema y pueden ser *manejados* mediante javascript.

    + Manejar Eventos 

    Significa escribir código qie "reaccione" de cierta manera cuando algo específico suceda. Para manejar eventosa es importante conocer algunos aspectos clave.

    1. Target (Blanco)

    El elemento target es el elemento del DOM en el que ocurrió el evento. Este se encuentra dentro del objeto evento (event) y se accede mediante la propiedad event.target

    2. Event Listener (Escuchador)

    El event listener es el "oido" que está atento a que ocurra un evento en un elemento específico. Usamos el método addEventListener para escuchar eventos.

    3. Trigger (Disparador)

    Es simplemente el desencadenante que provoca que un evento ocurra. Es la acción que realiza el usuario o el sistema para activar el evento.

        + Hacer click
        + Mover el ratón
        + Escribir en un input

    4. Event Handler (Manejador)

    El event handlres es la función que se ejecuta cada vez que ocurre el evento. Con código JS le decimos qué hace el event handler.

        + Mostrar un mensaje
        + Cambiar de color
        + Lanzar una alerta
        + ...
    
    Sintaxis

        target.eventListener( trigger , eventHandler )

    - target: elemento donde ocure el evento
    - listener: Escucha y detecta el evento
    - trigger: La acción que ocurre en el evento
    - handler: la función que se ejecuta al ocurrir el evento.

*/

/* 

    Seleccionar el elemento.

*/

const button = document.getElementById("button");

/* 

    Manejar el evento

*/

button.addEventListener("click" , mostrarMensaje);

/* 

    Definición de la función

*/

function mostrarMensaje() {
    console.log("Le haz pikado");
}