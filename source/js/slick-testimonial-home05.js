$(document).ready(function(){
  "use strict";
  $(".js-slick-testimonial-home05").not('.slick-initialized').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    nextArrow: $('.js-btn-next__testimonial'),
    prevArrow: $('.js-btn-prev__testimonial'),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

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
