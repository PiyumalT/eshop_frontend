import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Footer } from './Components/Footer/Footer';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Product from './Pages/Product';
import Sign from './Pages/Sign';
import ShopCategory from './Pages/ShopCategory';
import Account from './Pages/Account';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/api/v1/';

function App() {
  return (

    <div className="App">
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/sign" element={<Sign />} />   
            <Route path="/category/:category" element={<ShopCategory/>} />
            <Route path="/account" element={<Account />} />

 
          </Routes>
          <Footer />
        </BrowserRouter>
        
      </div>
    </div>
  );
}

export default App;
