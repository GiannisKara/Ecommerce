import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Singup";
import Home from "./pages/Home";
import Topnav from "./layout/Topnav";
import Footer from "./layout/Footer";
import Singleproduct from "./pages/SingleProduct";
import Carousel from "./components/Carousel";
import { CartProvider } from "./CartConstext";
//import Create from "./pages/Create";
import Dashboard from "./pages/Dashboard";
import TshirtList from "./pages/TshirtList";
import ShoesList from "./pages/ShoesList";
import JeansList from "./pages/JeansList";
import ProductDetail from "./ProductStore";
import ShippingInfo from "./pages/shipping";
import Success from "./pages/Success";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Router>
          <Topnav />
          <Routes>
            <Route exact path="/" />
            <Route index element={<Home />} />
            <Route path="/products/productId" component={ProductDetail} />
            <Route
              path="/pages/shippinginfo"
              element={<ShippingInfo />}
            ></Route>            
            <Route path="/products/:_id" element={<Singleproduct />} />
            
            <Route path="/pages/Dashboard" element={<Dashboard />} />
            <Route path="/pages/Login" element={<Login />} />
            <Route path="/pages/Signup" element={<Signup />} />
            <Route path="/components/Carousel" element={<Carousel />} />
            <Route path="/pages/TshirtList" element={<TshirtList />} />
            <Route path="/pages/ShoesList" element={<ShoesList />} />
            <Route path="/pages/JeansList" element={<JeansList />} />
            <Route path="/pages/Success" element={<Success />} />
          </Routes>
        </Router>
      </CartProvider>
      <Footer />
    </div>
  );
}

export default App;
