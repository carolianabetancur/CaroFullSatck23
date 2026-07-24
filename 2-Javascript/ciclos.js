//Ciclos: Son estructuras repetitivas que permiten ejecutar una serie de procesos o de tareas de forma consecutiva, cuando se quiere.
//Todos los ciclos cuentas con un inicio, condición e incremento

//While: Primero revisa la instrucción y luego ejecuta
let contador = 0;
while (contador < 10) {
  contador++;
  console.log(contador);
}
console.log('Fin del ciclo while');

//do whiles: Aquî primero intenta ejecutar algo y luego se pregunta por la condición
do {
  contador = contador - 1;
  console.log(contador);
} while (contador > 0);
console.log('Fin del ciclo do while');

//For: Se utiliza cuando conocemos la cantidad de veces que queremos repetir un proceso
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
console.log('Fin del ciclo for');
