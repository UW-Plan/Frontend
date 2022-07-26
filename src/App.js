import './App.css';
import Home from "./Components/Pages/Home";
import Navbar from "./Components/Pages/Navbar";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Input from "./Components/Pages/Input";

    function App() {
      return (
          <Router>
          <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/input' element={<Input/>} />
          </Routes>
          </Router>
      );
      }
        
      export default App;
