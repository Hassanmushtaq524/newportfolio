/**
 * Images
 */
import longlegsCoverImg from "../assets/img/longlegs-coverimg.jpg";
import longlegsimg1 from "../assets/img/longlegs-img-1.jpg";
import thiswebsiteCoverImg from "../assets/img/thiswebsite-coverimg.jpg";
import thiswebsiteVid1 from "../assets/videos/thiswebsite-vid-1.mp4";
import thiswebsiteVid2 from "../assets/videos/thiswebsite-vid-2.mp4";
import animeforumCoverImg from "../assets/img/animeforum-coverimg.jpg";
import animeforumImg1 from "../assets/img/animeforum-img-1.jpg";
import animeforumImg2 from "../assets/img/animeforum-img-2.jpg";
import animeforumImg3 from "../assets/img/animeforum-img-3.jpg";
import animeforumImg4 from "../assets/img/animeforum-img-4.jpg";
import animeforumImg5 from "../assets/img/animeforum-img-5.jpg";
import zentryCoverImg from "../assets/img/zentry-coverimg.jpg";
import zentryVid1 from "../assets/videos/zentry-vid-1.mp4";
import zentryVid2 from "../assets/videos/zentry-vid-2.mp4";
import amanahCoverImg from "../assets/img/amanah-coverimg.jpg";
import amanahImg1 from "../assets/img/amanah-img-1.jpg";
import amanahImg2 from "../assets/img/amanah-img-2.jpg";
import amanahImg3 from "../assets/img/amanah-img-3.jpg";
import amanahImg4 from "../assets/img/amanah-img-4.jpg";
import amanahImg5 from "../assets/img/amanah-img-5.jpg";
import amanahImg6 from "../assets/img/amanah-img-6.jpg";
import amanahImg7 from "../assets/img/amanah-img-7.jpg";
import amanahImg8 from "../assets/img/amanah-img-8.jpg";
import amanahImg9 from "../assets/img/amanah-img-9.jpg";
import amanahImg10 from "../assets/img/amanah-img-10.jpg";
import amanahImg11 from "../assets/img/amanah-img-11.jpg";
import amanahImg12 from "../assets/img/amanah-img-12.jpg";
import mementoCoverImg from "../assets/img/memento-coverimg.jpg";
import mementoImg1 from "../assets/img/memento-img-1.jpg";
import mementoImg2 from "../assets/img/memento-img-2.jpg";


