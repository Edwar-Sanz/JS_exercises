/*
Cuente el número de duplicados
Escriba una función que devuelva el recuento de caracteres distintos
que aparecen más de una vez en la cadena de entrada. 
Se puede suponer que la cadena de entrada contiene solo alfabetos
(tanto mayúsculas como minúsculas) y dígitos numéricos.

la funcion debe retornar un entero
Ejemplo
"abcde" ->  0 # ningún carácter se repite más de una vez
"aabbcde" -> 2 # se repite 'a' y 'b'
"aabBcde" -> 2 # 'a' ocurre dos veces y 'b' dos veces (`b` y `B`)
"indivisibilidad" -> 1 # 'i' aparece seis veces
"Indivisibilidades" -> 2 # 'i' ocurre siete veces y 's' ocurre dos veces
"aA11" -> 2 # 'a' y '1'
"ABBA" -> 2 # 'A' y 'B' cada uno ocurre dos veces
*/

let entrada = "aabBcde";
function caracteresConOcurrencia(){
    const unicos = [];
    let repite = 0;
    for (const item of entrada) {
        !unicos.includes(item.toLowerCase()) ? unicos.push(item) : repite +=1
    }
    return repite
}
console.log(`${caracteresConOcurrencia()} caracteres se repiten en la entrada`)










