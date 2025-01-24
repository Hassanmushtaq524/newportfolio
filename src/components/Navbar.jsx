import React, { useRef, useLayoutEffect, useState } from 'react';
import gsap from 'gsap';

const items = [
  { href: "/work", text: "MY WORK", openText: "CHECK OUT MY WORK" },
  { href: "/about", text: "ABOUT ME", openText: "LEARN MORE ABOUT ME" },
  { href: "/contact", text: "CONTACT ME", openText: "ASK ME ANY QUESTIONS" },
];

const Navbar = () => {
  const navRef = useRef(null);
  const [hoveredItem, setHoveredItem] = useState(null); // Track hovered item

  /**
   * Fade-in effect for the entire navbar.
   */
  useLayoutEffect(() => {
    if (!navRef.current) return;
    const DELAY = 3;
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, {
        opacity: 0,
        duration: 1.5,
        delay: DELAY,
      });
    });
    return () => ctx.revert();
  }, []);

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
    gsap.set(`#item-${index}`, { 
        backgroundColor: "#9C1F2E",
        border: "0.5px solid #9C1F2E"
    })
    // Animation for hover effect
    gsap.to(`#item-${index}`, {
      width: "20rem",
      duration: 0.8
    });
  };

  const handleMouseLeave = (index) => {
    setHoveredItem(null);
    gsap.set(`#item-${index}`, { 
        backgroundColor: "transparent",
        border: "0.5px solid #F4F2F4"
    })
    // Revert animation
    gsap.to(`#item-${index}`, {
      width: "4rem",
      duration: 0.8
    });
  };

  return (
    <div id="navbar" className="fixed z-50 right-0 top-0 w-fit h-full">
      <nav
        ref={navRef}
        className="size-full flex flex-col items-end justify-start lg:justify-end gap-4 p-6 font-thin"
      >
        {items.map((x, i) => (
          <div
            id={`item-${i}`}
            key={i}
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={() => handleMouseLeave(i)}
            className="w-16 border-[0.5px] border-secondary flex-center p-4 text-secondary text-sm h-40 overflow-hidden"
          >
            <a href={x.href} className={`cursor-none text-center -rotate-90 ${(hoveredItem === i) ? 'font-bold !rotate-0' : ''}`} style={{ whiteSpace: "nowrap" }}>
              {hoveredItem === i ? x.openText : x.text}
            </a>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
