import React, { useEffect, useState, useLayoutEffect, useRef } from 'react'
import linkedInIcon from '../assets/img/linkedin.svg';
import githubIcon from '../assets/img/github.svg';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import { useWindowScroll } from 'react-use';
import gsap from 'gsap';
import img1 from '../assets/img/faq-img-1.jpg'
import img2 from '../assets/img/faq-img-2.jpg'
import img3 from '../assets/img/faq-img-3.jpg'
import img4 from '../assets/img/faq-img-4.jpg'
gsap.registerPlugin(ScrollTrigger)



/**
 * Skills list
 */
const skills = [
  { title: "React.js", desc: "1 YEAR"},
  { title: "GSAP", desc: "1 YEAR"},
  { title: "TailwindCSS", desc: "1 YEAR"},
  { title: "Python", desc: "1 YEAR"},
  { title: "HTML/CSS", desc: "1 YEAR"},
  { title: "JavaScript", desc: "1 YEAR"},
  { title: "Node.js", desc: "1 YEAR"},
  { title: "Express.js", desc: "1 YEAR"}
]



/**
 * FAQs list
 */
const FAQs = [
  { question: "WHAT IS MY DREAM JOB?", answer: "Somewhere where I am able to remain creative and design some cool stuff!"},
  { question: "WHERE DO I SEE MYSELF IN 10 YEARS?", answer: "Idk"},
  { question: "WHAT IS MY DREAM JOB?", answer: "Somewhere where I am able to remain creative and design some cool stuff!"},
  { question: "WHAT IS MY DREAM JOB?", answer: "Somewhere where I am able to remain creative and design some cool stuff!"},
  { question: "WHAT IS MY DREAM JOB?", answer: "Somewhere where I am able to remain creative and design some cool stuff!"},
  { question: "WHAT IS MY DREAM JOB?", answer: "Somewhere where I am able to remain creative and design some cool stuff!"},
  { question: "WHAT IS MY DREAM JOB?", answer: "Somewhere where I am able to remain creative and design some cool stuff!"},
  { question: "WHAT IS MY DREAM JOB?", answer: "Somewhere where I am able to remain creative and design some cool stuff!"},
  { question: "WHAT IS MY DREAM JOB?", answer: "Somewhere where I am able to remain creative and design some cool stuff!"},
  { question: "WHAT IS MY DREAM JOB?", answer: "Somewhere where I am able to remain creative and design some cool stuff!"},
  { question: "WHAT IS MY DREAM JOB?", answer: "Somewhere where I am able to remain creative and design some cool stuff!"}
]



/**
 * Img list
 */
const imgs = [ img1, img2, img3, img4 ]


