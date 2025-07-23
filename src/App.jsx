import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header';
import HeroBanner from './components/HeroSection/HeroBanner';
import Home from './pages/Home';
import Product from './pages/Product';
import About from './pages/About';
import Cart from './pages/Cart';
import Account from './pages/Account';

function App() {
  return (
    <Router>
      <Header />
      <HeroBanner />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/account' element={<Account />} />
      </Routes>
    </Router>
  );
}

export default App;