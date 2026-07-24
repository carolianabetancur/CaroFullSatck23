//Funciones
//Función declarativa function name(){}

function sum(numero1, numero2) {
  return numero1 + numero2;
}
function resta(numero1, numero2) {
  return numero1 - numero2;
}

console.log(sum(6, 5), resta(7, 2));
console.log('Fin de programa');

//Funciones nativas
console.log(Math.max(6, 3));
console.log(Math.min(1, 2));

//Funciones sin retorno
function saludar(name) {
  console.log('hola', name);
}
console.log(saludar('Carolina'));

//Funciones anónimas o flecha o lamda
const dividir = (numero1, numero2) => numero1 / numero2;
console.log(dividir(10, 2));
const multiplicar = (numero1, numero2) => numero1 * numero2;
console.log(multiplicar(10, 2));

//Funciones autoinvocables
(function () {
  console.log('soy una funcion autoinvocable');
})()(() => console.log('soy una funcion autoinvocable pero con nombre'))();
œ;