const About = () => {
  const imgRef = useRef(null);
  const [scrollingImg, setScrollingImg] = useState(false);
  const [prevY, setPrevY] = useState(0);
  const [ imgIdx, setImgIdx ] = useState(1);
  const [scrollY, setScrollY] = useState(0);

  /**
   * Scrolling listener on the about page
   */
  useEffect(() => {
    const container = document.querySelector("#about") || window;
    function handleScroll() {
      setScrollY(container.scrollTop || window.scrollY);
    }
  
    container.addEventListener('scroll', handleScroll);
  
    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);



  /**
   * For images reel
   */
  useEffect(() => {
    if (!scrollingImg) return;
    if (scrollY - prevY > 200) {
      setPrevY(scrollY);
      setImgIdx((prev) => (prev + 1) % imgs.length);
    }
    if (scrollY - prevY < -200) {
      setPrevY(scrollY);
      setImgIdx((prev) => (prev - 1) < 0 ? imgs.length - 1 : prev - 1);
    }
  }, [scrollingImg, scrollY, prevY])



  /**
   * Img pinning 
   */
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const { height: h, y: y }  = document.querySelector("#reel").getBoundingClientRect();
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#reel-img", 
          start: `center center`, 
          end: `top+=${h} bottom`,
          scrub: 1,
          pin: true,
          pinSpacing: true,
          markers: true, 
          scroller: "#about"
        },
        onStart: () => setScrollingImg(true),
        onComplete: () => setScrollingImg(false),
        onReverseComplete: () => setScrollingImg(false)
      });
  
      tl.to("#reel-img", {
        scale: 1.4,
      });
    });

    return () => ctx.revert();
  }, []);



  return (
    <div id="about" className="h-dvh relative w-screen bg-primary flex flex-col overflow-x-hidden">
        {/* top left text */}
        <h1 className="absolute top-[24px] left-[24px] font-black display text-secondary w-80 sm:w-fit">
          ABOUT ME
        </h1>
        {/* top right stuff */}
        <div className="fixed z-[100] top-[24px] right-[24px] size-fit flex flex-col items-end md:flex-row gap-4">
          <img className="size-12  hover:rotate-[-60deg] duration-700" 
                src={linkedInIcon} 
                onClick={() => window.location.href = 'https://www.linkedin.com/in/hassan-mushtaq-3a5143230/'}  
                alt="linkedin" />
          <img className="size-12 hover:rotate-[-60deg] duration-700" 
                src={githubIcon} 
                onClick={() => window.location.href = 'https://github.com/HassanMushtaq524'} 
                alt="github" />
        </div>

        {/* MAIN CONTAINER */}
        <section id='main' className='md:h-full
                                  flex flex-col
                                  md:grid md:grid-rows-6 md:grid-cols-6 gap-8 pt-36 p-[24px] md:pe-28'>
          {/* img */}
          <div className='border-[0.5px] border-secondary overflow-hidden
                          min-w-[14rem] max-w-[24rem] min-h-[14rem] max-h-[30rem]
                          md:col-span-2 md:row-span-6 md:h-full'>
            <img></img>
          </div>
          {/* main text */}
          <div className='md:col-start-4 md:col-span-3 md:row-span-2 text-end'>
            <h3 className="text-lg font-bold text-secondary">HELLO!</h3>
            <p className='text-sm font-thin text-secondary'>Nam libero tempore, cum soluta nobis est eligendi 
               optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, 
               omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut 
               officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. 
               Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut 
               perferendis doloribus asperiores repellat.</p>
          </div>
          <div className='md:col-start-4 md:col-span-3 md:row-span-2 text-end'>
            <h3 className="text-lg font-bold text-secondary">EXPERTISE</h3>
            <p className='text-sm font-thin text-secondary'>
              Frontend Design / <br/>
              Frontend Development / <br/>
              API Development / <br/>
              UI/UX /<br/>
              Graphic Design /<br/>
            </p>
          </div>
          <div className='md:col-start-5 md:col-span-1 md:row-span-2 text-end'>
            <h3 className="text-lg font-bold text-secondary">HOBBIES</h3>
            <p className='text-sm font-thin text-secondary'>
              Designing Posters / <br/> 
              Watching Anime / <br/> 
              Learning web animation / <br/> 
              Gaming ~ Valorant/CS /<br/>
            </p>
          </div>
          <div className='md:col-start-6 md:col-span-1 md:row-span-2 text-end'>
            <h3 className="text-lg font-bold text-secondary">FAV PLACES</h3>
            <p className='text-sm font-thin text-secondary'>
              NYC! / <br/> 
              Boston / <br/> 
              Lahore /<br/> 
            </p>
          </div>
        </section>
        
        {/* TOP SKILLS */}
        <section id="skills" className="h-fit w-screen p-[24px] md:pe-28 text-end">
          <h3 className="text-lg font-bold text-secondary mb-4">TOP SKILLS</h3>
          <div className="flex flex-wrap md:flex-row gap-4 items-center justify-end">
            {skills.map((x, i) => (
              <div className="size-32 flex flex-col items-center justify-center p-4 gap-4 bg-secondary text-primary duration-500 hover:-rotate-[60deg]">
                <h3 className="font-bold text-sm">{x.title}</h3>
                <p className="font-thin text-sm">{x.desc}</p>
              </div>
            ))}
          </div>
        </section>  

        {/* REEL */}
        <section id="reel" className='w-screen px-[24px] py-32 md:pe-28 text-end flex flex-row items-start justify-center gap-8 md:gap-24'>
            {/* FAQs */}
            <div id="faq" className="flex flex-col gap-24">
              {FAQs.map((x, i) => (
                <div className="">
                    <h3 className="text-lg font-bold text-secondary mb-2">{x.question}</h3>
                    <p className='text-sm font-thin text-secondary'>{x.answer}</p>
                </div>
              ))}
            </div>
            {/* img */}
            <div id="reel-img" className='w-[10rem] h-[12rem] md:w-[24rem] md:h-[32rem] border-[0.5px] border-secondary overflow-hidden'>
              <img src={imgs[imgIdx]} alt="reel-img" className="object-cover" />
            </div>
        </section>
    </div>
  )
}

export default About;