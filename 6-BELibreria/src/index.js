import dotenv from 'dotenv';
import express from 'express';
import bookRouter from './routes/v1/bookRoute.js';
import authorRouter from './routes/v1/authorRoute.js';
import userRoute from './routes/v1/userRoute.js';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

//middleware para estipular como se deben conectar mis datos
app.use(
  cors({
    // Por seguridad uno pondría la dirección IP del frontend
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    //Para que permite tokens, headers, etc
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
  }),
);
//middleware: se ejecuta en la parte del endpoint y antes de que llegue a rutas
app.use(express.json());
// middleware Redirige las rutas a mi archivo de rutas, y es la ruta que el usuario va a ingresar
app.use('/api/v1/books', bookRouter);
app.use('/api/v1/authors', authorRouter);
app.use('/api/v1/user', userRoute);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.listen(port, () => console.log(`Servidor corriendo en puerto ${port}`));
