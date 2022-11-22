import $ from "jquery";
import 'normalize.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import  '../css/sass/index.scss';
import lozad from 'lozad';

import {gotoId, playPause} from "./main";   // import the function from another file

import contentData  from "./showDate.json"; // iport the json obj from another json file
// import contentData  from "./showDateTest.json";
console.log("contentData")
console.log(contentData)

// contentData.contentData.forEach(element => {
//   element.isPriority = true;
//   element.prioritySq = 1;
//   element.toString()
// });
// console.log("contentData-------")
// console.log(JSON.stringify(contentData.contentData))
// interface Person {
//   imageThumb: string; 
//   imageBig: string; 
//   contentTitle: string; 
//   contentSubtitle: string; 
//   type: string; 
//   company: string; 
//   filter: string; 
//   size: number[]; 
// }
let bannerData = [];
// let bannerData : { 
//   imageThumb: string, 
//   imageBig: string,
//   contentTitle: string,
//   contentSubtitle: string, 
//   type: string, 
//   company: string, 
//   filter: string, 
//   size: number[] } [] ;
// bannerData = contentData.contentData.filter((indivData)=> {
//   console.log(indivData.filter)
//   // if(indivData. 'Animated-Videos'){

//   // }
// })

// bannerData = contentData.contentData.reduce(getCompany, 0)
// let unique = [...new Set(contentData.contentData.filter)];

// console.log(unique)
// function onlyUnique(value, index, self) {
//   console.log("value")
//   console.log(value.company)
//   console.log(index)
//   console.log(self)
//   // return self.indexOf(value.company) === s;
// }

// // usage example:
// var a = ['a', 1, 'a', 2, '1'];
// var unique = contentData.contentData.filter(onlyUnique);

// console.log(unique); 

let filterType = contentData.contentData.reduce(function(acc, curr){
  if(acc[curr.filter]){
    acc[curr.filter] == ++acc[curr.filter];
  }else{
    acc[curr.filter] = 1;
  }
  return acc;
},{});


const uniqueCat = [...new Set(contentData.contentData.map(item => item.filter))]; 
console.log("unique")
console.log(uniqueCat)

