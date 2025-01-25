import React, { useEffect, useRef, useState, useLayoutEffect } from 'react'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import CurrentDate from './CurrentDate';
import linkedInIcon from '../assets/img/linkedin.svg';
import githubIcon from '../assets/img/github.svg';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const mainTitleRef = useRef(null);
    const nameTitleRef = useRef(null);
    const mainImgRef = useRef(null);
    const rightTextRef = useRef(null);
    const topRightTextRef = useRef(null);
    const iconsRef = useRef(null);
    const [visible, setVisible] = useState(true);
    const navigate = useNavigate();

   /**
     * Animations on mount
     */
    useLayoutEffect(() => {
        if (!mainTitleRef.current || !nameTitleRef.current) return;

        const ctx = gsap.context(() => {
            const mainTitleRect = mainTitleRef.current.getBoundingClientRect();
            const nameTitleRect = nameTitleRef.current.getBoundingClientRect();

            const tl = gsap.timeline();
            tl.from(mainTitleRef.current, {
                y: mainTitleRect.height,
                duration: 1,
                ease: 'power3.inOut',
            })
            .to(mainTitleRef.current, {
                y: mainTitleRect.height,
                duration: 1,
                onComplete: () => setVisible(false),
            })
            .from(nameTitleRef.current, {
                x: -nameTitleRect.width * 1.5,
                duration: 1,
                ease: "expo.out"
            });
        });

        return () => ctx.revert();
    }, []);



    /**
     * Fade-in effect for other stuff
     */
    useLayoutEffect(() => {
        if (!mainImgRef.current || !rightTextRef.current) return;
        const DELAY = 3;
        const ctx = gsap.context(() => {
            gsap.from(mainImgRef.current, {
                opacity: 0,
                duration: 1.5,
                delay: DELAY,
                ease: 'power3.inOut',
            });
            gsap.from(rightTextRef.current, {
                opacity: 0,
                duration: 1.5,
                delay: DELAY,
                ease: 'power3.inOut',
            });
            gsap.from(topRightTextRef.current, {
                opacity: 0,
                duration: 1.5,
                delay: DELAY,
                ease: 'power3.inOut',
            });
            
            gsap.from(iconsRef.current, {
                opacity: 0,
                duration: 1.5,
                delay: DELAY,
                ease: 'power3.inOut',
            });
        });
        return () => ctx.revert();
    }, []);



    return (
        <div id="home" className="relative h-dvh w-screen font-black bg-primary flex-center overflow-hidden">
            {visible && 
                <div className="overflow-hidden size-fit">
                    <h1 ref={mainTitleRef} className="font-black md:text-[40rem] text-[10rem] text-secondary text-center h-fit overflow-hidden">
                        HI
                    </h1>
                </div>
            }
             
            {/* img */}
            <div ref={mainImgRef} className="absolute -bottom-8 left-1/8 lg:size-[50rem] md:size-[40rem] size-[30rem] overflow-hidden">
                <img src={require('../assets/img/MyImg.png')} alt="my-img" className="size-fit object-cover"/>
            </div>
               

            <div className="w-full h-fit t lg:w-fit lg:h-fit absolute z-10 
                            text-secondary
                            bottom-0 left-0 lg:-bottom-8 lg:-left-2 
                            overflow-hidden">
                {/* right text */}
                <p ref={rightTextRef} className="absolute top-0 right-0 text-right leading-[0.4]">
                    <span className="text-xs md:text-lg font-thin">hhmushtaq@owu.edu<br/></span>
                    <span className="text-xs md:text-2xl font-bold ">Coder. Designer.</span>
                </p>
                {/* name */}
                <h1 ref={nameTitleRef} className="relative text-secondary font-black lg:text-[13rem] md:text-[6rem] text-[4rem] leading-[0.75]">
                    I AM <br/> HASSAN
                </h1>
            </div>   

            {/* Top right text */}
            <div ref={topRightTextRef} className="absolute w-96 md:top-[24px] md:right-[24px] md:text-end text-center text-secondary">
                <p className="font-thin text-xs md:text-lg">
                    Enthusiastic front-end developer and designer, learning through personal projects and exploration 
                    <CurrentDate/>
                </p>
            </div>
            
            {/* Icons */}
            <div ref={iconsRef} className="absolute top-[24px] left-[24px] size-fit flex flex-col items-start md:flex-row gap-4">
                <img className="size-12 z-[100] hover:rotate-[-60deg] duration-500" 
                     src={linkedInIcon} 
                     onClick={() => window.location.href = 'https://www.linkedin.com/in/hassan-mushtaq-3a5143230/'}  
                     alt="linkedin" />
                <img className="size-12 z-[100] hover:rotate-[-60deg] duration-500" 
                     src={githubIcon} 
                     onClick={() => window.location.href = 'https://github.com/HassanMushtaq524'} 
                     alt="github" />
            </div>
        </div>
    )
}

export default Home;