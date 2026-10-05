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

const Books = () => {
  const [books, setBooks] = useState([]);
  const [openForm, setOpenForm] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [isLoadingBooks, setIsLoadingBooks] = useState(false);
  const [isLoadingSave, setIsLoadingSave] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const skeleton = [1, 2, 3, 4];

  const baseUrl = `${config.apiUrl}books`;

  // GET - Obtener libros
  const getBooks = useCallback(async () => {
    try {
      setIsLoadingBooks(true);
      const response = await apiClient.get(baseUrl);

      setBooks(response.data);
    } catch (error) {
      console.error('Error al obtener los libros:', error);
    } finally {
      setIsLoadingBooks(false);
    }
  }, [baseUrl]);

  useEffect(() => {
    getBooks();
  }, [getBooks]);

  // Abrir formulario - Crear
  const handleCreate = () => {
    setSelectedBook(null);
    setName('');
    setYear('');
    setOpenForm(true);
  };

  // Abrir formulario - Editar
  const handleEdit = (book) => {
    setSelectedBook(book);
    setName(book.name);
    setYear(book.year);
    setOpenForm(true);
  };

  // POST / PUT
  const handleSave = async () => {
    try {
      setIsLoadingSave(true);
      const book = {
        name,
        year: Number(year),
      };

      if (selectedBook) {
        // PUT
        await apiClient.put(`${baseUrl}/${selectedBook.id}`, book);
      } else {
        // POST
        await apiClient.post(baseUrl, book);
      }

      setOpenForm(false);
      setSelectedBook(null);

      setName('');
      setYear('');

      getBooks();
    } catch (error) {
      console.error('Error al guardar el libro:', error);
    } finally {
      setIsLoadingSave(false);
    }
  };

  // DELETE
  const handleDelete = async (id) => {
    try {
      setDeletingId(id);
      await apiClient.delete(`${baseUrl}/${id}`);

      getBooks();
    } catch (error) {
      console.error('Error al eliminar el libro:', error);
    } finally {
      setDeletingId(null);
    }
  };

  // Cerrar formulario
  const handleClose = () => {
    setOpenForm(false);
    setSelectedBook(null);

    setName('');
    setYear('');
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
          Libros
        </Typography>

        <Button
          variant="contained"
          sx={{ backgroundColor: '#03627E', borderRadius: '8px' }}
          startIcon={<AddIcon />}
          onClick={handleCreate}
        >
          Nuevo libro
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
                <strong>Año</strong>
              </TableCell>

              <TableCell align="right">
                <strong>Acciones</strong>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {isLoadingBooks
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
              : books.map((book) => (
                  <TableRow key={book.id}>
                    <TableCell>{book.id}</TableCell>

                    <TableCell>{book.name}</TableCell>

                    <TableCell>{book.year}</TableCell>

                    <TableCell align="right">
                      <Tooltip title="Editar">
                        <IconButton
                          sx={{ color: '#03627E' }}
                          onClick={() => handleEdit(book)}
                        >
                          <EditIcon />
                        </IconButton>
                      </Tooltip>

                      <Tooltip title="Eliminar">
                        {deletingId === book.id ? (
                          <CircularProgress
                            size={24}
                            sx={{ color: '#DC8070' }}
                            aria-label="Loading…"
                          />
                        ) : (
                          <IconButton
                            sx={{ color: '#DC8079' }}
                            disabled={deletingId !== null}
                            onClick={() => handleDelete(book.id)}
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
          {selectedBook ? 'Editar libro' : 'Nuevo libro'}
        </DialogTitle>

        <DialogContent>
          <TextField
            fullWidth
            label="Nombre"
            value={name}
            onChange={(event) => setName(event.target.value)}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Año"
            type="number"
            value={year}
            onChange={(event) => setYear(event.target.value)}
            margin="normal"
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
            ) : selectedBook ? (
              'Guardar cambios'
            ) : (
              'Crear libro'
            )}
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Books;
