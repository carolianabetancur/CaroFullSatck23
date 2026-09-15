import http from 'node:http';
//Vamos a crear un servidor por medio de http
/* Una de las ventajas de usar node es poder crear servidores con http y eso nos va a permitir crear una API (Interfaz) que nos permite 
conectarnos a partir de ciertos protocolos como el http y transferir hipertexto a partir de las diferentes peciciones que se le hagan

El cliente hace una solicitud llamada request al servidor, el servidor recibe este request y responde al clinte con un response. Pero
a su vez. el servidor le hace una petición a la DB y esta responde la información solicitada. El servidor codifica en JS lo que envió la
DB y y luego lo codifica a formato JSON para que el cliente pueda entenderlo.
 */

//Algunos de los clientes de HTTP son: pagina web, sitio web, app web, consola, postman, otro servidor(como otro lengiaje de backend)
const estudiantes = [
  {
    id: 1,
    nombre: 'Carlos',
    apellido: 'Lara',
    edad: 25,
    carrera: 'Ing. de sistemas',
  },
  {
    id: 2,
    nombre: 'Juana',
    apellido: 'Alvarez',
    edad: 22,
    carrera: 'Ing. de sistemas',
  },
  {
    id: 3,
    nombre: 'Camila',
    apellido: 'Ossa',
    edad: 25,
    carrera: 'Ing. de sistemas',
  },
];
//Para crear un servidor debemos tener en cuenta los siguientes parámetros: Host (dirección IP del servidor) y puerto ruta de salida de la app
// y opcional usuario y contraseñas
const server = http.createServer((req, res) => {
  //Las cabeceras indican el tipo de dato que se va a responder en este caso json
  res.setHeader('Content-Type', 'application/json');
  //Y con el .end la respuesta final o sea los datos
  res.end(JSON.stringify(estudiantes));
  console.log(req.method);
  console.log(req.url);
});

//Este servidor se debe poner a escuchar para que cualquier cliente pueda hacer la solicitud
//El método listen recibe dos parámetros el puerto y el otro es un callback
server.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000');
});

//Las solicitudes de HTTP se hacen a traveş de los verbos HTTP y nos permiten identificar que se está solicitando al servidor
//GET, POST, PUT, DELETE, PATCH
