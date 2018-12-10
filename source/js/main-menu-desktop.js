$(document).ready(function() {
  "use strict";

  $(document).on('mouseenter', 'ul.navi-level-1 li', function(){ 
    $(this)
      .children("ul.navi-level-2")
      .addClass("open-navi-2 animated fadeInUp");
  }); 

  $(document).on('mouseleave', 'ul.navi-level-1 li', function(){ 
    $(this)
      .children("ul.navi-level-2")
      .removeClass("open-navi-2 animated fadeInUp");
  }); 

  $(document).on('mouseenter', 'ul.navi-level-2 li', function(){ 
    $(this)
      .children("ul.navi-level-3")
      .addClass("open-navi-3 animated fadeInUp");
  });

  $(document).on('mouseleave', 'ul.navi-level-2 li', function(){ 
    $(this)
      .children("ul.navi-level-3")
      .removeClass("open-navi-3 animated fadeInUp");
  });

  $(".btn-search-navi").on("click", function() {
    $(".search-popup").toggleClass("open-search-input animated fadeInUp");
    $(".btn-search-navi .fa-search").toggleClass("fa-remove");
    $(".btn-search-navi").toggleClass("active");
    return false;
  });
});
