


$(document).ready(function() { //when dom is ready	
	
	 var menulink = $('.menu-link');
	 var nav = $('#menu');
  
	 menulink.click(function() {
		 $(this).toggleClass('menu-active');
  		nav.toggleClass('active');
  		return false;
	 });
	 
	 if (matchMedia('media screen and (max-width: 700px)').matches) {
	 	$('#description').prependTo('#about');	 
	 }
	 
	 
	 //change the html structure when the window size is equal or smaller than 700px
	 $(window).resize(function() {
        // This will fire each time the window is resized:
        if($(window).width() <= 700) {
            $('#description').prependTo('#about');
        } else {
            // if smaller
            $('#contact').prependTo('#about');
        }
    }).resize();
	
	
	

});//WHEN DOM IS READY FUNCTION







