import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

import MenuBookIcon from '@mui/icons-material/MenuBook';
import PeopleIcon from '@mui/icons-material/People';
import LogoutIcon from '@mui/icons-material/Logout';
import { Context } from '../../App';

const NavBar = () => {
  const { setIsAuthenticated } = useContext(Context);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: '#03627E',
        color: '#EDDEE0',
      }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Bookshop
        </Typography>

        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button
            component={Link}
            to="/books"
            color="inherit"
            startIcon={<MenuBookIcon />}
          >
            Libros
          </Button>

          <Button
            component={Link}
            to="/authors"
            color="inherit"
            startIcon={<PeopleIcon />}
          >
            Autores
          </Button>

          <Button
            color="inherit"
            startIcon={<LogoutIcon />}
            onClick={handleLogout}
          >
            Cerrar sesión
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
