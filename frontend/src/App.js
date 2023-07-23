import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Singup";
import Home from "./pages/Home";
import Topnav from "./layout/Topnav";
import Footer from "./layout/Footer";
import Singleproduct from "./pages/SingleProduct";
import Carousel from "./components/Carousel";
import CartProvider from "./CartConstext";
import Create from "./pages/Create";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Router>
          <Topnav />
          <Routes>
            <Route exact path="/" />
            <Route index element={<Home />} />
            <Route
              path="/pages/SingleProduct"
              element={<Singleproduct />}
            ></Route>
            <Route path="/pages/Create" element={<Create />}></Route>
            <Route path="/pages/Dashboard" element={<Dashboard />} />
            <Route path="/pages/Login" element={<Login />} />
            <Route path="/pages/Signup" element={<Signup />} />
            <Route path="/components/Carousel" element={<Carousel />} />
          </Routes>
        </Router>
      </CartProvider>
      <Footer />
    </div>
  );
}

export default App;
