import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Cart from './pages/cart/Cart';
import Shopp from './pages/shopp/Shopp';
import ShopContextProvider from './context/shop-context';
import Purchase from './pages/purchase/Purchase';

function App() {
  return (
    <div className="App">

    <ShopContextProvider>
      <Router>
        <Navbar />
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<Shopp />}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path='/purchase' element={<Purchase />}/>
          </Routes>
        </div>

      </Router>
    </ShopContextProvider>

    </div>
  );
}

export default App;
