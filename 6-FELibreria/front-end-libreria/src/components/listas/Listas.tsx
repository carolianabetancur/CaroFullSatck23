const numeros = ['uno', 'dos', 'tres'];
const personas = [
  { nombre: 'Juan', edad: 30 },
  { nombre: 'María', edad: 25 },
  { nombre: 'Pedro', edad: 35 },
];

const styleList = {
  margin: '10px 0px',
  padding: 0,
  listStyleType: 'none',
};

const Listas = () => {
  return (
    <>
      <ul style={styleList}>
        {numeros.map((numero, index) => (
          <li key={index}>{numero}</li>
        ))}
      </ul>
      <ul style={styleList}>
        {personas.map((persona, index) => (
          <li key={index}>
            {persona.nombre} - {persona.edad} años
          </li>
        ))}
      </ul>
    </>
  );
};

export default Listas;
