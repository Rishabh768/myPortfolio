import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const lenis = new Lenis({
  smooth: true,
  gestureOrientation: 'both',
  smoothTouch: true,
  touchMultiplier: 1.5,
});
lenis.on("scroll", ScrollTrigger.update);


const tl=gsap.timeline({
  delay:1,
})





gsap.fromTo('nav',{scale:0},{scale:1,duration:.4,delay:2});
const links=document.querySelectorAll("nav ul li a");
 links.forEach((link)=>{
           link.addEventListener('click',(e)=>{
            e.preventDefault();
            const targetId=link.getAttribute('href');
             gsap.to(window,{scrollTo:{y:targetId},duration:1})
           })
           
 })

 document.querySelectorAll(".page").forEach((page) => {
  const header = page.querySelector(".header");
  if (header) {
    gsap.fromTo(
      header,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: page,
          start: "top 50%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }
});



function animateBoxes() {
  const isMobile = window.innerWidth <= 768;

  gsap.fromTo(".about-me", 
    { x: isMobile ? 0 : -200, y: isMobile ? -200 : 0, opacity: 0 },
    { x: 0, y: 0, opacity: 1, duration: 1, scrollTrigger: { trigger: "#about", start: "top 70%", toggleActions: "play none none reverse" } }
  );

  gsap.fromTo(".img-container", 
    { x: isMobile ? 0 : 200, y: isMobile ? 200 : 0, opacity: 0 },
    { x: 0, y: 0, opacity: 1, duration: 1, scrollTrigger: { trigger: "#about", start: "top 70%", toggleActions: "play none none reverse" } }
  );
}

animateBoxes();
window.addEventListener("resize", animateBoxes);

