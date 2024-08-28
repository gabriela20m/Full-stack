console.log(hoistedVar); // Output: undefined (la declaración es elevada, pero el valor no)

var hoistedVar = "Esto es hoisting con var";

console.log(hoistedVar); // Output: Esto es hoisting con var


// Hoisting con let y const: Esto dará error
console.log(hoistedLet); // Uncaught ReferenceError: Cannot access 'hoistedLet' before initialization
console.log(hoistedConst); // Uncaught ReferenceError: Cannot access 'hoistedConst' before initialization

let hoistedLet = "Esto es hoisting con let";
const hoistedConst = "Esto es hoisting con const";


// Declaración de función
hoistedFunction(); // Output: "Esto es hoisting con funciones"

function hoistedFunction() {
  console.log("Esto es hoisting con funciones");
}

// Expresión de función
// noHoistedFunction(); // Uncaught TypeError: noHoistedFunction is not a function

var noHoistedFunction = function() {
  console.log("Esto no es hoisting con expresiones de función");
}



console.log(x); // Output: undefined
console.log(y); // Output: Uncaught ReferenceError: Cannot access 'y' before initialization
console.log(z); // Output: Uncaught ReferenceError: Cannot access 'z' before initialization

var x = 5;
let y = 10;
const z = 15;