const workList = [
    {
      title: "THIS WEBSITE",
      coverImg: thiswebsiteCoverImg,
      layout: [
        { desc: "This website was 4 weeks in the making, and I utilized REACT, GSAP, and TAILWINDCSS to create a responsive, and clean UI. I initially designed the website in Figma, and focused a lot on micro animations."},
        { el: <a className="underline cursor-pointer" onClick={() => window.location.href = 'https://github.com/Hassanmushtaq524/newportfolio/'}>Source Code</a> },
        { vid: thiswebsiteVid1 },
        { desc: "This animation required a lot of planning, and initially did not work very well because of the difference in rotation of the two texts. I found that if you initially rotated the text -90deg, and then removed it on hover, it worked way better!"},
        { vid: thiswebsiteVid2 },
        { desc: "Another fun part to utilize GSAP on was the scroll trigger reel on the about page. I used the current scroll position and also gsap pinning to create a nice reel of me and my life as you scroll through FAQs"},
        { desc: "There are other micro animations I created using just tailwindCSS. For example, the icons and cards rotate -60deg on hover. It was also interesting to utilize javascript handlers, such as mousemove, to create a following cursor square"},
        { desc: "HAVE FUN EXPLORING OTHER PROJECTS!"},
      ]
    },
    {
      title: "UI/UX & FRONTEND: ANIMEFORUM!",
      coverImg: animeforumCoverImg,
      layout: [
        { desc: "As a part of my Google UX Design Professional Certificate, I did a UI/UX case study for an anime-centered social media application. I created an identity for the brand and also am currently developing the project using React.js, Express.js, Node.js and MongoDB."},
        { el: <a className="underline cursor-pointer" onClick={() => window.location.href = 'https://github.com/Hassanmushtaq524/animeforum/'}>Source Code</a> },
        { img: animeforumImg1 },
        { img: animeforumImg2 },
        { img: animeforumImg3 },
        { img: animeforumImg4 },
        { img: animeforumImg5 },
      ]
    },
    {
      title: "FRONTEND: ZENTRY REMAKE",
      coverImg: zentryCoverImg,
      layout: [
        { el: <a className="underline cursor-pointer" onClick={() => window.location.href = 'https://zentry-remake.netlify.app/'}>Website</a> },
        { el: <a className="underline cursor-pointer" onClick={() => window.location.href = 'https://github.com/HassanMushtaq524/zentry-remake/'}>Source Code</a> },
        { desc: "I noticed a website on Awwwards that caught my attention. It was a beautiful website for a game called 'Zentry'. It contained some interesting animations that I wanted to implement from scratch by myself to understand GSAP and TailwindCSS in-depth. "},
        { vid: zentryVid1 },
        { desc: "This effect of entering a video on the original website seemed complex at first. After trying to understand it, it was still complex. The key to creating this animation was three videos! 1 video to pop up during the hover, 1 for the background, and 1 to create the effect of entering the video by increasing the width to a 100%."},
        { vid: zentryVid2 },
        { desc: "This animation helped me understand pinning, and setting start/end times, and how scrubbing can be done to create an interesting 'entering' effect." },
        { desc: "Other simple micro-animations were a mix of react-use hooks, GSAP, and TailwindCSS. For instance, the navbar exitting and re-entering on scrolling up was done by capturing the current y-axis value of the scroll, to detect change in direction." },
        { desc: "Alot of the things I learned from this project were utilized in this website!" },
        { desc: "THANK YOU FOR YOUR TIME!" },
      ]
    },
    {
      title: "LAYOUT DESIGN: AMANAH OUTSIDERS",
      coverImg: amanahCoverImg,
      layout: [
        { desc: "I partnered with FRINGE22 to create a brand guideline book for the non-profit organization called Amanah Outsiders. I was handed brand assets and laid out the assets into a cohesive and informative brand guideline book for the organization."},
        { desc: "The main challenge in this process was working with the brand's many different patterns and logo variations. I also had to think about the typography sizes and create a system that would be visually appealing on, for instance, a website. The brand has this collage/cutout aesthetic that I reflected in how the brand guideline book is laid out. "},
        { desc: "Overall, this was a fun project that gave me a better understanding of type systems, layout grids, and color combinations. "},
        { img: amanahImg1 },
        { img: amanahImg2 },
        { img: amanahImg3 },
        { img: amanahImg4 },
        { img: amanahImg5 },
        { img: amanahImg6 },
        { img: amanahImg7 },
        { img: amanahImg8 },
        { img: amanahImg9 },
        { img: amanahImg10 },
        { img: amanahImg11 },
        { img: amanahImg12 }
      ]
    },
    {
      title: "MOVIE POSTER: MEMENTO",
      coverImg: mementoCoverImg,
      layout: [
        { desc: "Memento is one of my favorite Christopher Nolan movies because it runs backward in a way. The idea of time and polaroids play a huge role in the movie, so I wanted to reflect that through the design. The entire poster mimics the look of a Polaroid and the bleeding text is reminiscent of the marker the main character uses to note down people's characteristics. "},
        { desc: "I used mainly Photoshop and a color bleed action that I created myself. The image's texture brings out the feeling of the passage of time and a Polaroid." },
        { img: mementoImg1 },
        { img: mementoImg2 }
      ]
    },
    {
      title: "MOVIE POSTER: LONGLEGS",
      coverImg: longlegsCoverImg,
      layout: [
        { desc: "Longlegs' official branding is interesting to me. The sharp contrast between the bright red and deep darkness creates an interesting image that fits the movie. I wanted to continue the branding and changing it did not feel right in this case. "},
        { desc: "I used a basic Helvetica font and contrasting font sizes, similar to Swiss typographic ideas. The plastic wrap texture on top of the poster mimics the wrapping of evidence in crime scenes in the movie. " },
        { img: longlegsimg1 },
      ]
    }
  ]

export default workList;