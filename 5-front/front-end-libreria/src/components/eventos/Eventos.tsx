const nameList = [
  {
    id: 1,
    name: 'Carolina',
  },
  {
    id: 2,
    name: 'Juan',
  },
  {
    id: 3,
    name: 'Pedro',
  },
];
let counter: number = 0;
const handleClick = (persona: string) => {
  alert(`Hola ${persona}`);
};
const handleKey = () => {
  counter = counter + 1;
  console.log(`Se presiono una tecla ${counter} veces`);
};

const Eventos = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '10px auto',
      }}
    >
      <ul
        style={{
          listStyleType: 'none',
          padding: 0,
          margin: 0,
          textAlign: 'center',
        }}
      >
        {nameList.map((persona) => {
          return (
            <li
              key={persona.id}
              onClick={() => handleClick(persona.name)}
              onKeyDown={() => handleClick(persona.name)}
            >
              {persona.name}
            </li>
          );
        })}
      </ul>
      <input
        style={{
          marginTop: '20px',
          padding: '5px',
          border: '1px solid #ccc',
          width: '25%',
        }}
        type="text"
        onKeyUp={handleKey}
      />
    </div>
  );
};

export default Eventos;
