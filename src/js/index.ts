import $ from "jquery";
import 'normalize.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import  '../css/sass/index.scss';
import lozad from 'lozad';
// var modernizr = require("modernizr");
// // .js
// // import "./modernizr";
// import "./dlmenu";
import {gotoId, playPause} from "./main";   // import the function from another file

import contentData  from "./showDate.json"; // iport the json obj from another json file
// import contentData  from "./showDateTest.json";
// console.log("contentData")
// console.log(contentData)

let bannerData = [];
// find the unique filter and it's count from the obj
let filterType = contentData.contentData.reduce(function(acc, curr){
  if(acc[curr.filter]){
    acc[curr.filter] == ++acc[curr.filter];
  }else{
    acc[curr.filter] = 1;
  }
  return acc;
},{});

// console.log("filterType")
// console.log(filterType)

// get the unique category from the obj
const uniqueCat = [...new Set(contentData.contentData.map(item => item.filter))]; 
// console.log("unique")
// console.log(uniqueCat)

// convert the obj to arr
let WithArray = Object.entries(filterType)
// console.log(WithArray)

//  rearage the data for beter usege
let newCateWithData = WithArray.forEach(function (item) {
  item.catdata = [];
  // console.log(item[0])
  // console.log(item[1])
  item.type= item[0];
  item.datalength= item[1];
  // if()
  // console.log(item.catdata.push({name:'test'}))
  for(let indivData of contentData.contentData){
    // console.log(indivData)
    if(indivData.filter  === item[0] ){
      item.catdata.push(indivData)
    }
  }
  // console.log(item.catdata)

  // item[0].push()
})

// console.log("newCateWithData")
// console.log(newCateWithData)
// console.log("filterType")
// console.log(WithArray)
// console.log([filterType])
// console.log(filterType)
// console.log(Object.entries(filterType))



// module for lazy loading of images and video , etc.
const observer = lozad();
observer.observe();


// reusable function with para and call api call for video play and stop 
function pauseAllVideo(videos) {
  // console.log("pauseAllVideo")
  videos.each(item=>{
      let videoEl = $(videos[item]).find('video').get()[0];
      let playBtnEl = $(videos[item]).find('.play-btn');
      let backDrop = $(videos[item]).find('.back-drop');
      videoEl.pause(); 
      playBtnEl.show();
    })
}
// $('#playPausfune')

// function playPause(){
//   console.log("click")
// }

// video play and stop fun
$(".playBtnFun").on('click', function () {
    let id = $(this).data("video-id");
    let VideoEl = $('#'+id).find('video').get()[0];
    let playBtnEl = $('#'+id).find('.play-btn');
    let backDrop = $('#'+id).find('.back-drop');
    playBtnEl.toggle();
    backDrop.toggle();
    playPause(VideoEl)
})



$(document).ready(function() {
  // console.log("blck");
  
  if ($('#bannerCarousel').length) {
    let bannerCarousel = $("#bannerCarousel").owlCarousel({
      margin: 20,
      items: 1,
      dots: false,
      nav: true,
      // center: true,
      stagePadding: 40,
      navText : ["<img src='./img/arrow.png'>","<img src='./img/arrow.png'>"],
      responsive : {
        1400 : {
          stagePadding: 200,
          margin: 60,
        }
      }
    })
    bannerCarousel.on('changed.owl.carousel', function(event) {
      var active = $("#bannerCarousel").find(".owl-item.active");
      let activeElIndex = event.relatedTarget.current()
      let elemnt = $(this).find('.owl-item')
      pauseAllVideo(elemnt)
      let playBtnEl = $(elemnt[activeElIndex]).find('.play-btn');
      playBtnEl.click()
    })
  };
  if ($('#filmsCarousel').length) {
    let filmsCarousel = $("#filmsCarousel").owlCarousel({
      margin:20,
      items: 3,
      dots:false,
      nav:true,
      stagePadding: 40,
      navText: ["<img src='./img/arrow.png'>","<img src='./img/arrow.png'>"],
      responsive : {
        1400 : {
          stagePadding: 200,
          margin: 60,
        }
      }
    })
  };
  if ($('#socialCarousel').length) {
    let socialCarousel = $("#socialCarousel").owlCarousel({
      margin:40,
      items: 2.8,
      dots:false,
      nav:true,
      // center:true,
      stagePadding: 200,
      navText: ["<img src='./img/arrow.png'>","<img src='./img/arrow.png'>"],
      autoplayTimeout: 5000,
      loop:true,
      smartSpeed: 2000,
      responsive : {
        1400 : {
          items: 3.8,
        }
      }
    })
  };
  if ($('#performanceCarousel').length) {
    let performanceCarousel = $("#performanceCarousel").owlCarousel({
      margin:40,
      items: 2.8,
      dots:false,
      nav:true,
      // center:true,
      stagePadding: 200,
      navText: ["<img src='./img/arrow.png'>","<img src='./img/arrow.png'>"],
      autoplayTimeout: 5000,
      loop:true,
      smartSpeed: 2000,
      responsive : {
        1400 : {
          items: 3.8,
        }
      }
    })
  };
  if ($('#uiUxCarousel').length) {
    let uiUxCarousel = $("#uiUxCarousel").owlCarousel({
      margin:20,
      items: 2,
      dots:false,
      nav:true,
      // center:true,
      stagePadding: 40,
      navText: ["<img src='./img/arrow.png'>","<img src='./img/arrow.png'>"],
      autoplayTimeout: 5000,
      // loop:true,
      smartSpeed: 2000,
      responsive : {
        1400 : {
          stagePadding: 200,
          margin: 60,
        }
      }

    })
  };
  if ($('#brandsCarousel').length) {
    let brandsCarousel = $("#brandsCarousel").owlCarousel({
      margin:20,
      items: 4,
      dots:false,
      nav:true,
      // center:true,
      stagePadding: 40,
      navText: ["<img src='./img/arrow.png'>","<img src='./img/arrow.png'>"],
      autoplayTimeout: 5000,
      // loop:true,
      smartSpeed: 2000,
      responsive : {
        1400 : {
          stagePadding: 200,
          margin: 60,
        }
      }
    })
  };
  if ($('#caseStudiesCarousel').length) {
    let caseStudiesCarousel = $("#caseStudiesCarousel").owlCarousel({
      margin:0,
      items: 1,
      dots:false,
      nav:true,
      center:true,
      stagePadding: 200,
      navText: ["<img src='./img/arrow.png'>","<img src='./img/arrow.png'>"],
      autoplayTimeout: 5000,
      loop:true,
      smartSpeed: 2000,
      responsive : {
        1400 : {
          items: 1.6,
        }
      }
    })
  };
});


let obj = {
  name:"Shubham",
  printD: function(){
    console.log(this)
  }
}

obj.printD()

// get js file from the below file to use
import "./page-animation/barba";
