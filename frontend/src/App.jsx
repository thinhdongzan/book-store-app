import { config } from '@fortawesome/fontawesome-svg-core';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Product from './pages/Product';
import About from './pages/About';
import Cart from './pages/Cart';
import Account from './pages/Account';
import BookDetail from './pages/BookDetail';
import ScrollToTop from './components/ScrollToTop';
import Register from './pages/Register';
import Login from './pages/Login';
import MainLayout from './components/MainLayout';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='/about' element={<About />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/account' element={<Account />} />
          <Route path='/book/:id' element={<BookDetail />} />
        </Route>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;