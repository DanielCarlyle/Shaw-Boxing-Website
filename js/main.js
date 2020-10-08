$(document).ready(function () {

	$("#portfolio-contant-active").mixItUp();

	$("#testimonial-slider").owlCarousel({
		paginationSpeed: 500,
		singleItem: true,
		autoPlay: 3000,
	});


	$("#clients-logo").owlCarousel({
		autoPlay: 3000,
		items: 5,
		itemsDesktop: [1199, 5],
		itemsDesktopSmall: [979, 5],
	});

	$("#works-logo").owlCarousel({
		autoPlay: 3000,
		items: 5,
		itemsDesktop: [1199, 5],
		itemsDesktopSmall: [979, 5],
	});


	// google map
	var map;
	function initMap() {
		map = new google.maps.Map(document.getElementById('map'), {
			center: { lat: -34.397, lng: 150.644 },
			zoom: 8
		});
	}


	// Counter
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});


	// ===== Scroll to Top ==== 
	$(window).scroll(function () {
		if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
			$('#return-to-top').fadeIn(200);    // Fade in the arrow
		} else {
			$('#return-to-top').fadeOut(200);   // Else fade out the arrow
		}
	});
	$('#return-to-top').click(function () {      // When arrow is clicked
		$('body,html').animate({
			scrollTop: 0                       // Scroll to top of body
		}, 500);
	});


});

// Check if alert has been closed
if (jQuery.cookie("alert-box") === "closed") {
	jQuery(".alert").hide();
}

// Grab your button (based on your posted html)
jQuery(".close").click(function (e) {
	// Do not perform default action when button is clicked
	e.preventDefault();

	/* If you just want the cookie for a session don't provide an expires
	  Set the path as root, so the cookie will be valid across the whole site */
	jQuery.cookie("alert-box", "closed", { path: "/" });
});

jQuery(document).ready(function () {
	if (jQuery.cookie("showOnlyOne")) {
		// If it is still within the day hide the div
		jQuery("#article-alert").hide();
	} else {
		// Either cookie already expired or the user never visit the site so the cookie needs to be created
		jQuery.cookie("showOnlyOne", "showOnlyOne", { expires: 1 });

		// Display the div
		jQuery("#article-alert").show();
	}
});

// Check if alert has been closed and add fixed top class back to the navigation
/*
$(window).scroll(function() {
	var header = $(document).scrollTop();
	var headerHeight = $(".header").outerHeight();
	if (header > headerHeight) {
	  $(".header").addClass("fixed");
	} else {
	  $(".header").removeClass("fixed");
	}
  });
*/


/*
// ===== Scroll Fixed Top ====
$(window).scroll(function () {
	if ($(this).scrollTop() >= 150) {        // If page is scrolled more than 50px
		$("nav").addClass("fixed-top").fadeIn(200);    // Fade in the arrow
	} else {
		$("nav").removeClass("fixed-top").fadeOut(200);   // Else fade out the arrow
	}
});

*/