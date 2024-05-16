
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './component/Navbar';
import Contact from './component/Contact';
import Services from './component/Services';
import Privacy from './component/Privacy';
import About from './component/About';

function App() {
  return (
  
    <Router>
      
      <Routes>
        <Route path="/" element={<Navbar/>} />
<Route path="/contact" element={<Contact/>}/>
<Route path="/services" element={<Services/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/privacy" element={<Privacy/>}/>

      </Routes>
    </Router>
  );
}

export default App;
