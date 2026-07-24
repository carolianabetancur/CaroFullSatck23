console.log('Hello World');

class PersonaTsc {
  //Estos datos pueden estar private, protected, public; private nombre: string
  nombre: string;
  edad: number;
  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }
  //Las funciones y los métodos su tipado es :void
  saludar(): void {
    console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años`);
  }
}

const personaTsc1 = new PersonaTsc('David', 34);
console.log(personaTsc1);
personaTsc1.saludar();

//Interfaces: se pueden asimilar a la forma en la que se crean objetos a partir de funciones, son estructuras que nos permiten
//tener el cuerpo de la función o declarar las funciones sin darle un cuerpo o una interpretación completa. Son moldes para reutilozar
interface Animal {
  nombre: string;
  edad: number;
  raza: string;
  saludar(): void;
}

const perro: Animal = {
  nombre: 'Firulais',
  edad: 5,
  raza: 'Pitbull',
  saludar() {
    console.log(`Guau, guau, me llamo ${this.nombre}`);
  },
};
console.log(perro);
perro.saludar();

//También se pueden declarar objetos con una estructura mas sencilla llamada type
type Producto = {
  id: number;
  nombre: string;
  precio: number;
  stock: number;
};

const producto1: Producto = {
  id: 1,
  nombre: 'Portátil',
  precio: 900,
  stock: 5,
};
console.log(producto1);

//Enumeradores (enum): Es para tener variables predefinidas, solo voy a poder utilizar lo que esté aquí

enum Colores {
  ROJO = 'ROJO',
  VERDE = 'VERDE',
  AZUL = 'AZUL',
}

const colorFavorito: Colores = Colores.ROJO;
console.log(colorFavorito);

const numbers: number[] = [1, 2, 3, 4, 5];
console.log(numbers);

const numbers2: Array<number> = [6, 7, 8, 9, 10];
console.log(numbers);
