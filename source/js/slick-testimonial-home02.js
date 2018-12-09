
$(document).ready(function(){
  "use strict";
  $(".js-slick-testimonial-home02").not('.slick-initialized').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    customPaging : function(slider, i) {
      var current = $(slider.$slides[i])
      var thumb = $(current).find('.list-item').data('thumb');
      return '<a><img src="'+thumb+'"></a>';
    },
  });
});
