import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ShopNow from "./pages/ShopNow";
import ProductDetails from "./pages/ProductDetails";
import { CardProvider } from './context/CardContext';
import Cart from "./pages/Cart";

function App() {
  return (
    <Router>
      <div>
      <CardProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/shop" element={<ShopNow />} />
          <Route path="/productdetails" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CardProvider>
      </div>
    </Router>
  );
}

export default App;
