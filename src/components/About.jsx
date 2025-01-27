import React from 'react'
import linkedInIcon from '../assets/img/linkedin.svg';
import githubIcon from '../assets/img/github.svg';

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




const About = () => {
  
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
        <section id='main' className='h-fit md:h-full
                                  flex flex-col
                                  md:grid md:grid-rows-6 md:grid-cols-6 gap-8 pt-36 p-[24px] pe-28'>
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
        <section id="skills" className="h-fit w-screen p-[24px] pe-28 text-end">
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
    </div>
  )
}

export default About;