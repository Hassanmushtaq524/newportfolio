import React, { useState } from 'react';
import linkedInIcon from "../assets/img/linkedin.svg";
import githubIcon from "../assets/img/github.svg";
import longlegsImg from "../assets/img/work-img-longlegs.jpg";


const work = [
  {
    title: "MOVIE POSTER: LONGLEGS",
    coverImg: longlegsImg,
    layout: [
      { desc: "Longlegs' official branding is interesting to me. The sharp contrast between the bright red and deep darkness creates an interesting image that fits the movie. I wanted to continue the branding and changing it did not feel right in this case. "},
      { desc: "I used a basic Helvetica font and contrasting font sizes, similar to Swiss typographic ideas. The plastic wrap texture on top of the poster mimics the wrapping of evidence in crime scenes in the movie."},
      { img: longlegsImg }
    ]
  }
]

const getRandomDimensions = () => {
  const min = 10; // minimum rem
  const max = 26; // maximum rem
  const randomWidth = Math.floor(Math.random() * (max - min + 1)) + min; // random width
  const randomHeight = Math.floor(Math.random() * (max - min + 1)) + min; // random height
  return { width: randomWidth, height: randomHeight };
}

const Work = () => {

  const [ selected, setSelected ] = useState(false);
  const [ selectedIdx, setSelectedIdx ] = useState();



  return (
    <section id="work" className="relative h-dvh w-screen bg-primary flex flex-col items-center justify-center overflow-x-hidden">
      {/* top left text */}
      <h1 className="absolute top-[24px] left-[24px] font-black display text-secondary w-80 sm:w-fit">
        WORK
      </h1>
      {/* top right stuff */}
      <div className="fixed z-[100] top-[24px] right-[24px] size-fit flex flex-col items-end md:flex-row gap-4">
        <img className="size-12 hover:rotate-[-60deg] duration-700" 
              src={linkedInIcon} 
              onClick={() => window.location.href = 'https://www.linkedin.com/in/hassan-mushtaq-3a5143230/'}  
              alt="linkedin" />
        <img className="size-12 hover:rotate-[-60deg] duration-700" 
              src={githubIcon} 
              onClick={() => window.location.href = 'https://github.com/HassanMushtaq524'} 
              alt="github" />
      </div>
      {/* TODO: add overlay of the selected work */}
      {/* work images */}
      <div className="max-w-[56rem] h-screen flex flex-wrap gap-4 overflow-y-scroll scrollbar-hidden pt-32">
        <div className='w-[22rem] h-[22rem] border-[0.5px] border-secondary'></div>
        <div className='w-[24rem] h-[12rem] border-[0.5px] border-secondary'></div>
        <div className='w-[24rem] h-[12rem] border-[0.5px] border-secondary'></div>
        <div className='w-[14rem] h-[24rem] border-[0.5px] border-secondary'></div>
        <div className='w-[20rem] h-[24rem] border-[0.5px] border-secondary'></div>
        <div className='w-[14rem] h-[24rem] border-[0.5px] border-secondary'></div>
        {/* longlegs */}
        <div className='w-[10rem] h-[10rem] border-[0.5px] border-secondary'>
          <img src={longlegsImg} className="object-cover"></img>
        </div>
        <div className='w-[20rem] h-[24rem] border-[0.5px] border-secondary'></div>
        <div className='w-[22rem] h-[22rem] border-[0.5px] border-secondary'></div>
        <div className='w-[10rem] h-[10rem] border-[0.5px] border-secondary'></div>
      </div>
    </section>
  )
}

export default Work;