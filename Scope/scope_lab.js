// Ambbito global
var globalVar = "Soy una variable global";
let globalLet = "Tambien soy una variable globa, pero con ambito de let";
const globalConst = "Soy una contante global";

{
    //Ambito de bloque
    var blockvar = "Soy un var con ambito de bloque";
    let blockLet = "Soy un let con ambito de bloque";
    const blockConst = "Soy un const con ambito de bloque";
}

// alcance global
console.log(globalVar); // Salida: "Soy una variable global" 
console.log(globalLet); // Salida: "Tambien soy global, pero con alcance de let" 
console.log(globalConst); // Salida: "Soy una constante global" 

// Block Scope
//console.log(blockvar);
//console.log(blockLet);

function show() {
    var functionVar = "Soy unua var con alcance de block";
    let functionLet = "Soy un let con alcance de bloque";
    const functionConst = "Soy un const con alcance de bloque";
}
show();

console.log(functionVar); // Lanza ReferenceError
console.log(functionLet); // Lanza ReferenceError
console.log(functionConst); // Lanza ReferenceError