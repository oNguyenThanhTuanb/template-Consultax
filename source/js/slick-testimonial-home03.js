$(document).ready(function(){
  "use strict";
  $('.js-slick-testimonial-thumb-home03').not('.slick-initialized').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    nextArrow: $('.js-btn-next__testimonial'),
    prevArrow: $('.js-btn-prev__testimonial'),
    asNavFor: '.js-slick-testimonial-content-home03'
  });
  $('.js-slick-testimonial-content-home03').not('.slick-initialized').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.js-slick-testimonial-thumb-home03',
    dots: true,
    centerMode: false,
    focusOnSelect: true,
    dots: false,
    arrows: false,
    fade: true,
  });
});
