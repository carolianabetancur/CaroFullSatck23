import { Link } from 'react-router-dom'; //Reemplaza el link de HTML, es un componente de React que nos permite navegar entre rutas sin recargar la página

const Menu = () => {
  return (
    <nav
      style={{
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
      }}
    >
      <ul
        style={{
          margin: 0,
          padding: 0,
          display: 'flex',
          flexDirection: 'row',
          gap: '10px',
          listStyleType: 'none',
        }}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/function">Componente Funcional</Link>
        </li>
        <li>
          <Link to="/class ">Componente de Clase</Link>
        </li>
        <li>
          <Link to="/styles">Componente de Estilos</Link>
        </li>
        <li>
          <Link to="/props">Props</Link>
        </li>
        <li>
          <Link to="/children">Children</Link>
        </li>
        <li>
          <Link to="/lists">Listas</Link>
        </li>
        <li>
          <Link to="/renderCondition">Renderizado Condicional</Link>
        </li>
        <li>
          <Link to="/eventos">Eventos</Link>
        </li>
        <li>
          <Link to="/estados">Estados</Link>
        </li>
        <li>
          <Link to="/context">Contexto</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
