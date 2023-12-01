
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Menu from './pages/Menu'
import Login from './pages/Login'
import Pagenotfound from './pages/Pagenotfound'




function App() {
  return (
    <div >
  
   <BrowserRouter>
  
   <Routes>
     <Route path="/" element={<Home />}  />
     <Route path="/about" element={<About />}  />
     <Route path="/contact" element={<Contact />}  />
     <Route path="/cart" element={<Cart />}  />
     <Route path="/menu" element={<Menu />}  />
     <Route path="/login" element={<Login />}  />

     <Route path="*" element={<Pagenotfound />}  />
   
   </Routes>
   </BrowserRouter>   
   

    </div>
  );
}

export default App;
