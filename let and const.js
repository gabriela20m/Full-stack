// Ejemplo con var
var nombre = "David";
console.log(nombre); // David

// Ejemplo con let
let edad = 25;
console.log(edad); //  25

// Cambiar el valor de la variable
edad = 26;
console.log(edad); //  26

// Ejemplo con const
const ciudad = "Madrid";
console.log(ciudad); //  Madrid

// Intentar cambiar el valor de una variable const (esto dará error)
// ciudad = "Barcelona"; 


function ejemploVarLetConst() {
    if (true) {
      var varVariable = "Soy una variable con var";
      let letVariable = "Soy una variable con let";
      const constVariable = "Soy una variable con const";
    }
  
    console.log(varVariable); // Output: Soy una variable con var
  
    // Los siguientes dos líneas darán error porque letVariable y constVariable están en un ámbito de bloque
    // console.log(letVariable); // Uncaught ReferenceError: letVariable is not defined
    // console.log(constVariable); // Uncaught ReferenceError: constVariable is not defined
  }
  
  ejemploVarLetConst();

  
  // Uso de var en un bucle
for (var i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log(i); // Output: 3, 3, 3
    }, 1000);
  }
  
  // Uso de let en un bucle
  for (let j = 0; j < 3; j++) {
    setTimeout(() => {
      console.log(j); // Output: 0, 1, 2
    }, 1000);
  }
  

  console.log(varHoisted); // Output: undefined
  // console.log(letHoisted); // Uncaught ReferenceError: Cannot access 'letHoisted' before initialization
  // console.log(constHoisted); // Uncaught ReferenceError: Cannot access 'constHoisted' before initialization
  
  var varHoisted = "Variable var con hoisting";
  let letHoisted = "Variable let sin hoisting";
  const constHoisted = "Variable const sin hoisting";
  
  console.log(varHoisted); // Output: Variable var con hoisting
  console.log(letHoisted); // Output: Variable let sin hoisting
  console.log(constHoisted); // Output: Variable const sin hoisting
  