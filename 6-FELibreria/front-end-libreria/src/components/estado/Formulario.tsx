import { useEffect, useState } from 'react';

const Formulario = () => {
  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    edad: '',
  });

  const hadleSubmit: () => void = () => {
    console.log(form);
  };

  useEffect(() => {
    console.log(form);
  }, [form]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        margin: '0px auto',
      }}
    >
      <input
        type="text"
        placeholder="Nombre"
        value={form.nombre}
        onChange={(e) =>
          setForm((prev) => {
            return { ...prev, nombre: e.target.value };
          })
        }
      />
      <input
        type="text"
        placeholder="Apellido"
        value={form.apellido}
        onChange={(e) =>
          setForm((prev) => {
            return { ...prev, apellido: e.target.value };
          })
        }
      />
      <input
        type="number"
        placeholder="Edad"
        value={form.edad}
        onChange={(e) =>
          setForm((prev) => {
            return { ...prev, edad: e.target.value };
          })
        }
      />
      <button onClick={() => hadleSubmit()}>Enviar</button>
    </div>
  );
};

export default Formulario;
