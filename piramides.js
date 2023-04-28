/*
dada una base inicial imprimir en consola las pirámides:

....*
...* *
..* * *
.* * * *
* * * * *

...*
..***
.*****
*******

*/

let base = 8;
for (let i = 1; i < base+1; i++) {
    console.log(".".repeat(base-i) + "* ".repeat(i));  
}
console.log(" ")

function piramid(base){
    let spaces = base%2 === 0 ? base : base-1;
    let n = 1;
    for (let i = 1; i < spaces; i++) {
        console.log(".".repeat(spaces-i-1) + "*".repeat(n));
        n += 2
    }
}
piramid(base);


