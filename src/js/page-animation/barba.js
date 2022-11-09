import barba from '@barba/core';
import barbaCss from '@barba/css';
import { gsap } from "gsap";
import {CSSRulePlugin}  from "gsap/CSSRulePlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {CSSPlugin} from "gsap/CSSPlugin";
gsap.registerPlugin(ScrollTrigger, CSSPlugin, CSSRulePlugin);
// gsap.registerPlugin(CSSPlugin, CSSRulePlugin)
// gsap.registerPlugin(SlowMo);
// gsap.registerPlugin(SplitText);
// console.log(TextPlugin)
// gsap.registerPlugin(SplitText);
// // // tell Barba to use the css plugin..
// gsap.utils.toArray('.banner-section').forEach((section, index) => {
//   const w = section.querySelector('.anim1');
//   const [x, xEnd] = (index % 2) ? ['100%', (w.scrollWidth - section.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
//   gsap.set(".anim1", {xPercent: 100})
//   gsap.fromTo(w, {  x  }, {
//     x: xEnd,
//     xPercent: -100,
//     scrollTrigger: { 
//       trigger: section, 
//       scrub: 0.5 
//     }
//   });
// });


barba.use(barbaCss);
// gsap.set(".anim1", {xPercent: 100})
// gsap.to(".anim1", {

//   xPercent: -100,
//   scrollTrigger: {
//     trigger:'.anim1',
//     //markers: true,
//     // start: "-=300",
//     // end: "200",
//     pinSpacing: false,
//     pin: false,
//     duration: 0.1,
//     // scrub: 1,

//     scrub: true,
//     start: "top bottom",
//     end: "bottom top",
//     // direction: 1,
//     // onUpdate: self => console.log("direction:", self.direction)
//   }, // start the animation when ".box" enters the viewport (once)
//   x: 600
// });
// gsap.set(".anim2", {xPercent: 100})
// gsap.to(".anim2", {

//   // xPercent: -100,
//   scrollTrigger: {
//     trigger:'.anim1',
//     //markers: true,
//     // start: "-=300",
//     // end: "200",
//     pinSpacing: false,
//     pin: false,
//     duration: 0.1,
//     // scrub: 1,

//     scrub: true,
//     start: "top bottom",
//     end: "bottom top",
//     // direction: 1,
//     // onUpdate: self => console.log("direction:", self.direction)
//   }, // start the animation when ".box" enters the viewport (once)
//   x: 400
// });
// var frame_count  = 20,
//     offset_value = 100;

// gsap.to(".viewer", {
//   backgroundPosition: (-offset_value * frame_count * 2) + "px 50%",
//   ease: "steps(" + frame_count + ")", // use a stepped ease for the sprite sheet
//   scrollTrigger: {
//     trigger: ".scene",
//     start: "top top",
//     end: "+=" + (frame_count * offset_value),
//     pin: true,
//     scrub: true
//   }
// });
// gsap.set(".articles-carousel", {xPercent: 100})
// gsap.to(".articles-carousel", {

//   // xPercent: -90,
//   scrollTrigger: {
//     trigger:'.articles-carousel',
//     //markers: true,
//     // start: "-=300",
//     // end: "200",
//     pinSpacing: false,
//     pin: false,
//     duration: 0.1,
//     // scrub: 1,
//     scaleX: 1,
//     scrub: true,
//     start: "top bottom",
//     end: "bottom top",
//     scale: 2,
//     xPercent: -50,
//     yPercent: -50,
//     // direction: 1,
//     onUpdate: self => console.log(".articles-carousel:", self.direction)
//   }, // start the animation when ".box" enters the viewport (once)
//   // x: 1000
// });

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

// gsap.set(".team-content", {xPercent: 100})
// gsap.to(".team-content", {

//   xPercent: -100,
//   scrollTrigger: {
//     trigger:'.anim1',
//     markers: true,
//     // start: "-=300",
//     // end: "200",
//     pinSpacing: false,
//     pin: false,
//     duration: 0.1,
//     // scrub: 1,

//     scrub: true,
//     start: "top bottom",
//     end: "bottom top",
//     // direction: 1,
//     // onUpdate: self => console.log("direction:", self.direction)
//   }, // start the animation when ".box" enters the viewport (once)
//   x: 600
// });
const horizontalSections = gsap.utils.toArray('.team-content');
console.log("horizontalSections")
console.log(horizontalSections)
const body = document.querySelector('body');
barba.hooks.before((data) => {
  console.log(data.current.container.dataset.background);
  let bg = data.current.container.dataset.background;
  body.style.setProperty('--page-background', bg)
});


