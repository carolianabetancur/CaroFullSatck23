//asyncronía: Javascript se ejecuta en un solo hilo de ejecución. Gracias a la asincronía, podemos ejecutar varias tareas al mismo tiempo.
//por qué si fuera sincrona, si una tarea tarda mucho tiempo en ejecutarse, el resto de tareas se verían afectadas y
// tendrían que esperar a que la tarea que tarda mucho tiempo termine para poder ejecutarse.

//Los callbacks son una forma de manejar la asincronía en JavaScript. Un callback es una función que se pasa como
// argumento a otra función y se ejecuta después de que la primera función ha terminado su ejecución. Esto permite
// que el código continúe ejecutándose mientras se espera a que la tarea asincrónica termine.

//Esto es síncrono
console.log('Tarea 1');
console.log('Tarea 2');
console.log('Tarea 3');

//Aquî con el parámetro callback, se puede ejecutar una función después de que otra función ha terminado su ejecución.
//se puede llamar de cualquier manera, pero aquí la llamamos callback y callback en este caso en la funcion procesarDatos
function obtenerDatos(callback) {
  const usuario = {
    nombre: 'John',
    apellido: 'Doe',
    edad: 30,
  };
  setTimeout(() => {
    console.log('datos obtenidos: ', usuario);
    callback(usuario);
  }, 1000);
}

function procesarDatos(usuario) {
  console.log('procesando datos: ', usuario);
  setTimeout(() => {
    console.log('datos procesados: ', usuario);
    guardarDatos(usuario);
  }, 3000);
}

//Hay ocasiones en las que se quiere ejecutar una función después de que otra función ha terminado su ejecución.
// Para esto, se pueden utilizar callbacks. Un callback es una función que se pasa como argumento a otra función y
// se ejecuta después de que la primera función ha terminado su ejecución.

// function guardarDatos(usuario) {
//   console.log('guardando datos: ', usuario);
// }
// obtenerDatos(procesarDatos);
//También puede pasar que sólo lo quiera ejecutar una vez, entonces debo recurrir a una función anónima,
// que es una función sin nombre, que se ejecuta inmediatamente después de ser definida.

function guardarDatos(usuario) {
  console.log('guardando datos: ', usuario);
}

obtenerDatos((usuario) => {
  console.log('procesando datos: ', usuario);
  setTimeout(() => {
    console.log('datos procesados: ', usuario);
    guardarDatos(usuario);
    procesarDatos(usuario);
  }, 4000);
});
