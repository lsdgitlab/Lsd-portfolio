import $ from "jquery";
import 'normalize.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import  '../css/sass/index.scss';
import lozad from 'lozad'
import {gotoId, main} from "./main";

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

$(window).on('scroll',function () {
  if ($(this).scrollTop() > 400) {
    $('#scrollToTop').fadeIn();
  } else {
    $('#scrollToTop').fadeOut();
  }
});

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
  })
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