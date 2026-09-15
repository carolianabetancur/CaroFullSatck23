import express from 'express';
import tareasRutas from './rutas/tareasRutas.js';

const app = express();

//middleware para serializar el body de las solicitudes

app.use(express.json());
app.use('/tareas', tareasRutas);

//Aquí montamos nuestro servidor
app.listen(3000, () => console.log('Servidor corriendo en puerto 3000'));

/* //Esto es un middleware, que va a hacer la conversión a json
app.use(express.json());
console.log(tareas);
//Primer parámetro recibe una ruta y el segundo un callback, el callback contiene el req y el res
app.get('/tareas', (req, res) => {
  res.json(tareas);
});

app.get('/', (req, res) => {
  res.send('<h1>Bienvenido a mi App con Node.js</h1>');
});
app.get('/usuarios', (req, res) => {
  console.log('GET /usuarios');
  console.log(req);
  //Le devuelve al navegador lo que quiera, en este caso un mensaje
  res.send('Consulta exitosa');
});

app.post('/tareas', (req, res) => {
  console.log('POST /tareas');
  console.log(req.body);
  tareas.push(req.body);
  res.send('Tarea creado exitosamente');
}); */
