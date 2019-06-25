(function ($) {
	"use strict"
	var PATH = {};
	/******************** 1. PRELOADER ********************/
	PATH.preLoader = function () {
        // will first fade out the loading animation
        $(".status").fadeOut();
        // will fade out the whole DIV that covers the website.
        $(".loader").delay(1000).fadeOut("slow");	
	}


	/* Window on load function */
	$(window).on('load', function () {
		PATH.preLoader();
	});
	//
	
})(jQuery);



