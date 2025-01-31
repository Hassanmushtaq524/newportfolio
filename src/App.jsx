import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { Router, Routes, Route } from 'react-router-dom';
import Work from './components/Work';
import About from './components/About';
import Navbar from './components/Navbar';
import gsap from 'gsap';
import { useEffect, useState } from 'react';
import { useWindowSize } from 'react-use';

function App() {  
  const [ innerText, setInnerText ] = useState(null);
  const { width: winWidth } = useWindowSize();
  const [ mobileView, setMobileView ] = useState();


  useEffect(() => {
    setMobileView((winWidth < 800) ? true : false);
  }, [])

  /**
   * moving mouse for cursor 
   * @returns 
   */
  function handleMouseMove(event) {
    const el = document.querySelector("#cursor");
    if (!el) return;
    gsap.to(el, {
      x: event.clientX - (el.getBoundingClientRect().width / 2),
      y: event.clientY - (el.getBoundingClientRect().height / 2),
      duration: 1
    })
  }
  window.addEventListener('mousemove', handleMouseMove);


  
  return (
    <div id="" className="relative h-dvh w-screen bg-secondary overflow-hidden">
      {!mobileView && 
        <div id="cursor" className="absolute z-[10] p-2 bg-maroon bg-blend-difference size-fit" style={{ pointerEvents: "none" }}>
          <h1 className="font-bold text-primary">{ innerText }</h1>
        </div>
      }
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/work' element={<Work setCursorText={setInnerText}/>}/>
        <Route path='/about' element={<About mobileView={mobileView}/>}/>
      </Routes>
    </div>
  );
}

export default App;
