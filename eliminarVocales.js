/*
eliminar todas las vocales de los comentarios
Su tarea es escribir una función que tome una cadena y devuelva un
nueva cadena con todas las vocales eliminadas.
Por ejemplo, la cadena "This website is for losers LOL!" se convertiría
"Ths wbst s fr lsrs LL!".
*/

let cadena = "This website is for losers LOL!";
let cadena2 = "";
const vocales = "aeiouAEIOUáéíóúàèìòùäëïöü";

for (let element of cadena) {
    !vocales.includes(element) && (cadena2 = cadena2.concat(element));
}

console.log(cadena2);