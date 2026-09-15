// import fs from 'node:fs';
import FileReader from 'node:fs';

//Cuando tengo datos en javascriipt y quiero pasarlos a un json debo deserializarlos, y visceversa
//Cuando tengo datos en json y quiero pasarlos a javascript debo serializarlos. Para esto se utiliza JSON.stringify() y JSON.parse() respectivamente.
//En Javascript la key no va entre comillas, pero en JSON sí. Por eso es importante serializar y deserializar los datos correctamente.

const tareas = [
  {
    id: 1,
    nombre: 'Tarea 1',
    descripcion: 'Descripción de la tarea 1',
    estado: false,
  },
];

//leer un archivo
const datos = FileReader.readFileSync('./tareas.json', 'utf-8');
//convertir datos de tipo json en objeto de tipo javascript
const tareasJs = JSON.parse(datos);
console.log(tareasJs[0].titulo); //imprime el contenido del archivo
console.log(tareas[0].nombre); //imprime el contenido del archivo
