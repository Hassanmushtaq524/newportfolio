import React, { useRef, useLayoutEffect, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useNavigate } from 'react-router-dom';
import CurrentDate from './CurrentDate';
import { useWindowSize } from 'react-use';
import logo from "../assets/img/logo.svg";


const items = [
  { href: "/work", text: "MY WORK", openText: "CHECK OUT MY WORK" },
  { href: "/about", text: "ABOUT ME", openText: "LEARN MORE ABOUT ME" },
  { href: "mailto:hhmushtaq@owu.edu", text: "CONTACT ME", openText: "ASK ME ANY QUESTIONS" },
];



const Navbar = () => {
    const navRef = useRef(null);
    const [hoveredItem, setHoveredItem] = useState(null); // Track hovered item
    const transitionRef = useRef(null);
    const navigate = useNavigate();
    const { width: winWidth } = useWindowSize();
    const [burger, setBurger] = useState(false);
    const boxRef = useRef(null);
    const [burgerOpen, setBurgerOpen] = useState(false);



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



    /** Main Nav item animations */
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



    /**
     * PAGE TRANSITION
     */
    const handleClick = (href) => {
        if (href.startsWith('mailto:')) {
            window.location.href = href;
            return;
        }
    
        if (!transitionRef.current) return;

        const height = transitionRef.current.getBoundingClientRect().height;
    
        const tl = gsap.timeline({
            defaults: { ease: "expo.inOut" },
            onStart: () => {
                gsap.set(transitionRef.current, {
                    visibility: "visible",
                    y: height, 
                });
            },
            onComplete: () => {
                gsap.set(transitionRef.current, {
                    visibility: "hidden",
                    y: 0,
                });
            },
        });
    
        // Handle burger menu closing
        if (burger) {
            setBurgerOpen(false);
            const el = boxRef.current;
            gsap.to(el, {
                borderRadius: "0px",
                duration: 0.3,
                ease: "expo.in"       
            })
        }

        tl.to(transitionRef.current, {
            y: 0,
            duration: 1,
            onComplete: () => navigate(href),
        })
        .to(transitionRef.current, {
            y: -height,
            duration: 1,
        });

        
    };
    


    /**
     * For burger menu
     */
    useEffect(() => {
        setBurger((winWidth < 800) ? true : false);
    }, [burger, burgerOpen])


    /**
     * burger nav menu open
     */
    const handleBurgerClick = (e) => {
        const el = boxRef.current;
        setBurgerOpen((prev) => !prev);
        
        // in current render, it was open 
        if (burgerOpen) {
            gsap.to(el, {
                borderRadius: "0px",
                duration: 0.3,
                ease: "expo.in"       
            })
        } else {
            gsap.to(el, {
                borderRadius: "100%",
                duration: 0.3,
                ease: "expo.in"       
            })
        }
    }



    return (
        <>
            <div id="navbar" className="fixed z-50 right-0 top-0 w-fit h-full">
                { burger ? 
                    <>
                        <div ref={boxRef}
                            onClick={handleBurgerClick} 
                            className={`fixed z-50 bottom-0 right-0 bg-secondary size-12`}/>
                        { burgerOpen &&
                        <nav
                            ref={navRef}
                            className="fixed top-0 left-0 size-full z-40 bg-primary flex flex-col items-center justify-center gap-12">
                            {items.map((x, i) => (
                            <div>
                                <a id={`item-${i}-a`} onClick={() => handleClick(x.href)} className="text-3xl font-bold text-secondary">
                                    {x.text}
                                </a>
                            </div>
                            ))}
                        </nav>
                        }
                    </>
                    :
                    <nav
                        ref={navRef}
                        className="size-full flex flex-col items-end justify-start md:justify-center lg:justify-end gap-4 p-6 font-thin">
                        {/* logo */}
                        <img src={logo} className="w-fit hover:rotate-[-60deg] duration-500" onClick={() => handleClick("/")} alt='logo'/>
                        {/* items */}
                        {items.map((x, i) => (
                            <div
                                id={`item-${i}`}
                                key={i}
                                onMouseEnter={() => handleMouseEnter(i)}
                                onMouseLeave={() => handleMouseLeave(i)}
                                onClick={() => handleClick(x.href)}
                                className="w-16 h-24 md:h-40 border-[0.5px] border-secondary flex-center p-4 text-secondary md:text-sm text-xs overflow-hidden">
                                <a className={`cursor-none text-center -rotate-90 ${(hoveredItem === i) ? 'font-bold !rotate-0' : ''}`} style={{ whiteSpace: "nowrap" }}>
                                    {hoveredItem === i ? x.openText : x.text}
                                </a>
                            </div>
                        ))}
                    </nav>

                }
                
            </div>
            <div ref={transitionRef} className="absolute invisible w-screen h-dvh bg-primary z-[200]"/>
        </>
        
    );
};

export default Navbar;
