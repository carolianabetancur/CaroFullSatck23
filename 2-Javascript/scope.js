//ALCANCE = SCOPE VARIABLE
/* 
Global (ámbito global)
Function (ámbito de función)
Block scope (ámbito de bloque)
*/

//Scope Global
var miNombre = 'Carolina';

function myName() {
  //Scope Function
  var miApellido = 'Bueno';
  console.log(miNombre, miApellido);
}

myName();
console.log(miNombre);

//Scope Block
if (true) {
  //Scope Block
  const miEdad = 25;
  const miColor = 'rojo';
  console.log(miEdad, miColor);
}
console.log(miEdad, miColor); //--> Aquí no se podrían leer estas variables por qué solo existen en el bloque, en este caso en el if
