import React, { useState } from 'react';
import Login from './components/login/Login.jsx';
import BookShop from './components/bookShop/BookShop.jsx';

export const Context = React.createContext({});

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    Boolean(localStorage.getItem('token')),
  );
  return (
    <Context.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      {isAuthenticated ? <BookShop /> : <Login />}
    </Context.Provider>
  );
}

export default App;
