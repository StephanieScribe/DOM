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

/* 

    Método de propiedad

    Asignar el valor de la propiedad de estilo en el elemento seleccionado

        elemento.style.nombrePropiedad = "valor"

    Forma más directa y legible de asignar propiedades.
    Solo admite asignar propiedades con formato camelCase.

*/

titulo.style.color = "blue" ;
titulo.style.backgroundColor = "red" ;

console.log("Valores asignados con JS. Color:" + titulo.style.color + " - fondo: " + titulo.style.backgroundColor);

/* 

    Método setProperty()

    Asignamos una propiedad de estilo al elemento seleccionado.

    elemento.style.setProperty(nombrePropiedad, valor, important)

    - Más flexible y poderoso.
    - las propiedades se escriben en formato kebab-case.
    - Parametro "important" es opcional.

*/

titulo.style.setProperty("color", "hotpink");
titulo.style.setProperty("backgraound-color", "red", "important");

console.log("valores asignados con setProperty. Color: " + titulo.style.color + " - fondo: " + titulo.style.backgroundColor);

/* 

    Eliminar valores de propiedades

    Usamos el método de propiedad y le definimos una cadena de texto vacia.

        elemento.style.nombrePropiedad = ""

    Esto elimina los valores previamente definidos en JS y en los estilos en línea.

*/

titulo.style.color = "";
titulo.style.backgroundColor = "";

/* 

    Método removeProperty()

    Elimina la propiedad de estilo.

        elemento.style.removeProperty
        (nombrePropiedad)

*/

titulo.style.removeProperty("color");
titulo.style.removeProperty("background-color");

