// Controlador tiene la responsabilidad de llamar a un servicio
import tareasServicio from '../servicios/tareasServicio.js';

const obtenerTareas = async (req, res) => {
  const datos = await tareasServicio.obtenerTareas();
  res.status(200).json(datos);
};

const crearTarea = (req, res) => {
  const datos = tareasServicio.crearTarea(req.body);
  res.status(201).json(datos);
};

const actualizarTarea = (req, res) => {
  const datos = tareasServicio.actualizarTarea(req.body, req.params.id);
  res.status(200).json(datos);
};

const eliminarTarea = (req, res) => {
  const datos = tareasServicio.eliminarTarea(req.params.id);
  res.status(200).json(datos);
};

export default {
  obtenerTareas,
  crearTarea,
  actualizarTarea,
  eliminarTarea,
};

//ORM: Es un mapeador de objetos relacionales, PRISMA es el que vamos a usar
//Prisma: es un módulo de tercero que permite definir un esquema
