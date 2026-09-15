//Aquî la idea es caputrar las rutas
//El ruteo lo podemos manejas con express y usamos una clase llamada router
//Vamos a usar un middleware de ruta: O sea el archivo index va a dectectar el recurso que quiero obtener y decidir la ruta

import { Router } from 'express';
import tareasControlador from '../controladores/tareasControlador.js';

//Podemos hacer esto de manera concatenada algo así:
//Como en app.js tenemos esto app.use('/tareas', tareasRutas);, no es necesario que tengamos en cada ruta tareas, por qué quedaría algo así:
//http://127.0.0.1:3000/tareas/tareas, entonces aquî podemos borrar el tareas de la ruta

const ruta = Router();

ruta
  .get('/', tareasControlador.obtenerTareas)
  .post('/', tareasControlador.crearTarea)
  .put('/:id', tareasControlador.actualizarTarea)
  .delete('/:id', tareasControlador.eliminarTarea);

export default ruta;

// router.get('/tareas', (req, res) => {
//   res.send('GET tareas');
// });

// router.post('/tareas', (req, res) => {
//   res.send('POST tareas');
// });

// router.put('/tareas', (req, res) => {
//   res.send('PUT tareas');
// });

// router.delete('/tareas', (req, res) => {
//   res.send('DELETE tareas');
// });
