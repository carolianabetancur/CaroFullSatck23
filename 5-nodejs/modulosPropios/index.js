//Node JS es una plataforma que me permite hacer diferentes cosas con el sistema operativo. La diferencia con el JS de
//Front es que ese permite hacer cosas el navegador web y este lo hace en el sistema operativo.
//Node JS trabaja el concepto de módulo, es un programa que contiene funciones o sea acciones. Es posible tener móodulos
// propips y módulos externos. O sea módulos propios y módulos nativos
//revisar para actualizarme a la version 24 de node
console.log('Hello World');
//Aquí tenemos uno de los objetos más importantes que se llama global.this
//Tenemos dos versiones de módulos, antes del 2010 teníamos el common js - cjs y luego para lo actual, tenemos el
//emmajs mjs. Y son las formas diferentes de cómo exportamos los módulos
const suma = require('./operaciones');

console.log(suma(5, 6));