let WithArray = Object.entries(filterType)
console.log(WithArray)
let newCateWithData = WithArray.forEach(function (item) {
  item.catdata = [];
  console.log(item[0])
  console.log(item[1])
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

console.log("newCateWithData")
console.log(newCateWithData)
console.log("filterType")
console.log(WithArray)
// console.log([filterType])
// console.log(filterType)
// console.log(Object.entries(filterType))




const observer = lozad();
observer.observe();

$('.gotoSection').on( "click", function(){
  let id = $(this).data("to-section");
  gotoId(id)
})
$(function () {
  $(".info-box p").slice(0, 2).show();
  $(".readMore").on('click', function (e) {
      e.preventDefault();
      $(".info-box p:hidden").slice(0, 4).slideDown();
      if ($(".info-box p:hidden").length == 0) {
        // $("#load").fadeOut('slow');
        $(this).hide()
      }
      // console.log($(this))
      // $(this).hide()
      // $('html,body').animate({
      //     scrollTop: $(this).offset().top
      // }, 1500);
  });
});

$('#scrollToTop').on('click', function () {
  $('body,html').animate({
      scrollTop: 0,
      duration:10000,
  }, 600);
  return false;
});
function pauseAllVideo(videos) {
  console.log("pauseAllVideo")
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
$(".playBtnFun").on('click', function () {
    let id = $(this).data("video-id");
    let VideoEl = $('#'+id).find('video').get()[0];
    let playBtnEl = $('#'+id).find('.play-btn');
    let backDrop = $('#'+id).find('.back-drop');
    playBtnEl.toggle();
    backDrop.toggle();
    playPause(VideoEl)
})


$(window).on('scroll',function () {
  if ($(this).scrollTop() > 400) {
    $('#scrollToTop').fadeIn();
  } else {
    $('#scrollToTop').fadeOut();
  }
});
$(document).ready(function() {
  console.log("blck");
  
  if ($('#bannerCarousel').length) {
    let bannerCarousel = $("#bannerCarousel").owlCarousel({
      margin: 60,
      items: 1,
      dots: false,
      nav: true,
      // center: true,
      stagePadding: 200,
      navText : ["<img src='./../img/arrow.png'>","<img src='./../img/arrow.png'>"],
      // autoplayTimeout: 5000,
      // loop:true,
      // smartSpeed: 2000,
      // afterAction : callback,
    })
    bannerCarousel.on('changed.owl.carousel', function(event) {
      var active = $("#bannerCarousel").find(".owl-item.active");
      let activeElIndex = event.relatedTarget.current()
      // console.log(this)
      // console.log("$(this).find('.owl-item.active').get()[0]")
      // console.log($(this).find('.owl-item.active').get()[0])

      let elemnt = $(this).find('.owl-item')
      // console.log("elemnt[activeElIndex]")
      // console.log(elemnt[activeElIndex])
      
      pauseAllVideo(elemnt)
      let playBtnEl = $(elemnt[activeElIndex]).find('.play-btn');
      playBtnEl.click()
      // console.log(elemnt)
      // elemnt.each(item=>{
      //   console.log(elemnt[item])
      //   console.log(event.relatedTarget.current())
      //   // console.log(elemnt[item].find('.active').get()[0])
      //   // console.log(this)
      // })
    })
    
    // function callback(event) {
    //   console.log("clcik")
    //   console.log(event)
    //   console.log(this)
    //   console.log($(this))
    //   console.log($(this).find('.owl-item.active video').get()[0])
    // }
  };
  if ($('#filmsCarousel').length) {
    let filmsCarousel = $("#filmsCarousel").owlCarousel({
      margin:30,
      items: 3,
      dots:false,
      nav:true,
      stagePadding: 200,
      navText: ["<img src='./../img/arrow.png'>","<img src='./../img/arrow.png'>"],
      // autoplayTimeout: 5000,
      // loop:true,
      // smartSpeed: 2000,
    })
  };
  if ($('#socialCarousel').length) {
    let socialCarousel = $("#socialCarousel").owlCarousel({
      margin:40,
      items: 3.8,
      dots:false,
      nav:true,
      // center:true,
      stagePadding: 200,
      navText: ["<img src='./../img/arrow.png'>","<img src='./../img/arrow.png'>"],
      autoplayTimeout: 5000,
      loop:true,
      smartSpeed: 2000,
    })
  };
  if ($('#performanceCarousel').length) {
    let performanceCarousel = $("#performanceCarousel").owlCarousel({
      margin:40,
      items: 3.8,
      dots:false,
      nav:true,
      // center:true,
      stagePadding: 200,
      navText: ["<img src='./../img/arrow.png'>","<img src='./../img/arrow.png'>"],
      autoplayTimeout: 5000,
      loop:true,
      smartSpeed: 2000,
    })
  };
  if ($('#uiUxCarousel').length) {
    let uiUxCarousel = $("#uiUxCarousel").owlCarousel({
      margin:40,
      items: 2,
      dots:false,
      nav:true,
      // center:true,
      stagePadding: 200,
      navText: ["<img src='./../img/arrow.png'>","<img src='./../img/arrow.png'>"],
      autoplayTimeout: 5000,
      // loop:true,
      smartSpeed: 2000,
    })
  };
  if ($('#brandsCarousel').length) {
    let brandsCarousel = $("#brandsCarousel").owlCarousel({
      margin:40,
      items: 4,
      dots:false,
      nav:true,
      // center:true,
      stagePadding: 200,
      navText: ["<img src='./../img/arrow.png'>","<img src='./../img/arrow.png'>"],
      autoplayTimeout: 5000,
      // loop:true,
      smartSpeed: 2000,
    })
  };
  if ($('#caseStudiesCarousel').length) {
    let caseStudiesCarousel = $("#caseStudiesCarousel").owlCarousel({
      margin:0,
      items: 1.6,
      dots:false,
      nav:true,
      center:true,
      stagePadding: 200,
      navText: ["<img src='./../img/arrow.png'>","<img src='./../img/arrow.png'>"],
      autoplayTimeout: 5000,
      loop:true,
      smartSpeed: 2000,
    })
  };
});
import "./page-animation/barba";