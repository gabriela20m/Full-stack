// Variable en el ámbito global
var globalVar = "Soy una variable global";

function mostrarGlobal() {
  console.log(globalVar); // Output: Soy una variable global
}

mostrarGlobal();
console.log(globalVar); // Output: Soy una variable global


function ejemploLocal() {
    // Variable en el ámbito local
    var localVar = "Soy una variable local";
    console.log(localVar); // Output: Soy una variable local
  }
  
  ejemploLocal();
  
  // Intentar acceder a la variable local fuera de la función dará error
  console.log(localVar); // Uncaught ReferenceError: localVar is not defined

  
  // Variable global
var globalVar = "Variable global";

function ejemplo() {
  // Variable local
  var localVar = "Variable local";
  
  console.log(globalVar); // Output: Variable global
  console.log(localVar);  // Output: Variable local
  
  // Cambiar la variable global desde dentro de la función
  globalVar = "Cambio desde la función";
}

ejemplo();
console.log(globalVar); // Output: Cambio desde la función

// Intentar acceder a la variable local fuera de la función dará error
console.log(localVar); // Uncaught ReferenceError: localVar is not defined


// Variable global
let globalLet = "Variable global con let";

function bloqueEjemplo() {
  // Variable local en un bloque
  if (true) {
    let blockLet = "Variable de bloque con let";
    console.log(blockLet); // Output: Variable de bloque con let
  }

  // Intentar acceder a la variable de bloque fuera del bloque dará error
  // console.log(blockLet); // Uncaught ReferenceError: blockLet is not defined
}

bloqueEjemplo();
console.log(globalLet); // Output: Variable global con let
