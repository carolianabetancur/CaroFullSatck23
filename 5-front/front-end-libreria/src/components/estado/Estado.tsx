import { useState } from 'react';

const Estado = () => {
  const [contador, setContador] = useState(0);

  const hadleClick: () => void = () => {
    setContador(contador + 1);
  };

  return (
    <div style={{ margin: '20px 0px' }}>
      <h2>Contador: {contador}</h2>
      <button type="button" onClick={hadleClick}>
        Incrementar
      </button>
    </div>
  );
};

export default Estado;
