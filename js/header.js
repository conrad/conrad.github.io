$(document).ready(function() {
  
  var movementStrength = 1100;
  var width = movementStrength / $(window).width();
  $(".site-banner").mousemove(function(e){
    // var pageX = e.pageX - ($(window).width() / 2);
    var newvalueX = width * e.pageX * -1;
    $(".site-banner").css("background-position", newvalueX+"px  "+"0px");
  });

  $(".site-banner").on("click", function() {
    window.location = $(this).find("a").attr("href"); 
    return false;
  });

});