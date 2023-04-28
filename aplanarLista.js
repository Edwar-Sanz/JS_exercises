/*

dada una lista 
lista = [ [1, 2, 3], 4, 5, [6, 7], 8, 9]
crear una función que retorne
[ 1, 2, 3, 4, 5, 6, 7, 8, 9]

*/

const lista = [ [1, 2, 3], 4, 5, [6, 7], 8, 9];

function aplanarLista (lista1){
    const lista2 = [];
    lista1.map( // iterar el array original
    (item)=>{ if (!Array.isArray(item)) { lista2.push(item); // agrega si no es array
            }else{ item.map((element)=> lista2.push(element))}
        }
    )   
    return lista2
}

console.log(aplanarLista(lista))