import React, { useState } from 'react';
import './App.css';
import './components/CompFunction.js';
import CompFunction from './components/CompFunction.tsx';
import CompClase from './components/CompClase.tsx';
import Menu from './components/router/Menu.tsx';
import StylesFile from './components/styles/StylesFile.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VariableStyle from './components/styles/VariableStyle.tsx';
import LibraryStyles from './components/styles/LibraryStyles.tsx';
import Books from './components/props/Books.tsx';
import AlertExample from './components/children/AlertExample.tsx';
import Listas from './components/listas/Listas.tsx';
import RenderCondition from './components/renderizadoCondicional/RenderCondition.tsx';
import Eventos from './components/eventos/Eventos.tsx';
import Estado from './components/estado/Estado.tsx';
import Formulario from './components/estado/Formulario.tsx';
import Contexto from './components/contexto/Contexto.tsx';

//Así creamos el contexto
export const Context = React.createContext<[boolean, React.Dispatch<React.SetStateAction<boolean>>]>([false, () => {}]);

//BrowserRouter: Abarca todo lo que quiero que contenga el menú de navegación, todo lo que esté por dentro es lo navegable
//Routes: Contenedor de enlaces de las rutas, es el que contiene a todos los enlaces de navegación
//Route: Cada uno de los enlaces de navegación, es el que contiene a cada enlace de navegación. Dos parámetros, path y element.
//Path es la ruta que quiero que se muestre en la barra de navegación, y element es el componente que quiero que se muestre cuando se haga click en el enlace de navegación.
//<></> Esto es un fragment, es un contenedor que no genera un elemento en el DOM, es como un div pero sin generar un elemento en el DOM. Se utiliza para agrupar elementos o componentes
function App() {
  const [sesion, setSession] = useState(true);
  return (
    <div>
      <h1>Ejemplos React</h1>
      <div style={{ border: '1px solid #CCC', margin: '0px 20px' }} />
      <BrowserRouter>
        <Context.Provider value={[sesion, setSession]}>
          <Menu />
          <Routes>
            <Route path="/" element={<CompFunction content="Home Page" />} />
            <Route
              path="/function"
              element={
                <CompFunction content="Esto es un componente funcional" />
              }
            />
            <Route
              path="/class"
              element={<CompClase content="Hola, soy un componente de clase" />}
            />
            <Route
              path="/styles"
              element={
                <>
                  <StylesFile />
                  <VariableStyle />
                  <LibraryStyles />
                </>
              }
            />
            <Route path="/props" element={<Books />} />
            <Route path="/children" element={<AlertExample />} />
            <Route path="/lists" element={<Listas />} />
            <Route path="/renderCondition" element={<RenderCondition />} />
            <Route path="/eventos" element={<Eventos />} />
            <Route
              path="/estados"
              element={
                <>
                  <Estado />
                  <Formulario />
                </>
              }
            />
            <Route path="/context" element={<Contexto />} />
          </Routes>
        </Context.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
