//Las promesas pueden ocurrir ahora, luego o nunca. Una promesa es un objeto que representa la eventual finalización
// (o falla) de una operación asincrónica y su valor resultante. Una promesa puede estar en uno de tres estados:
// pending, fullfilled o rejected.

//pending: Estado inicial de la promesa. La operación asincrónica aún no se ha completado y no se ha resuelto ni rechazado.
//fullfilled: la operación asincrónica se ha completado con éxito.
//rejected: la operación asincrónica ha fallado.

function obtenerDatos(id) {
  return new Promise((resolve, reject) => {
    const usuario = {
      id: 1,
      nombre: 'John',
      apellido: 'Doe',
      edad: 30,
    };
    if (id === 1) {
      resolve(usuario);
    } else {
      reject(new Error('Usuario no encontrado'));
    }
  });
}
function procesarDatos(usuario) {
  return new Promise((resolve) => {
    console.log('procesando datos: ', usuario);
    resolve(usuario);
  });
}

function guardarDatos(usuario) {
  return new Promise((resolve) => {
    console.log('Guardando datos...');
    resolve(usuario);
  });
}

//sintaxis con async/await que van con el try catch es la mas nueva de todas y permite el finally
async function mensajeConfirmacion() {
  return new Promise((resolve) => {
    resolve('Operación completada');
  });
}
async function mostrarDatos(usuario) {
  try {
    await obtenerDatos(usuario);
    await procesarDatos(datos);
    await guardarDatos(datosProcesados);
    const mensaje = await mensajeConfirmacion();
    console.log(mensaje);
  } catch (error) {
    console.error(error);
  } finally {
    console.log('Operación completada');
  }
}
mostrarDatos(1);

//.then --> es como el pending, es decir, que la promesa aún no se ha resuelto ni rechazada. Se ejecuta cuando la promesa se resuelve con éxito.
//.catch --> es como el rejected, es decir, que la promesa ha fallado. Se ejecuta cuando la promesa se rechaza con un error.
//finally --> se ejecuta siempre, independientemente de si la promesa se resolvió o se rechazó. Se ejecuta después de que la promesa se resuelve o se rechaza.

obtenerDatos(1)
  .then((usuario) => {
    console.log('usuario econtrado: ', usuario, procesarDatos(usuario));
  })
  .then((usuario) => {
    console.log('datos procesados: ', usuario, guardarDatos(usuario));
  })
  .then((usuario) => {
    console.log('datos guardados: ', usuario);
  })
  .catch((error) => {
    console.error('Error:', error);
  })
  .finally(() => {
    console.log('Operación completada');
  });

//También existen las funciones autoinvocables, que son funciones que se ejecutan inmediatamente después de ser definidas. Estas funciones se utilizan para encapsular código y evitar la contaminación del espacio de nombres global. Se pueden utilizar para crear módulos y mantener el código organizado.

/* async () => {
  try {
    await obtenerDatos(usuario);
    await procesarDatos(datos);
    await guardarDatos(datosProcesados);
    const mensaje = mensajeDeConfirmacion();
    console.log(mensaje);
  } catch (error) {
    console.error(error);
  } finally {
    console.log('Operación completada');
  }
};
 */
