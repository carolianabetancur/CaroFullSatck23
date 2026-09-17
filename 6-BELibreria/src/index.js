import dotenv from 'dotenv';
import express from 'express';
import bookRouter from './routes/v1/bookRoute.js';
import authorRouter from './routes/v1/authorRoute.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

//middleware: se ejecuta en la parte del endpoint y antes de que llegue a rutas
app.use(express.json());
// middleware Redirige las rutas a mi archivo de rutas, y es la ruta que el usuario va a ingresar
app.use('/api/v1/book', bookRouter);
app.use('/api/v1/author', authorRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.listen(port, () => console.log(`Servidor corriendo en puerto ${port}`));
