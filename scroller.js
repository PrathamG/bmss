var yourNavigation = $("#navnav");
var enquiry = $("#enquiry")
stickyDiv = "sticky";
$(window).scroll(function() {
  console.log($(this).scrollTop());
  if( $(this).scrollTop() > 136 ) {
    yourNavigation.addClass(stickyDiv);
    // document.getElementById("enquiry").style.position = "fixed";
    enquiry.addClass("stickye");

  } else {
    yourNavigation.removeClass(stickyDiv);
    enquiry.removeClass("stickye");
  }
});