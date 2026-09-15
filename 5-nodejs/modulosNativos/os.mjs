//Modulos son archivos que contienen funciones que puedo usar en otras partes
//Cuando se instala un lenguaje, este instala un SDK (Software Development Kit) que contiene un conjunto de herramientas y
// librerías que permiten a los desarrolladores crear aplicaciones en ese lenguaje. En el caso de Node.js,
// el SDK incluye un conjunto de módulos que se pueden utilizar para realizar tareas comunes, como trabajar con archivos, redes, bases de datos, etc.
// Estos módulos se pueden importar en nuestros archivos de código y utilizar sus funciones para realizar tareas específicas.
import os from 'node:os';

console.log('Sistema operativo: ', os.platform()); //Conocer el sistema operativo en el que se está ejecutando el código. Esto es útil para escribir código que sea compatible con diferentes sistemas operativos.
console.log('nombre del release: ', os.release()); //Conoce el release del sistema
console.log('Arquitectura del sistema: ', os.arch()); //Conocer la arquitectura del sistema en el que se está ejecutando el código. Esto es útil para escribir código que sea compatible con diferentes arquitecturas de hardware.
console.log('Memoria libre: ', os.freemem() / 1024 / 1024); // Conocer la cantidad de memoria libre disponible en el sistema. Esto es útil para escribir código que sea eficiente en el uso de la memoria y evitar errores de memoria insuficiente.
console.log('Memoria total: ', os.totalmem() / 1024 / 1024); // Conocer la cantidad total de memoria disponible en el sistema. Esto es útil para escribir código que sea eficiente en el uso de la memoria y evitar errores de memoria insuficiente.
console.log('Número de CPUs: ', os.cpus().length); // Conocer el número de CPUs disponibles en el sistema. Esto es útil para escribir código que sea eficiente en el uso de los recursos del sistema y evitar errores de sobrecarga.
console.log('Hostname: ', os.hostname()); // Conocer el nombre del host del sistema. Esto es útil para escribir código que sea compatible con diferentes sistemas y evitar errores de conexión.
console.log(os.homedir()); //conocer el directorio del usuario
console.log(os.uptime()); //conocer el tiempo de actividad del sistema

//otro proceso importante al que podemos acceder pra poder trabajar con argumentos, con variables de entorno
// Variables de entorno se guardan en un archivo .env y aquî vamos a recibir argumentos para poder trabajar en diferentes procesos.

//Aquí vamos a optener la informaciôn de la variable de entorno
console.log(process.env.URL_DATABASE_CARO);
