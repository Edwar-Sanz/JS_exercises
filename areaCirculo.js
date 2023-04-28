/* 
un programa el cual nos permita conocer el área de un 
circulo dado su radio. El programa debe cumplir con los 
siguientes requerimientos.

El programa podrá aceptar un radio con o sin punto decimal.
El programa debe mostrar en consola, con el siguiente mensaje:
 El área del circulo es: x, el resultado de la operación.

ejemplo radio = 0.5 | area = 0.7853

*/

let pi = Math.PI;
let radio = 0.5

function areaCirculo(radio){ return pi * radio**2 }

console.log(areaCirculo(radio));