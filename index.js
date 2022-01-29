// Static variables - That do not change while scrolling
var logo = $(".logo"), // Get the logo
 	 	logoHeight = logo.height(), // Get logo height
 	 	scrollTo = 420; // Animation until scrolled to this point

// Scroll function
$(window).on("scroll", function() {
  // Dynamic variables - That do change while scrolling
  var yPos = $(this).scrollTop(), // Get the scroll Y-position
  	  yPer = (yPos / scrollTo); // Calculate percenage of scroll

  // If percentage is over 100, set to 100
  if (yPer > 1) {
    yPer = 1;
  }
  // Dynamic variables for the elements
  var logoPos = ( -1*(yPer*50)+50); // Calculate position of logo (starting from 50%)

  var Hoffset = ( 0.01*(yPer*50)+45);

  // Change the top, left, transform and height of the logo
  logo.css({
    top: logoPos + "%",
    left: Hoffset + "%",
    transform: "translate3d(0,-" + logoPos + "%,0)",
  });
});
