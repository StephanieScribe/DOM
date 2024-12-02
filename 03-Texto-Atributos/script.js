/* 

    Seleccionamos los elementos por su id.

*/

const titulo = document.getElementById("title");
const lista = document.getElementById("list");

/* 

    Lo mostramos por consola

*/

console.log(titulo)
console.log(lista)

/* 

    innerText

    Devuelve un "string" del contenido visisble dentro de un elemento.

        elemento.innerText

    - Excluye los elementos ocultos
    - Excluye los espacios en el documento
    - Excluye las etiquetas html

*/

console.log(">>> Con innerText")
console.log(titulo.innerText)
console.log(lista.innerText)

/* 

    textContent

    Devuelve un "string" del contenido visible dentro de un elemento.

        elememto.textContent

    - Incluye los espacios
    - Incluye los elementos ocultos

*/

console.log(">>> Con textContent")
console.log(titulo.textContent)
console.log(lista.textContent)

/* 

    innerText

    Devuelve un "string" con la estrcutra interna de el elemento seleccionado.

        elemento.innerHTML

*/

console.log(">>> Con innerHTML")
console.log(titulo.innerHTML)
console.log(lista.innerHTML)

/* 

    Modificar el contenido con innerText

    Asigna el valor al elemento seleccionado.

        elemento.innerText = "string"

*/

titulo.innerText = "Campeones LoL";
lista.innerText = "No hay campeones"

/* 

    Modificar el contenido con textContent

    Asignamos el valor al elemento seleccionado

        elemento.textContent = "string"

*/

titulo.textContent = "Campeones del lol";
lista.textContent = "Cargando..."

/* 

    Modificar el contenido con innerHTML

    Asignamos  el valor al elemento seleccionado, incluyendo las etiquetas html

        elemento.innerHTML = "<tag> ... </tag>"

*/

titulo.innerHTML = "¡Amigos <span>campeoncitos</span>!"
lista.innerHTML = `<li>👻 Jinx</li> <li class="oculto">🦯 Viktor</li> <li>🔫 Caitlyn</li>`;

/* 

    getAttributte()

    Devuelve el valor del atributo del elemento.

    elemento.getAttribute(atributo)

*/

const enlace = document.getElementsByTagName("a")

console.log(enlace[0].getAttribute("href"))


/* 

    removeAttribute()

    Elimina el valor del atributo de un elemento.

        elemento.removeAttribute(atributo)

*/

enlace[0].removeAttribute("href");

console.log(enlace[0].getAttribute("href"))

/* 

    setAttribute()
    
    Asigna un atributo y un valor a un elemento.

        elemento.setAttribute(atributo, valor)

    - Sobreescribir un atributo ya declarado.
    - Crear un nuveo atributo y su valor.

*/

enlace[0].setAttribute("href", "")

console.log(enlace[0].getAttribute("href"));

/* Antes */

console.log(enlace[0].getAttribute("target"));

enlace[0].setAttribute("target" , "_blank");

/* Después */

console.log(enlace[0].getAttribute("target"));