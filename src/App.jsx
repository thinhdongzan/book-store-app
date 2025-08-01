import { config } from '@fortawesome/fontawesome-svg-core';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header';
import HeroBanner from './components/HeroSection/HeroBanner';
import Home from './pages/Home';
import Product from './pages/Product';
import About from './pages/About';
import Cart from './pages/Cart';
import Account from './pages/Account';
import Footer from './components/Footer/Footer';
import BookDetail from './pages/BookDetail';
import ScrollToTop from './components/ScrollToTop';
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/account' element={<Account />} />
        <Route path='/book/:id' element={<BookDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;