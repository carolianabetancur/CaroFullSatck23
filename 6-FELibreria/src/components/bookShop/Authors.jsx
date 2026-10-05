import { useCallback, useEffect, useState } from 'react';

import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Tooltip,
  Typography,
  CircularProgress,
  Skeleton,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { apiClient, configUrl as config } from '../../config';

const Authors = () => {
  const [authors, setAuthors] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [openForm, setOpenForm] = useState(false);
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const [isLoadingAuthors, setIsLoadingAuthors] = useState(false);
  const [isLoadingSave, setIsLoadingSave] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const skeleton = [1, 2, 3, 4];

  const baseUrl = `${config.apiUrl}authors`;

  const getAuthors = useCallback(async () => {
    try {
      setIsLoadingAuthors(true);
      const response = await apiClient.get(baseUrl);
      setAuthors(response.data);
    } catch (error) {
      console.error('Error al obtener los autores:', error);
    } finally {
      setIsLoadingAuthors(false);
    }
  }, [baseUrl]);

  useEffect(() => {
    getAuthors();
  }, [getAuthors]);

  //Abrir formulario - Crear
  const handleCreate = () => {
    setSelectedAuthor(null);
    setName('');
    setEmail('');
    setOpenForm(true);
  };

  //Abrir formulario - Editar
  const handleEdit = (author) => {
    setSelectedAuthor(author);
    setName(author.name);
    setEmail(author.email);
    setOpenForm(true);
  };

  // POST / PUT
  const handleSave = async () => {
    try {
      setIsLoadingSave(true);
      const author = {
        name,
        email,
      };

      if (selectedAuthor) {
        await apiClient.put(`${baseUrl}/${selectedAuthor.id}`, author);
      } else {
        await apiClient.post(baseUrl, author);
      }
      setOpenForm(false);
      setSelectedAuthor(null);
      setName('');
      setEmail('');

      getAuthors();
    } catch (error) {
      console.error('Error al guardar el autor:', error);
    } finally {
      setIsLoadingSave(false);
    }
  };

  // DELETE
  const handleDelete = async (id) => {
    try {
      setDeletingId(id);
      await apiClient.delete(`${baseUrl}/${id}`);

      getAuthors();
    } catch (error) {
      console.error('Error al eliminar el autor:', error);
    } finally {
      setDeletingId(null);
    }
  };

  //Cerrar formulario
  const handleClose = () => {
    setOpenForm(false);
    setSelectedAuthor(null);
    setName('');
    setEmail('');
  };

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mt: 3,
          mb: 3,
        }}
      >
        <Typography sx={{ color: '#DC8070' }} variant="h4" fontWeight={600}>
          Autores
        </Typography>

        <Button
          variant="contained"
          sx={{ backgroundColor: '#03627E', borderRadius: '8px' }}
          startIcon={<AddIcon />}
          onClick={handleCreate}
        >
          Nuevo autor
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>ID</strong>
              </TableCell>

              <TableCell>
                <strong>Nombre</strong>
              </TableCell>

              <TableCell>
                <strong>Email</strong>
              </TableCell>

              <TableCell align="right">
                <strong>Acciones</strong>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {isLoadingAuthors
              ? skeleton.map((row) => (
                  <TableRow key={row}>
                    <TableCell>
                      <Skeleton variant="text" />
                    </TableCell>

                    <TableCell>
                      <Skeleton variant="text" />
                    </TableCell>

                    <TableCell>
                      <Skeleton variant="text" />
                    </TableCell>

                    <TableCell align="right">
                      <Skeleton variant="text" />
                    </TableCell>
                  </TableRow>
                ))
              : authors.map((author) => (
                  <TableRow key={author.id}>
                    <TableCell>{author.id}</TableCell>

                    <TableCell>{author.name}</TableCell>

                    <TableCell>{author.email}</TableCell>

                    <TableCell align="right">
                      <Tooltip title="Editar">
                        <IconButton
                          sx={{ color: '#03627E' }}
                          onClick={() => handleEdit(author)}
                        >
                          <EditIcon />
                        </IconButton>
                      </Tooltip>

                      <Tooltip title="Eliminar">
                        {deletingId === author.id ? (
                          <CircularProgress
                            size={24}
                            sx={{ color: '#DC8070' }}
                            aria-label="Loading…"
                          />
                        ) : (
                          <IconButton
                            sx={{ color: '#DC8079' }}
                            disabled={deletingId !== null}
                            onClick={() => handleDelete(author.id)}
                          >
                            <DeleteIcon />
                          </IconButton>
                        )}
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={openForm} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle sx={{ color: '#DC8070' }}>
          {selectedAuthor ? 'Editar autor' : 'Nuevo autor'}
        </DialogTitle>

        <DialogContent>
          <TextField
            fullWidth
            label="Nombre"
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>

          <Button
            sx={{
              backgroundColor: '#03627E',
              borderRadius: '8px',
              color: '#FFFFFF',
            }}
            variant="contained"
            color="#36445D"
            disabled={isLoadingSave}
            onClick={handleSave}
          >
            {isLoadingSave ? (
              <CircularProgress
                size={24}
                sx={{ color: '#DC8070' }}
                aria-label="Loading…"
              />
            ) : selectedAuthor ? (
              'Guardar cambios'
            ) : (
              'Crear autor'
            )}
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Authors;
