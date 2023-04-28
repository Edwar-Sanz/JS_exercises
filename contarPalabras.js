/*
crear un contador de palabras

*/


const palabras = {};
function contadorPalabras(string){
    const list = string.replace(/[.,;:]/g, "").split(" ");
    list.forEach(element => { palabras[element] = 0 });
    list.forEach(element => { palabras[element] = palabras[element] + 1});
    console.log(palabras)
}

let test= "contador de palabras, contador de de contador de abras con"
contadorPalabras(test);






