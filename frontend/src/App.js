import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Singup';
import Home from './pages/Home';
import Topnav from './layout/Topnav';
import Footer from './layout/Footer';

function App() {
  return (
    
    <div className="App">
       <Router>
        <Topnav />
        
        <Routes>
          <Route exact path="/" />
          <Route index element={ <Home /> } />
          <Route path="/pages/Login" element={<Login />}/>
          <Route path="/pages/Signup" element={<Signup />}/>
        </Routes>
       </Router>
       <Footer />
    </div>
  
   );
}

export default App;
