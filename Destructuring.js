//const numeros = [1, 2, 3];

// Destructuring para extraer valores
//const [a, b, c] = numeros;

console.log(a); //  1
console.log(b); // : 2
console.log(c); //  3


///const numeros = [1];

// Destructuring con valor predeterminado
const [a = 10, b = 20] = numeros;

console.log(a); //  1
console.log(b); //  20


let x = 5;
let y = 10;

// Intercambiar valores usando destructuring
[x, y] = [y, x];

console.log(x); //  10
console.log(y); //  5


const persona = {
    nombre: "David",
    edad: 30,
    ciudad: "Madrid"
  };
  
 // // Destructuring para extraer propiedades
  const { nombre, edad, ciudad } = persona;
  
  console.log(nombre); //  David
  console.log(edad);   //  30
  console.log(ciudad); //  Madrid

  


 /// const persona = {
    //nombre: "David",
   // edad: 30
  //};
  
  // Destructuring con alias de variables
//  const { nombre: nombrePersona, edad: edadPersona } = persona;
  
 // console.log(nombrePersona); // David
 // console.log(edadPersona);   //  30
  


//
 //const persona = {
  //nombre: "David",
 // edad: 25,
 // ciudad: "Madrid"
//};

// Usamos destructuring para extraer las propiedades
//const { nombre, edad, ciudad } = persona;

console.log(nombre); // David
console.log(edad);   // 25
console.log(ciudad); // Madrid
