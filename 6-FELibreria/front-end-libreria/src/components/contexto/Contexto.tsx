import BtnSession from './BtnSession';
import { useContext } from 'react';
import { Context } from '../../App';

const Contexto = () => {
  const [session] = useContext(Context);

  return (
    <>
      <h1>Contexto</h1>
      <h3>{session ? 'Sesion Activa' : 'Sesion Inactiva'}</h3>
      <BtnSession />
    </>
  );
};
export default Contexto;
