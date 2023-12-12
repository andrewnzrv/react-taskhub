import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
  return(
    <div> 
      <Navbar/>
      <div className='main'>
        <Sidebar/>
        <Home/>
      </div>
      <Footer/>
    </div>

  );
}

export default App
