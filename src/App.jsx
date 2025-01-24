import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { Router, Routes, Route } from 'react-router-dom';
import Work from './components/Work';
import About from './components/About';
import Navbar from './components/Navbar';

function App() {
  return (
    <div id="" className="relative h-dvh w-screen bg-secondary">
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/work' element={<Work/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
