import React, { useEffect, useRef, useState } from 'react';
import linkedInIcon from "../assets/img/linkedin.svg";
import githubIcon from "../assets/img/github.svg";
import gsap from 'gsap';
/**
 * Images
 */
import longlegsImg from "../assets/img/work-img-longlegs.jpg";
import thiswebsiteCoverImg from "../assets/img/thiswebsite-coverimg.png";


/**
 * TODO: probably move this to another file
 */
const workList = [
  {
    title: "THIS WEBSITE",
    coverImg: thiswebsiteCoverImg,
    layout: [
      { desc: "Longlegs' official branding is interesting to me. The sharp contrast between the bright red and deep darkness creates an interesting image that fits the movie. I wanted to continue the branding and changing it did not feel right in this case. "},
      { desc: "I used a basic Helvetica font and contrasting font sizes, similar to Swiss typographic ideas. The plastic wrap texture on top of the poster mimics the wrapping of evidence in crime scenes in the movie."},
      { img: longlegsImg },
      { img: longlegsImg },
      { img: longlegsImg },
    ]
  },
  {
    title: "UI/UX & FRONTEND: ANIMEFORUM!",
    coverImg: longlegsImg,
    layout: [
      { desc: "Longlegs' official branding is interesting to me. The sharp contrast between the bright red and deep darkness creates an interesting image that fits the movie. I wanted to continue the branding and changing it did not feel right in this case. "},
      { desc: "I used a basic Helvetica font and contrasting font sizes, similar to Swiss typographic ideas. The plastic wrap texture on top of the poster mimics the wrapping of evidence in crime scenes in the movie."},
      { img: longlegsImg },
      { img: longlegsImg },
      { img: longlegsImg },
    ]
  },
  {
    title: "FRONTEND: ZENTRY REMAKE",
    coverImg: longlegsImg,
    layout: [
      { desc: "Longlegs' official branding is interesting to me. The sharp contrast between the bright red and deep darkness creates an interesting image that fits the movie. I wanted to continue the branding and changing it did not feel right in this case. "},
      { desc: "I used a basic Helvetica font and contrasting font sizes, similar to Swiss typographic ideas. The plastic wrap texture on top of the poster mimics the wrapping of evidence in crime scenes in the movie."},
      { img: longlegsImg },
      { img: longlegsImg },
      { img: longlegsImg },
    ]
  },
  {
    title: "LAYOUT DESIGN: AMANAH OUTSIDERS",
    coverImg: longlegsImg,
    layout: [
      { desc: "Longlegs' official branding is interesting to me. The sharp contrast between the bright red and deep darkness creates an interesting image that fits the movie. I wanted to continue the branding and changing it did not feel right in this case. "},
      { desc: "I used a basic Helvetica font and contrasting font sizes, similar to Swiss typographic ideas. The plastic wrap texture on top of the poster mimics the wrapping of evidence in crime scenes in the movie."},
      { img: longlegsImg },
      { img: longlegsImg },
      { img: longlegsImg },
    ]
  },
  {
    title: "MOVIE POSTER: YI YI",
    coverImg: longlegsImg,
    layout: [
      { desc: "Longlegs' official branding is interesting to me. The sharp contrast between the bright red and deep darkness creates an interesting image that fits the movie. I wanted to continue the branding and changing it did not feel right in this case. "},
      { desc: "I used a basic Helvetica font and contrasting font sizes, similar to Swiss typographic ideas. The plastic wrap texture on top of the poster mimics the wrapping of evidence in crime scenes in the movie."},
      { img: longlegsImg },
      { img: longlegsImg },
      { img: longlegsImg },
    ]
  },
  {
    title: "MOVIE POSTER: LONGLEGS",
    coverImg: longlegsImg,
    layout: [
      { desc: "Longlegs' official branding is interesting to me. The sharp contrast between the bright red and deep darkness creates an interesting image that fits the movie. I wanted to continue the branding and changing it did not feel right in this case. "},
      { desc: "I used a basic Helvetica font and contrasting font sizes, similar to Swiss typographic ideas. The plastic wrap texture on top of the poster mimics the wrapping of evidence in crime scenes in the movie."},
      { img: longlegsImg },
    ]
  },
  {
    title: "FRONTEND DESIGN: JOJI WEBSITE REDESIGN",
    coverImg: longlegsImg,
    layout: [
      { desc: "Longlegs' official branding is interesting to me. The sharp contrast between the bright red and deep darkness creates an interesting image that fits the movie. I wanted to continue the branding and changing it did not feel right in this case. "},
      { desc: "I used a basic Helvetica font and contrasting font sizes, similar to Swiss typographic ideas. The plastic wrap texture on top of the poster mimics the wrapping of evidence in crime scenes in the movie."},
      { img: longlegsImg },
      { img: longlegsImg },
      { img: longlegsImg },
    ]
  },
  
]





/**
 * @returns Work component
 */
const Work = ({ setCursorText, ...rest }) => {
  const [ selected, setSelected ] = useState(false);
  const [ selectedIdx, setSelectedIdx ] = useState();
  const overlayRef = useRef();
  

  useEffect(() => {
    if (!overlayRef.current) return;

    gsap.from(overlayRef.current, {
      opacity: 0,
      duration: 1
    })

  }, [selected])


  const handleOverlayClick = (e) => {
    setSelected(false); 
    setSelectedIdx();
  }



  return (
    <section id="work" className="relative h-dvh w-screen bg-primary flex flex-col items-center justify-center overflow-x-hidden">
      {/* top left text */}
      <h1 className="absolute top-[24px] left-[24px] font-black display text-secondary w-80 sm:w-fit">
        WORK
      </h1>
      {/* top right stuff */}
      <div className="fixed z-50 top-[24px] right-[24px] size-fit flex flex-col items-end md:flex-row gap-4">
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
        {workList.map((x, i) => {
          return (
            <div className={`border-[0.5px] border-secondary overflow-hidden size-[24rem]`} key={i}
                 onMouseEnter={() => setCursorText(x.title)}
                 onMouseLeave={() => setCursorText(null)}
                 onClick={() => {setSelected(true); setSelectedIdx(i);}}>
              <img src={x.coverImg} className="object-cover size-full"/>
            </div>
          );
        })}
      </div>
      { selected && 
        <div ref={overlayRef} className="absolute top-0 left-0 size-full backdrop-blur-lg flex-center text-secondary" onClick={handleOverlayClick}>
          <div className="size-[50rem] bg-primary border-secondary border-[0.5px] text-start p-4 gap-16 overflow-scroll scrollbar-hidden">
            <h2 className="font-bold text-lg">{workList[selectedIdx].title}</h2>
            {workList[selectedIdx].layout.map((x, i) => {
                return (x.hasOwnProperty('desc')) ?
                  <div key={i} className='text-sm font-thin mt-16'>
                    {x.desc}
                  </div>
                  :
                  <div key={i} className='overflow-hidden size-[20rem] border-[0.5px] border-secondary mt-16'>
                    <img src={x.img} className="object-cover w-full h-full"/>
                  </div>
            })}
          </div>
        </div>
      }
    </section>
  )
}

export default Work;