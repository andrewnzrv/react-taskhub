import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import ItemDetails from './pages/ItemDetailsPage'
import NotFound from './pages/NotFound'
import { Routes, Route } from "react-router-dom"; 

function App() {
  return(
    <div> 
        <Navbar/>
        <div className='main'>
        <Sidebar/>
        <Routes>           
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/item-details" element={<ItemDetails/>}/>
            <Route path="/not-found" element={<NotFound/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>

  );
}

export default App




