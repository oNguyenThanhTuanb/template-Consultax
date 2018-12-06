$(document).ready(function() {
  "use strict";
  $(".js-slick-project-home01")
    .not(".slick-initialized")
    .slick({
      dots: false,
      infinite: true,
      speed: 600,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true,
      nextArrow: $(".js-btn-next__project"),
      prevArrow: $(".js-btn-prev__project")
    });
});
