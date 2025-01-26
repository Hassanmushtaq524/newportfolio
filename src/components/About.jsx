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
    <div id="about" className="relative h-dvh w-screen bg-primary flex flex-col overflow-x-hidden">
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

        {/* MAIN */}
        <section className="main h-fit w-full pt-32 pe-28 p-[24px] flex flex-col lg:flex-row gap-24 justify-between">
          {/* img */}
          <div className="w-full h-[35rem] lg:size-[35rem] border-[0.5px] border-secondary overflow-hidden">
          </div>
          {/* right content */}
          <div className="flex flex-col gap-24 md:gap-8 size-fit text-end">
            {/* top stuff */}
            <div>
              <h3 className="sub-heading font-bold text-secondary mb-2">HELLO!</h3>
              <p className="font-xs text-secondary font-thin">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, 
                  ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
            </div>
            {/* Skills */}
            <div className="flex flex-col">
              <h3 className="sub-heading font-bold text-secondary mb-2">SKILLS</h3>
              <div className="h-fit flex flex-wrap justify-end gap-4 items-star size-full">
                  {skills.map((x, i) => (
                    <div className="size-28 p-4 gap-4 bg-secondary text-primary flex flex-col items-center justify-between duration-700 hover:-rotate-[60deg]">
                      <h3 className="font-bold text-sm">{x.title}</h3>
                      <p className="font-thin text-xs">{x.desc}</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>


        {/* HOBBIES / INTERESTS */}
        <section className="hobbies h-fit pe-28 p-24 md:p-4 md:pe-28 flex flex-col items-end md:flex-row md:justify-end md:items-start gap-24 md:gap-8 text-end">
          <div className="size-fit gap-4 text-secondary flex flex-col items-end justify-between">
            <h3 className="font-bold sub-heading">FAV PLACES</h3>
            <p className="font-thin text-xs">New York City</p>
            <p className="font-thin text-xs"></p>
            <p className="font-thin text-xs"></p>
            <p className="font-thin text-xs"></p>
            <p className="font-thin text-xs"></p>
          </div>
          <div className="size-fit gap-4 text-secondary flex flex-col items-end justify-between">
            <h3 className="font-bold sub-heading">FAV ANIMES</h3>
            <p className="font-thin text-xs">Naruto</p>
            <p className="font-thin text-xs">Jujutsu Kaisen</p>
            <p className="font-thin text-xs">Hyouka</p>
            <p className="font-thin text-xs">Demon Slayer</p>
            <p className="font-thin text-xs">Attack on titan</p>
          </div>
          <div className="size-fit gap-4 text-secondary flex flex-col items-end justify-between">
            <h3 className="font-bold sub-heading">HOBBIES</h3>
            <p className="font-thin text-xs">Designing Movie Posters</p>
            <p className="font-thin text-xs">Gaming ~ Valorant/CS2</p>
            <p className="font-thin text-xs">Watching Animes</p>
            <p className="font-thin text-xs">Drawing</p>
          </div>
        </section>
    </div>
  )
}

export default About;