var rule = CSSRulePlugin.getRule("span:after");
console.log("rule")             
console.log(rule)             
// 6 Show Timeline
var tl = gsap.timeline({defaults:{ease:"ShowMo.easeOut"}});
tl.from(".anim1", {y:"100%", rotation: 10, duration: 1.8,stagger: .6, opacity: 0}).to(".anim1", {y:"0%", duration: 1.8, rotation: 0, opacity:1 })
var tl = gsap.timeline({defaults:{ease:"ShowMo.easeOut"}});
tl.from(".anim2", {y:"100%", rotation: 10, duration: 1.8,stagger: .6, opacity: 0}).to(".anim2", {y:"0%", duration: 1.8, rotation: 0, opacity:1 })

// tl.to(".anim1", {duration: 1.8, cssRule: {scaleY: 0}}, "-=2.2");
// .to(".anim1", {y:"0%", duration:1, rotation: 0,stagger:1 });
  // gsap.from(".anim1", {opacity: 0, duration:1, y: -50, stagger:0.6})
  // gsap.to(rule, {cssRule: {scaleY:0}, duration: 1})
  // .from("aside", {backgroundPosition: '200px 0px', opacity: 0}, "-=1.5")
  // .from("img", {y:30, opacity: 0}, "-=.5")

// 7 Show Click reverse
// document.getElementById('cta').addEventListener('click', () => {
//     console.log('click')
//     tl.reversed() ? tl.play() : tl.reverse();
// })

// const childSplit = new SplitText("h1", {
//   type: "lines",
//   linesClass: "split-child"
// });
// const parentSplit = new SplitText("h1", {
//   // type: "lines",
//   linesClass: "split-parent"
// });

// gsap.from(childSplit.lines, {
//   duration: 1.5,
//   yPercent: 100,
//   ease: "power4",
//   stagger: 0.1
// });

// gsap.from(".line-1", {
//   scrollTrigger: {
//     trigger: ".line-1",
//     scrub: true,
//     start: "top bottom",
//     end: "top top"
//   },
//   scaleX: 0,
//   transformOrigin: "left center", 
//   ease: "none"
// });

// const tlPe = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".team-content",
//     scrub: true,
//     pin: true,
//     start: "50% 50%",
//     end: "+=200%"
//   }
// }).from(".card", {
//   scale: 0.5, 
//   ease: "power4"
// })

// let container = document.getElementById('mainPeople');

// gsap.to(container, {
//             x: () => -(container.scrollWidth - document.documentElement.clientWidth) + "px",
//             ease: "none",
//             scrollTrigger: {
//                 trigger: container,
//                 start: "top top",
//                 end: () => "+=" + container.offsetWidth,
//                 scrub: true,
//                 pin: true,
//                 anticipatePin: 1
//             }

//         });

// .from(".line-2", {
//   scaleX:0,
//   ease:"none",
//   transformOrigin:"left top"
// }, 0)
// // init Barba
barba.init({
  transitions:[{
    name: 'fade',
    sync: true,
    to:{
      namespace:['fade']
    },
    leave() {},
    enter() {}
   
  },
//   {
//     name: 'clip',
//     sync: true,
//     to: {
//         namespace: ['clip']
//     },
//     leave() {},
//     enter() {}
// }
]
});
// //   {
// //   transitions: [{
// //     name: 'index',
// //     once: () => {
// //       console.log('once');
// //     },
// //     beforeLeave: () => {
// //       console.log('This message will be displayed in the console!');
// //     },
// //     beforeOnce(){
// //       console.log('beforeOnce');
// //     },
// //     afterOnce(){
// //       console.log('afterOnce');
// //     }
// //   },
// //   {

// //   {
// //     name: 'cover-page',
// //     to:{
// //       namespace:['cover-page']
// //     },
// //     leave() {},
// //     enter() {}
   
// //   }, {
// //     name: 'with-cover',
// //     to: {
// //         namespace: ['with-cover']
// //     },
// //     leave() {},
// //     enter() {}
// // }
// // ]
// // }
// );