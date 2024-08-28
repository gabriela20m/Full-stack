// Crear un objeto literal
//Antes  
var persona = {
    nombre: "David",
    edad: 30,
    saludar: function() {
      console.log("Hola, mi nombre es " + this.nombre);
    }
  };
  
  console.log(persona.nombre); //  David
  console.log(persona["edad"]); //  30
  persona.saludar(); //  Hola, mi nombre es David



  const clave = "nombre";
const valor = "David";

// Propiedades 

//Ahora
const persona = {
  [clave]: valor, // Se usa la variable clave para definir la propiedad
  edad: 30,
  saludar() { // Método abreviado
    console.log(`Hola, mi nombre es ${this.nombre}`);
  }
};

console.log(persona.nombre); //  David
console.log(persona.edad);   //: 30
persona.saludar();           // Hola, mi nombre es David




const persona = {
    nombre: "David",
    edad: 30,
    saludar() { // Método abreviado
      console.log(`Hola, mi nombre es ${this.nombre}`);
    }
  };
  
  persona.saludar(); //  Hola, mi nombre es David
  

