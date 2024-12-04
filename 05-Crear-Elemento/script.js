/* 

    Obtenemos un elemento de referencia.

    - Este es el nodo de HTML donde vamos a crear un nuevo elemento

*/

const movies = document.getElementById("movies");

/* 

    Crear un nuevo elemento usamos createElement

        document.createElement(tipoElemento)

    - El tipo de elemento pasa como string "" o ''
    - Se debe guardar en una variable o constante.

*/

const newMovie = document.createElement("li")


/* 

    Agregamos el elemento al DOM desde la referencia usamos el método append()

        elementoReferencia.append(nuevoElemento)

    - El tipo de elemento no pasa como string.

*/

movies.append(newMovie)

/* 

    Agregamos texto al nuevo elemento con innerText

        elemento.innerText = valor

    - Valor pasa como string "" o ''

*/

newMovie.innerText = "💸 Alita";

/* 

    Agregamos las clases al nuevo elemento con el método add()

        elemento.classList.add(clase)

    - La clase pasa como string
    - El método acepta más de un parámetro separándolos con comas ,

*/

newMovie.classList.add("list-item" , "bg-two")

const movie2 = document.getElementById("movies");
const newMovie2 = document.createElement("li");
movie2.append(newMovie2)
newMovie2.innerText = "👻 Ghost in the Shell"
newMovie2.classList.add("list-item" , "bg-one")