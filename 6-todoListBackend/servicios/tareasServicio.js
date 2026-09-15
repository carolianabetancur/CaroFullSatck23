//Podemos definir una función con arrow fuction, pero estas aunque se posicionen antes, tienen un hosting menos importantes que las
//function, además cuando llamo una function antes de definirla, no produce error, por qué siempre se lee primero la definición de function
//Pero con arrow functios si la llamo antes de definirla, me lanza un error, por eso es mejor usar function

// Servicio tiene la responsabilidad de consultar los datos y entregarselos al controlador. Aquí vamos a tener un llamado a la DB
const tareas = [
  {
    id: 1,
    titulo: 'Aprender Node.js',
    descripcion:
      'Aprender Node.js para poder crear aplicaciones web y de escritorio',
    estado: false,
  },
  {
    id: 2,
    titulo: 'Aprender Express',
    descripcion:
      'Aprender Express para poder crear aplicaciones web y de escritorio',
    estado: false,
  },
  {
    id: 3,
    titulo: 'Aprender React',
    descripcion:
      'Aprender React para poder crear aplicaciones web y de escritorio',
    estado: false,
  },
];

const obtenerTareas = () => {
  //Aquî iría un llamado a la DB
  return tareas; // Retorno de datos
};
const crearTarea = (body) => {
  tareas.push(body);
  return 'Tarea creada';
};
const actualizarTarea = (body, id) => {
  const tareasIndex = tareas.findIndex(
    (index) => index.id === parseInt(id, 10),
  );
  tareas[tareasIndex] = {
    ...tareas[tareasIndex],
    ...body,
  };
  return 'Tarea actualizada';
};
const eliminarTarea = (id) => {
  const tareasIndex = tareas.findIndex(
    (index) => index.id === parseInt(id, 10),
  );
  tareas.splice(tareasIndex, 1);
  return 'Tarea eliminada';
};

export default {
  obtenerTareas,
  crearTarea,
  actualizarTarea,
  eliminarTarea,
};
