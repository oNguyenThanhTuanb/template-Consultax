$(document).ready(function(){
  "use strict";
  $('.js-slick-project-main-home07').not('.slick-initialized').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: $('.js-btn-next__project'),
    prevArrow: $('.js-btn-prev__project'),
    fade: true,
    asNavFor: '.js-slick-project-thumbs-home07'
  });
  $('.js-slick-project-thumbs-home07').not('.slick-initialized').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.js-slick-project-main-home07',
    dots: true,
    centerMode: false,
    focusOnSelect: true,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]

  });
});
