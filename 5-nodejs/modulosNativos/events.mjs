//Modulos Natuivos - Events: Los eventos permiten implementar un moedelo asíncrono para ejecutar acciones. Está basado en el patrón PUBLIC/SUBSCRIBE
//Este es de los patrones mas conocidos en los patrones de diseño de software. El publicador tiene eventos a los cuales el suscriptor se suscribe y cuando
// el publicador actualiza ese evento en suscriptor recibe una señal o una notificación y la info actualizada. El módulo Events permite gestionar el PUBLIC/SUBSCRIBE

//EventEmmiter es una clase que permite crear eventos personalizados y con ON escuchar el evento. Algunos módulos no necesitan crear sólo escuchar el evento

import { EventEmitter } from 'node:events';
//escucha de eventos
const evento = new EventEmitter();
//Aquí le damos nombre a mi evento y luego un callback que dice que va a pasar cuando el evento suceda
evento.on('miEvento', (mensaje) => {
  console.log('Se ha emitido un evento', mensaje);
});
//Puedo tener diferentes estados. Hay una función que permite ejecutar eventos una sola vez, o diferentes eventos para multiples suscriptores
// //o para un error o simular errores para una base de datos
evento.on('error', (error) => {
  console.log('se ha emitido un error', error);
});

//emisión de eventos, primer parámetro el nombre de mi evento, el segundo el mensaje, aquí estaría como llamando al evento, donde estamos
//pasabdo el "Hola mundo", como un parámetro y en el evento.on se recibe como parámetro.
//Los eventos son asíncronos y son reutilizables
evento.emit('miEvento', 'Hola mundo');
evento.emit('error', new Error('error de prueba'));

//Ejecutar evento una sola vez. Por ejemplo una alerta
evento.once('Evento una vez', (mensaje) => {
  console.log('Evento una sola vez', mensaje);
});
evento.emit('Evento una vez', 'Hola mundo evento solo una vez');

//Se tienen algunos métodos para los eventos como eliminar un suscriptor o todos los suscriptores.
removeEventListener();

//También se puede herencia o cualquiera de los pilares del POC
