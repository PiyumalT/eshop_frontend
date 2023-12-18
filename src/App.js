import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Footer } from './Components/Footer/Footer';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Product from './Pages/Product';
import Sign from './Pages/Sign';

function App() {
  return (

    <div className="App">
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product" element={<Product />} />
            <Route path="/sign" element={<Sign />} />                 
          </Routes>
          <Footer />
        </BrowserRouter>
        
      </div>
    </div>
  );
}

export default App;
