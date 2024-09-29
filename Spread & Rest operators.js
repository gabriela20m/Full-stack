//Spread Operator

//1 Agregar elementos a un array existente

const frutas = ["manzana", "pera"];
const nuevasFrutas = [...frutas, "plátano", "naranja"];

console.log(nuevasFrutas);
// Resultado: ["manzana", "pera", "plátano", "naranja"]



//2 Copiar propiedades de un objeto y agregar nuevas
const persona = {
    nombre: "David",
    edad: 25
  };
  
  // Creamos un nuevo objeto basado en 'persona' y añadimos una nueva propiedad
  const nuevaPersona = { ...persona, ciudad: "Madrid" };
  
  console.log(nuevaPersona);
  // Resultado: { nombre: "David", edad: 25, ciudad: "Madrid" }



 // 3  Combinar múltiples arrays
  const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// Combinamos los arrays usando spread
const combinado = [...array1, ...array2];

console.log(combinado);
// Resultado: [1, 2, 3, 4, 5, 6]


///*Rest Operator

 //1 Rest para argumentos indefinidos

 function sumar(...numeros) {
    return numeros.reduce((total, num) => total + num, 0);
  }
  
  console.log(sumar(1, 2, 3, 4)); // Resultado: 10

  
  // 2Rest para agrupar el resto de propiedades

  const auto = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020,
    color: "Azul"
  };
  
  // Extraemos 'marca' y 'modelo', y agrupamos el resto en 'otros'
  const { marca, modelo, ...otros } = auto;
  
  console.log(marca);  // Toyota
  console.log(modelo); // Corolla
  console.log(otros);  // { año: 2020, color: "Azul" }

  
  //Resumen de los Casos de Uso:
//Suma una cantidad indefinida de números (Rest):



function suma(...numeros) {
  return numeros.reduce((a, b) => a + b, 0);
}
console.log(suma(1, 2, 3)); // 6

//Agregar dos elementos a un arreglo existente (Spread):


const numeros = [1, 2, 3];
const nuevosNumeros = [...numeros, 4, 5];
console.log(nuevosNumeros); // [1, 2, 3, 4, 5]


//Copiar propiedades de un objeto existente y agregar una nueva propiedad (Spread):


const objeto = { a: 1, b: 2 };
const nuevoObjeto = { ...objeto, c: 3 };
console.log(nuevoObjeto); // { a: 1, b: 2, c: 3 }


//Mostrar un arreglo de los argumentos adicionales pasados a una función (Rest):


function mostrarArgumentos(primer, ...resto) {
  console.log(resto); // Muestra el resto de los argumentos en un array
}
mostrarArgumentos(1, 2, 3, 4); // [2, 3, 4]
