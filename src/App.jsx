import Home from "./components/pages/home/Home";
import Footer from "./components/layouts/footer/Footer";
import MyNavbar from "./components/layouts/navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { BrowserRouter, Routes, Route} from 'react-router'

import Productos from "./components/pages/productos/Productos";
import Cart from "./components/common/cart/cart";
import { ItemDetail } from "./components/pages/itemDetail/ItemDetail";
function App() {
  return (
    <div>
      
     
      
      <BrowserRouter>
      
      <MyNavbar/>
      
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shop" element={<Productos/>}/>
        <Route path="/category/:name" element={<Productos/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/itemDetail/:id" element={<ItemDetail/>}/>
        <Route path="/category/:sub-category" element={<Productos/>}/>

        <Route path="*" element={<h2>404 not found</h2>}/>
       </Routes>
        <Footer/> 
      </BrowserRouter>
    </div>   
    
  );
}

export default App;
