$(document).ready(function() {
  
  var movementStrength = 50;
  var width = movementStrength / $(window).width();
  var height = movementStrength / $(".site-banner").height();
  $(".site-banner").mousemove(function(e){
    // var pageX = e.pageX - ($(window).width() / 2);
   var newvalueX = width * e.pageX * -1 + (width/1.5);
   var newvalueY = height * e.pageY * -1 + (height/1.5);
   console.log(e);
    $(".site-banner").css("background-position", newvalueX + "px  " + newvalueY + "px");
  });

  $(".site-banner").on("click", function() {
    window.location = $(this).find("a").attr("href"); 
    return false;
  });

});