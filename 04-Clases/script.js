/* 

    Accedemos al primer elemento de la lista.

*/

const botanas = document.getElementsByTagName("li");

console.log(botanas[0]);

/* 

    Propiedad classList

    Accedemos a la lista de clases que tiene un elemento.

        elemento.classList

    - Devuelve un DOM token List (Listado de clases en el DOM en tipo array)

*/

console.log( botanas[0].classList);
console.log( botanas[0].classList[0]); // Acceso a través de su índice.

/* 

    Para agregar clases usamos el método add()

        elemento.classList.add(clase)

    - Nombre de la clase pasa como string entre "" o ''

*/

botanas[1].classList.add("bg-violet");

/* 

    Verificar si existe una clase en un elemento con el método contains()

        elemento.classList.contains(clase)

    - Devuelve true si existe la clase
    - Devuelve false si no existe la clase
    - La clase pasa como string entre "" o ''

*/

console.log( botanas[2].classList.contains("botana") )
console.log( botanas[2].classList.contains("bg-lightpink") )

/* 

    Para eliminar una clase usamos el método remove()

        elemento .classList.remove(clase)

    - La clase pasa como un string entre "" o ''

*/

botanas[3].classList.remove("bg-violet");
botanas[3].classList.remove("botana");