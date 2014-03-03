


$(document).ready(function() { //when dom is ready	
	
	 var menulink = $('.menu-link');
	 var nav = $('#menu');
  
	 menulink.click(function() {
		 $(this).toggleClass('menu-active');
  		nav.toggleClass('active');
  		return false;
	 });
	 
	 
	 
	 
	 var div = $(".sec-img");
	 //change the html structure when the window size is equal or smaller than 700px
	 $(window).resize(function() {
        // This will fire each time the window is resized:
        if($(window).width() <= 800) {            
        	div.addClass("img-lower");	
        } else {
            // if smaller
            div.removeClass("img-lower");
        }
    }).resize();
	
	
	$(".toggle-menu").click(function(){
		$(this).toggleClass("toggle-active");	
	});
	
	
	
	

});//WHEN DOM IS READY FUNCTION







