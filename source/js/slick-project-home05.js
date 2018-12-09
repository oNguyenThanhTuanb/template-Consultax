$(document).ready(function(){
  "use strict";
  $(".js-slick-project-home05").not('.slick-initialized').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    nextArrow: $('.js-btn-next__project'),
    prevArrow: $('.js-btn-prev__project'),
  });
});
