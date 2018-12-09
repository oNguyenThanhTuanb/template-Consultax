$(document).ready(function(){
  "use strict";
  $(".js-slick-testimonial-home08").not('.slick-initialized').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    fade: true,
    nextArrow: $('.js-btn-next__testimonial'),
    prevArrow: $('.js-btn-prev__testimonial'),
  });
});
