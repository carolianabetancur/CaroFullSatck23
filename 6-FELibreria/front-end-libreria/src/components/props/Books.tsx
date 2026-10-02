import type Book from './Book';
import BookComp from './BookComp';

const bookList: Book[] = [
  {
    id: 1,
    title: 'El principito',
    author: 'Antoine de Saint-Exupéry',
  },
  {
    id: 2,
    title: '100 años de soledad',
    author: 'Gabriel García Márquez',
  },
  {
    id: 3,
    title: 'Don Quijote de la Mancha',
    author: 'Miguel de Cervantes',
  },
  {
    id: 4,
    title: 'El código Da Vinci',
    author: 'Dan Brown',
  },
];

const Libros = () => {
  return (
    <>
      {bookList.map((book) => {
        return <BookComp title={book.title} author={book.author} />;
      })}
    </>
  );
};

export default Libros;
