$(document).ready(function() {
  "use strict";
  $(".js-footer02__slider-address01")
    .not(".slick-initialized")
    .slick({
      dots: false,
      infinite: true,
      speed: 600,
      slidesToShow: 2,
      // nextArrow: $(".js-btn-next__address"),
      // prevArrow: $(".js-btn-prev__address")
    });
});
