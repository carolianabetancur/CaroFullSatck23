console.log('Hello, World!');
// Variable: Es una representación simbólica de un dato que puede cambiar de valor
// var: Se usaba antes de ES6, se utilizaba para varibles globales, no de bloque, el problema con esta es que podía redefinir
//variables del sistema y es reasignable
var nombre = 'jhon';
var edad = 30;

// Let: ámbito local, se puede reasignar su valor pero no su nombre
let apellido = 'caceres';
apellido = 'lopez';

//const: ámbito local, no se puede reasignar ni su valor ni su nombre, es inmutable
const PI = 3.1416;

console.log(nombre, edad, apellido, PI);
