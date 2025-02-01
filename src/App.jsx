import Home from "./components/pages/home/Home";
import Footer from "./components/layouts/footer/Footer";
import MyNavbar from "./components/layouts/navbar/Navbar";
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
