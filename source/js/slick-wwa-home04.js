$(document).ready(function(){
  "use strict";
  $('.js-slick-wwa-home04').not('.slick-initialized').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    nextArrow: $('.js-btn-next__wwa'),
    prevArrow: $('.js-btn-prev__wwa'),
  });
});
