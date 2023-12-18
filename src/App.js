import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Footer } from './Components/Footer/Footer';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Product from './Pages/Product';
import Sign from './Pages/Sign';
import ShopCategory from './Pages/ShopCategory';

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
            <Route path="/mens" element={<ShopCategory category="men"/>} />
            <Route path='/womans' element={<ShopCategory category="women"/>} />
            <Route path='/kids' element={<ShopCategory category="kid"/>} />

 
          </Routes>
          <Footer />
        </BrowserRouter>
        
      </div>
    </div>
  );
}

export default App;
