/* Estructuras de datos en JS > Son colecciones de datos
1. Array - Colecciones ordenadas, indexadas, se pueden duplicar, listar, iterar y manipular
2. Set - Conjuntos, son colecciones de datos, no ordenados, no idexados, no se pueden diplicar. Listar, iterar y manipular
3. map - Colecciones de datos, no ordenadas, permiten almacenar datps a apartir de claves y valores. Listar ietrar, manipular
*/

console.log('Estructura de datos');
//1. Arrays
let numeros = [1, 2, 3, 4, 5];
console.log(numeros); // array de numeros

let letras = ['a', 'b', 'c', 'd', 'e'];
console.log(letras); //array de letras

let mezcla = [1, 'a', 2, 'b', true, null, undefined];
console.log(mezcla);

//Iterar arrays
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}
letras.forEach((letra) => {
  console.log(`letra ${letra}`);
});

const dobles = numeros.map((numero) => {
  return numero * 2;
});
console.log(dobles);

//filter recorre todo el array y entrega un nuevo array que cumplen la condición
const pares = numeros.filter((numero) => {
  return numero % 2 === 0;
});
console.log(pares);

const busqueda = numeros.find((numero) => {
  return numero === 3;
});
console.log(busqueda);

//Métodos para manipular arrays
//push --> agrega elementos al final del array
numeros.push(6, 7, 8);
console.log(numeros);
//pop --> eliminar el ultimo elemento del array
numeros.pop();
console.log(numeros);
//shif --> elimina el primer elemento del array
numeros.shift();
console.log(numeros);
// unshift --> agrega elementos al inicio del array
numeros.unshift(-2, -1, 0);
console.log(numeros);

//Sets
// Los conjuntos nunca toman los valores repetidos
let conjunto = new Set([1, 1, 2, 3, 4, 5, 6]);
console.log(conjunto);

//Manipular sets
//agregar valores
conjunto.add(7);
console.log(conjunto);
//eliminar un elemento y se especifica cuál elemento
conjunto.delete(2);
console.log(conjunto);
//Hacer filtros para ver si existe un dato en el conjunto cons has y deveulve booleano
console.log(conjunto.has(10)); // --> false
console.log(conjunto.has(3)); // --> true

//Recorrer un conjunto
conjunto.forEach((valor) => {
  console.log(valor);
});

//Conocer el tamaño obviamente sin tomar los repetidos
console.log(conjunto.size);

//Maps: Conjuntos de objetos que se definen a partir de un key - value
//A diferencia de los objetos en la key no solo puedo poner un elemento, si no que puede ser un array, otro objeto etc
const mapa = new Map();
//Pata agregar elementos al map solo tengo que usar .set
mapa.set('nombre', 'juan');
mapa.set('apellido', 'perez');
mapa.set('edad', 30);
mapa.set(30, 'treinta');
console.log('Mapa', mapa);

//Obtener un valor del map con get
console.log(mapa.get('nombre'));
//También puedo obetener la clave a partir del valor
console.log(mapa.get(30));
//También se puede redefinir un valor facilmente con set
mapa.set('nombre', 'maria');
console.log(mapa);

//Verificar la existencia de un dato con Has
console.log(mapa.has('nombre'));

//Eliminar un dato
mapa.delete('edad');
console.log(mapa);

//Recorrer un mapa
mapa.forEach((value, key) => {
  console.log(key, value);
});
//conocer el tamaño del mapa
console.log(mapa.size);
