/**
 * Images
 */
import longlegsImg from "../assets/img/work-img-longlegs.jpg";
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
import coffeeologyCoverImg from "../assets/img/coffeeology-coverimg.jpg";




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
        { desc: ""},
        { vid: zentryVid1 },
        { desc: ""},
        { vid: zentryVid2 },
      ]
    },
    {
      title: "FRONTEND DESIGN: JOJI WEBSITE REDESIGN",
      coverImg: null,
      layout: [
        { desc: ""},
        { img: null },
      ]
    },
    {
      title: "LAYOUT DESIGN: AMANAH OUTSIDERS",
      coverImg: amanahCoverImg,
      layout: [
        { desc: ""},
        { img: null },
      ]
    },
    {
      title: "RESEARCH: TRAFFIC MODELING",
      coverImg: null,
      layout: [
        { desc: ""},
        { img: null },
      ]
    },
    {
      title: "BRANDING: COFFEEOLOGY",
      coverImg: coffeeologyCoverImg,
      layout: [
        { desc: ""},
        { img: null },
      ]
    },
    {
      title: "MOVIE POSTER: LONGLEGS",
      coverImg: longlegsImg,
      layout: [
        { desc: ""},
        { img: null },
      ]
    },
    {
      title: "MOVIE POSTER: YI YI",
      coverImg: longlegsImg,
      layout: [
        { desc: ""},
        { img: null },
      ]
    },
    {
      title: "TSHIRT DESIGNS: PERSONAL",
      coverImg: longlegsImg,
      layout: [
        { desc: ""},
        { img: null },
      ]
    }
  ]

export default workList;