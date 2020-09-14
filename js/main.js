$(window).on("load", function() {
  $(".loader-wrapper").fadeOut("slow");
});
$(document).ready(function() {
  $(".navbar-toggler").on("click", function() {
    $(this).toggleClass("menu-open");
  });

  new WOW().init();
});
