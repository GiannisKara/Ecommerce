<<<<<<< Updated upstream
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Singup';
import Home from './pages/Home';
import Topnav from './layout/Topnav';
import Footer from './layout/Footer';
import Singleproduct from './pages/SingleProduct';
import Carousel from './components/Carousel';
=======
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Singup";
import Home from "./pages/Home";
import Topnav from "./layout/Topnav";
import Footer from "./layout/Footer";
import Singleproduct from "./pages/SingleProduct";
import CartProvider from "./CartConstext";
import Cancel from "./pages/Cancel";
import Success from "./pages/Success";
>>>>>>> Stashed changes

function App() {
  return (
    <div className="App">
<<<<<<< Updated upstream
       <Router>
        <Topnav />
        <Routes>
          <Route exact path="/" />
          <Route index element={ <Home /> } />
          <Route path="/pages/SingleProduct" element={<Singleproduct />}></Route>
          <Route path="/pages/Login" element={<Login />}/>
          <Route path="/pages/Signup" element={<Signup />}/>
          <Route path='/components/Carousel' element={<Carousel />}/>
        </Routes>
       </Router>
       <Footer />
=======
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
            <Route path="/pages/Login" element={<Login />} />
            <Route path="/pages/Signup" element={<Signup />} />
            <Route path="Success" element={<Success />} />
            <Route path="Cancel" element={<Cancel />} />
          </Routes>
        </Router>
        <Footer />
      </CartProvider>
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
