import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Books from './Books';
import Authors from './Authors';
import NavBar from './NavBar';

const BookShop = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/books" element={<Books />} />
        <Route path="/authors" element={<Authors />} />
      </Routes>
    </Router>
  );
};

export default BookShop;
