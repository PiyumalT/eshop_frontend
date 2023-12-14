import './App.css';
import Navbar from './Components/Navbar/Navbar';
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
        </BrowserRouter>
        
      </div>

      <h1>My React App</h1>
      <p>My first React app</p>
    </div>
  );
}

export default App;
