/*
Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

What is considered Valid?
A string of braces is considered valid if all braces are matched with the correct brace.

Examples
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False

*/

function validBraces(string){
    for (let i = 0; i < string.length/2; i++) {
        string = string.replace("{}", "")
        string = string.replace("[]", "")
        string = string.replace("()", "")
    }
    if (string.length === 0) { return true   
    }else{return false}
}
let test1 = "())({}}{()][][" //false
let test2 = "(){}[]" // true
console.log(validBraces(test1))
console.log(validBraces(test2))