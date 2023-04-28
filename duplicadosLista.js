/*
Dada una lista de números enteros.

[1, 2, 3, 2, 10, 20, 10, 2, 3, 4, 5, 2, 2] 

Desarrolla una función que elimine todos los elementos duplicados dentro de la colección.

La función debe cumplir con los siguientes requerimientos.

La función debe tener por nombre simple\list.
La función debe recibir como argumento una lista de números enteros.
La función debe retornar una lista con elementos únicos dentro de ella.
Si dentro de la lista existen 2 o más elementos duplicados, la lista debe retornar únicamente un elemento unico.
Ejemplo.

lista_a = [1, 2, 3, 2, 10, 20, 10, 2, 3, 4, 5, 2, 2] 
simple_list(lista_a)
[1, 2, 3, 10, 20, 4, 5] 
*/

//-----------solución-------------------------------------------
const listaDuplicados = [1, 2, 3, 2, 10, 20, 10, 2, 3, 4, 5, 2, 2] 

function listaUnicos(listaConDuplicados){
    const newList = [];
    listaConDuplicados.map( // iterar el array original
        (item)=>{ !newList.includes(item) && newList.push(item);} // si no está lo agrega
    )
    return newList
}
console.log(listaUnicos(listaDuplicados));