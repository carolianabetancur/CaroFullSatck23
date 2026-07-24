// Hoisting - Elevación: Es la prioridad de atención que le da el lenguaje a las funciones, variables y solicitudes

/* 1. Declaración del funciones --> se elevan primero
2. Declaración de variables con Var
3. Declaraciôn de variables con Let y Const
4. Las funiones declaradas por medio de variables
*/

//Hoisting a nivel de variables
console.log(x); // Undefined
var x = 5;

//Esto se leería así:
/* var x;
console.log(x);
x = 5; */

//Aquí tendríamos un error de no se puede acceder a y, primero inicialice
console.log(y);
let y = 5;

//Hoisting a nivel de funciones
//Para este caso el intérprete de JS primero lee la declaración de la función y luego el llamado, así que no tendríamos problema
saludar();

function saludar() {
  console.log('Hola');
}

//Pero para el caso de una función declarada por medio de variables, si tendríamos problemas
saludo();
const saludo = () => {
  console.log('Hola como estás?');
};
