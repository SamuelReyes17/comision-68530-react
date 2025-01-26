import Home from "./home/Home";
import Footer from "./footer/Footer";
import MyNavbar from "./navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function App() {
  return (
    <div>
      <MyNavbar/>
      <Home/>
      <Footer/>
    </div>   
    
  );
}

export default App;
