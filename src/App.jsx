import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import Plan from './pages/Plan';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/plan' element={<Plan />}></Route>
      </Routes>
    </Router>   
    </>
  );
}

export default App;
