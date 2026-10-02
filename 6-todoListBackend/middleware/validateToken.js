// Middleware, programa intercepta elementos antes de hacer cualquier petición. Este middleware se va a encargar de validar los tokens
// para ver si estoy autorizado a hacer las demaás peticiones o no. Se envía un token una vez se loguea, este token se envía hacia el cliente
// y cuando vaya a hacer las peticiones, nuevamente debo enviar este token. Aquî se va a verificar que este token no haya cambiado

import jwt from 'jsonwebtoken';

//Middleware para validar JWT
const validateToken = async (req, res, next) => {
  // Next, si todo esta correcto continúo con la siguiente operación luego del middleware
  // El header llamado autorization va a permitir trabajar con el token
  const authHeader = req.headers['authorization'];

  //   Verificar si existe authHeader
  if (!authHeader || !authHeader.startsWith('Bearer')) {
    return res.status(401).json({ message: 'No se ha enviado el token' }); //401 no autorizado
  }

  // se hace de esta manera por que tenemos un bearer token entonces es para que tome el token sin el bearer
  const token = authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Token no válido' });
  }
  try {
    const payload = await jwt.verify(token, process.env.JWT_SECRET);
    req.email = payload;
    next();
  } catch (error) {
    res.status(401).send({ message: 'Token inválido' });
  }
};

export default { validateToken };
