import React, { useContext } from 'react';
import { Context } from '../../App';

const BtnSession = () => {
  const [session, setSession] = useContext(Context);
  return (
    <button type="button" onClick={() => setSession(!session)}>
      {session ? 'Cerrar Sesión' : 'Iniciar Sesión'}
    </button>
  );
};

export default BtnSession;
