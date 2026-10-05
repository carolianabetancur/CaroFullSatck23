import { useState, useContext } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  CircularProgress,
} from '@mui/material';
import axios from 'axios';
import { Context } from '../../App';
import { configUrl as config } from '../../config';

const loginUrl = `${config.apiUrl}user/login`;
const Login = () => {
  const { setIsAuthenticated } = useContext(Context);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const response = await axios.post(
        loginUrl,
        //payload o body
        { email, password },
        //headers
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        setIsAuthenticated(true);
      } else {
        setError('Credenciales incorrectas');
      }
    } catch (error) {
      setError(`Ha ocurrido un error ${error}`);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <Typography variant="h4" align="center">
          Iniciar Sesión
        </Typography>
        {error && (
          <Typography color="error" align="center">
            {error}
          </Typography>
        )}
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            disabled={isLoading}
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
            {isLoading ? (
              <CircularProgress
                size={24}
                sx={{ color: '#DC8070' }}
                aria-label="Loading…"
              />
            ) : (
              'Ingresar'
            )}
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
