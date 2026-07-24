"use strict";
console.log('Hello World');
class PersonaTsc {
    //Estos datos pueden estar private, protected, public; private nombre: string
    nombre;
    edad;
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    //Las funciones y los métodos su tipado es :void
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años`);
    }
}
const personaTsc1 = new PersonaTsc('David', 34);
console.log(personaTsc1);
personaTsc1.saludar();
const perro = {
    nombre: 'Firulais',
    edad: 5,
    raza: 'Pitbull',
    saludar() {
        console.log(`Guau, guau, me llamo ${this.nombre}`);
    },
};
console.log(perro);
perro.saludar();
const producto1 = {
    id: 1,
    nombre: 'Portátil',
    precio: 900,
    stock: 5,
};
console.log(producto1);
//Enumeradores (enum): Es para tener variables predefinidas, solo voy a poder utilizar lo que esté aquí
var Colores;
(function (Colores) {
    Colores["ROJO"] = "ROJO";
    Colores["VERDE"] = "VERDE";
    Colores["AZUL"] = "AZUL";
})(Colores || (Colores = {}));
const colorFavorito = Colores.ROJO;
console.log(colorFavorito);
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
const numbers2 = [6, 7, 8, 9, 10];
console.log(numbers);
