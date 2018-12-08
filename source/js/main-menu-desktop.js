$(document).ready(function() {
  "use strict";
  $("ul.navi-level-1 li").on("mouseenter", function() {
    $(this)
      .children("ul.navi-level-2")
      .addClass("open-navi-2 animated fadeInUp");
  });
  $("ul.navi-level-1 li").on("mouseleave", function() {
    $(this)
      .children("ul.navi-level-2")
      .removeClass("open-navi-2 animated fadeInUp");
  });
  $("ul.navi-level-2 li").on("mouseenter", function() {
    $(this).addClass("active");
    $(this)
      .children("ul.navi-level-3")
      .addClass("open-navi-3 animated fadeInUp");
  });
  $("ul.navi-level-2 li").on("mouseleave", function() {
    $(this)
      .children("ul.navi-level-3")
      .removeClass("open-navi-3 animated fadeInUp");
    $(this).removeClass("active");
  });

  $(".btn-search-navi").on("click", function() {
    $(".search-popup").toggleClass("open-search-input animated fadeInUp");
    $(".btn-search-navi .fa-search").toggleClass("fa-remove");
    $(".btn-search-navi").toggleClass("active");
    return false;
  });
});
