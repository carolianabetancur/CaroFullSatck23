//Paradigma de programción Orientado a objetos de JS
/* 
POO --> Creación de objetos
CLASE, OBJETO, MÉTODO O PROPIEDAD Y PROTOTIPO
*/
//Primera forma de crear objetos
const usuario = {
  correo: 'betaCaro@gmail.com',
  contraseña: '1234',
  saludar: () => {
    return `Hola, soy ${usuario.nombre}`;
  },
};
usuario.nombre = 'Carolina'; // Asignando una nueva propiedad al objeto
console.log(usuario.nombre); //Acceder al nombre
console.log(usuario.saludar()); //Acceder al comportamiento del objeto

//Segunda forma de crear objetos, creando el obj a partir de la clase objetct
const persona = new Object();
persona.nombre = 'Carlos';
persona.apellido = 'Arias';
persona.edad = 45;
persona.saludar = () => `Hola, soy ${persona.nombre}`;
console.log(persona);
console.log(persona.saludar());

//Tercera forma, creando una función constructora
function Animal(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
  this.saludar = () => console.log(`Hola soy ${this.nombre}`);
}
const perro = new Animal('Fido', 5);
console.log(perro);
perro.saludar();

//Cuarta forma, usando la palabra reservada class
class Persona {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }
  //Método
  saludar() {
    return console.log(
      `Hola, soy ${this.nombre} ${this.apellido} y tengo ${this.edad} años`,
    );
  }
}
const persona1 = new Persona('Juan', 'Perez', 33);
console.log(persona1);
persona1.saludar();

//Herencia
class Profesor extends Persona {
  constructor(nombre, apellido, edad, materia) {
    super(nombre, apellido, edad);
    this.materia = materia;
  }
  presentarse() {
    return console.log(
      `Hola, soy ${this.nombre} ${this.apellido} y soy profesor de ${this.materia}`,
    );
  }
}
const profesor1 = new Profesor('Andres', 'Rojas', 35, 'Programación');
console.log(profesor1);
profesor1.presentarse();
profesor1.saludar();

//Encapsulamiento: Es para tener privados los atributos, así no podrán ser manipulados por cualquiera
class Cuenta {
  #salario; // Usado # para indicar que es un atributo privado desde ES2020
  constructor(saldo, salario) {
    this._saldo = saldo; //El guión bajo es una convención para indicar que es un atributo privado
    this.#salario = salario;
  }
  setSaldo(saldo) {
    if (saldo < 0) {
      console.error('Error, el saldo no puede ser negativo');
    } else {
      this._saldo = saldo;
    }
  }
  getSaldo() {
    return this._saldo;
  }
}

const cuenta1 = new Cuenta(1000, 1500);
//cuenta1._saldo = 400- // Error, no se debe hacer
//console.log(cuenta1._saldo) Tampoco es posible hacerlo
cuenta1.setSaldo(400);
console.log(cuenta1.getSaldo());
console.log(cuenta1);
