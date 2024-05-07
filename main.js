// document

// console.log("document", document);

// document

// 3 metodos especiales para poder seleccionar nodos

// sintaxis
// document.nombredelmetodo

// getElementById
// getElementsByClassName
// getElementsByTagName
// getElementsByName

// requieren de parametros, 1 solo parametro

// Caracteristica principal de un id dentro de html (único)
// document.getElementById("id") -> 1 // HTMLElement

// Caracteristicas de una clase en html
// document.getElementsByClassName -> varios // HTMLCollection []

// Caracteristica de un selector por tagname
// document.getElementsByTagName -> varios // HTMLCollection []


// document.getElementsByName -> varios // HTMLCollection []

// Seleccionar el elemento con id uno

//  querySelector -> 1 elemento
//  querySelectAll -> varios elementos

// sintaxis de selectores de css  #, ., nombre de las tags, value=[], #numero > img

// querySelector y querySelectorAll son menos optimas en consumo de recursos


// Seleccion por id
const elementoUno = document.getElementById("uno");

const elementoUno2 = document.querySelector("#uno");

console.log("elemenoUno ", elementoUno);
console.log("elemenoUno2 ", elementoUno2);

elementoUno.style.display = "flex";

console.log(elementoUno.style)

// Seleccion por clase

const elementosUno = document.getElementsByClassName("entero"); // HTMLCollection
const elementosUno2 = document.querySelectorAll(".entero"); // NodeList

// convertir HTMLCollection o NodeList a Array
const arrElementosUno = Array.from(elementosUno); // NodeArray
console.log("arrElementosUno ", arrElementosUno);
                                                //  value, position, array  
                                                //  node,   0,       arrElementosUno
const arrElementosUnoClases = arrElementosUno.map((valor, posicion, array) => {
    return valor.classList
    // return array[posicion].classList
    // return arrElementosUno[n].classList
});

console.log("arrElementosUnoClases", arrElementosUnoClases);


console.log("elementosUno ", elementosUno);
console.log("elementosUno2 ", elementosUno2);

