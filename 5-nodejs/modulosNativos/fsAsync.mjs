//Como leeer ese archivo podría tomar muchísimo tiempo, lo mas conveniente es hacer la lectura con este módulo asíncrono
//Con esto es con lo que vamos a trabajar prácticamente todo, por que casi todo tiene una espera
import { readFile } from 'node:fs/promises';

const rutaArchivo = './tareas.json';

console.log('tarea0');

readFile(rutaArchivo, 'utf-8')
  .then((datos) => {
    console.log(datos);
  })

  .catch((error) => {
    console.error('Error al leer el archivo:', error);
  })

  .finally(() => {
    console.log('operacion finalizada');
  });

console.log('tarea1');
