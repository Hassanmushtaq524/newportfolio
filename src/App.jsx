import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { Router, Routes, Route } from 'react-router-dom';
import Work from './components/Work';
import About from './components/About';
import Navbar from './components/Navbar';
import gsap from 'gsap';
import { useEffect } from 'react';

function App() {
  
  function handleMouseMove(event) {
    const el = document.querySelector("#cursor");
    if (!el) return;
    gsap.to(el, {
      x: event.clientX - (el.getBoundingClientRect().width / 2),
      y: event.clientY - (el.getBoundingClientRect().height / 2),
      duration: 0.5
    })
  }
  window.addEventListener('mousemove', handleMouseMove);

  return (
    <div id="" className="relative h-dvh w-dvw bg-secondary">
      <div id="cursor" className="absolute z-[10] bg-maroon size-5 bg-blend-difference" />
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
