/* 

    Seleccionar el elemento h1 a través de su clase.

*/

const titulo = document.querySelector(".titulo");

/* 

    Mostramos el nodo seleccionado

*/

console.log(titulo);

/* 

    Objeto style 

    Accedemos a el usando la notación de punto (.)

        elemento.style

    Resultado es CSS Style Declaration. Es una lista que representa todas las propiedades de estilo de un elemento.

    Unicamente muestra el valor de los estilos en línea declarados directamente en el elemento html.

*/

console.log(titulo.style);

/* 

    Propiedades de Estilo

    Accedemos a las propiedades usando la notación de punto (.)

        elemento.style.nombrePropiedad

    A diferencia de CSS, las propiedades de CSS, las propiedades de estilo en JS las escribimos usando el formato camelClase.

    CSS -> background-color (kebab-case)
    JS -> backgroundColor ()

*/

console.log("Valores en línea. Color:" + titulo.style.color + "- Fondo:" + titulo.style.backgroundColor)