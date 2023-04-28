/*
Su tarea es ordenar una cadena dada.
Cada palabra en la cadena contendrá un solo número.
Este número es la posición que debe tener la palabra en el resultado.

Nota: Los números pueden ser del 1 al 9. Por lo tanto, 1 será la primera palabra (no 0).

Si la cadena de entrada está vacía, devuelve una cadena vacía.
Las palabras en la cadena de entrada solo contendrán números consecutivos válidos.

"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
*/

let frase = "is2 Thi1s T4est 3a";

function orden (frase){
    let frase2 = "";
    const list = frase.split(" ");
    [1,2,3,4,5,6,7,8,9].forEach((element)=>{
        list.forEach((item)=> item.includes(element) && (frase2 = frase2 + item + " "))
        }
    )
  return frase2
}

console.log(orden(frase));


