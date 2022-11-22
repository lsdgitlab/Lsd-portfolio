// import barba from '@barba/core';
// import barbaCss from '@barba/css';
import { gsap } from "gsap";
import {CSSRulePlugin}  from "gsap/CSSRulePlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {CSSPlugin} from "gsap/CSSPlugin";

// register the api for use
gsap.registerPlugin(ScrollTrigger, CSSPlugin, CSSRulePlugin);

// barba css is use to page transition with css
// barba.use(barbaCss);

// set time line for animate el one by one
let tlca = gsap.timeline();
tlca.fromTo('.articles-carousel', {
    opacity: 0,
    height: "100%",
    width:"100%",
    top: "0%",
    left: "0%",
    //markers: true,
  }, {
    opacity: 1,
    width: "100%",
    height: "100%",
    //markers: true,
    top: "100%",
    left: "0%",
    ease: "circ.out",
    scrollTrigger: {
        // height: "100%",
        width: "100%",
        height: "100%",
        opacity: 1,
        // trigger: '.feature-section', 
        start: "-=100",
        end: "+=1000", 
        scrub: 0.5,  
    }
});

// get element and convert obj into arr of obj * cool * :)
const horizontalSections = gsap.utils.toArray('.team-content .card');
// console.log("horizontalSections")
// console.log(horizontalSections)

// barba hook get page body and replace with other page wit animation of background color
// const body = document.querySelector('body');
// barba.hooks.before((data) => {
//   console.log(data.current.container.dataset.background);
//   let bg = data.current.container.dataset.background;
//   body.style.setProperty('--page-background', bg)
// });

         
// animating the header h1 text on load
var tl = gsap.timeline({defaults:{ease:"ShowMo.easeOut"}});
tl.from(".anim1", {y:"100%", rotation: 10, duration: 1.8,stagger: .6, opacity: 0}).to(".anim1", {y:"0%", duration: 1.8, rotation: 0, opacity:1 })
var tl = gsap.timeline({defaults:{ease:"ShowMo.easeOut"}});
tl.from(".anim2", {y:"100%", rotation: 10, duration: 1.8,stagger: .6, opacity: 0}).to(".anim2", {y:"0%", duration: 1.8, rotation: 0, opacity:1 })

// animation on scroll
// let container = document.getElementById('mainPeople');
// console.log(container)
// gsap.to(container, {
//   x: () => -(container.scrollWidth - document.documentElement.clientWidth) + "px",
//   ease: "none",
//   scrollTrigger: {
//     trigger: container,
//     start: "-=800",
//     // end: () => "+=" + container.offsetWidth,
//     scrub: true,
//     // pin: true,
//     anticipatePin: 1,
//     markers:true,
//     // pinSpacing: false 
//   }
// });

// // init Barba with gsap js
// barba.init({
//   transitions:[{
//     name: 'fade',
//     sync: true,
//     to:{
//       namespace:['fade']
//     },
//     leave() {},
//     enter() {}
//   },
// ]
// });