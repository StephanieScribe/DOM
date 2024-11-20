/* 

    DOM

    Organiza los elementos del documento en "nodos" en un árbol jerárquico.

    Nodo -> Todo elemento individual de nuestro documento.

    Tipos de Nodo

    1. Nodo de documento
    2. Nodo de Elemento
    3. Nodo de atributo
    4. Nodo de texto 
    5. Nodo de comentarios

*/

/* 

    Nodo de Documentos

    Este nodo representa el documento completo de html. Incluye el contenido desde la "raiz" - Root, hasta los elementos hijos.

    Para acceder usamos:

    -> document    

*/

console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.title);
console.log(document.URL);

/* 

    Nodo elemento 

    Para seleccionar nodos de elementos, usamos

    getElementsByTagName("etiqueta")

    Se escribe desupués del nodo "document"

*/

let title = document.getElementsByTagName ("p");

console.log(title)

/* 

    Nodos de atributo

    Son los nodos que accedemos a través de su clase o de su id

    getElementById("nombreId")
    getElementByClassName("nombreClase")

    querySelector("nombreSelector") -> Seleccione el primer elemento que encuentre en el selector

    querySeelectorAll("nombreSelector") -> Seleccionar todos los elementos con el mismo selector.

*/

/* 

let titulos = document.getElementById("title")

console.log(title.innerText);
console.log(title);
console.log(title.id);

let texts = document.getElementsByClassName("paragraph");

console.log(texts);
console.log(texts[0].textContent);
console.log(texts[1].textContent);

*/

// let titulo = document.querySeelector("h1"); // Tag
// let titulo = document.querySeelector("#title"); //Id
let titulo = document.querySelector(".title"); // Class

console.log(titulo)

// let parrafos = document.querySelectorAll("p"); // Tag
// let parrafos = document.querySelectorAll('#paragraph'); // Id
let parrafos = document.querySelectorAll(".paragraph"); // Class

console.log(parrafos)

/* 

    Nodo de Texto

    Son los elementos de texto contenidos en las etiquetas de html.

    .innerText
    .textContent 

*/

let subtitle = document.querySelector(".subtitle");
console.log(subtitle.innerText);
console.log(subtitle.textContent);

/* 

    Nodos de Comentarios

    Tienen un valor de 8 dentro del DOM 

*/

let comentario = document.COMMENT_NODE;

console.log(comentario)