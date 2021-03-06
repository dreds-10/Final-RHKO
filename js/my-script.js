


$(document).ready(function() { //when dom is ready		 
	 
	 

	 
	 /**************************
	  RESPONSIVE LAYOUT
	****************************/	 
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
	
	
	/**************************
	    MENU
	****************************/	
	$(".toggle-menu").click(function(){
		$(this).toggleClass("toggle-active");
		$(".main-nav").toggleClass("nav-active");
			
	});
	
	
	
	/********************
	SCROLL NEXT SECTION
	********************/
	$('.arrow').on('click', function(){
		$target = $('.sec2').offset().top+5;
		
		$('body, html').animate({scrollTop : $target}, 300);
		return false;
	});
	
	
	
	/********************
	TOGGLE VIEW
	********************/
	$('.view').click(function(){
		
		$(this).addClass('view-active');
		$(this).siblings().removeClass('view-active');		
		
		if($(this).attr("id") == "view-thumb"){
			$('.project-wrap').addClass('proj-wrap-thumb');
			$('.proj-img').addClass('proj-img-thumb');
			$('.proj-img img').addClass('proj-img-img-thumb');
			$('.proj-description').css("display", "none");
			$('.proj-img span').addClass('spanClass');
			
			//hide the Load More btn
			$('#load-more').hide();
			
			//function that fades in elements
			elementFade();
		
		}else if($(this).attr("id") == "view-list"){
			$('.project-wrap').removeClass('proj-wrap-thumb');
			$('.proj-img').removeClass('proj-img-thumb');
			$('.proj-img img').removeClass('proj-img-img-thumb');
			$('.proj-description').css("display", "block");
			$('.proj-img span').removeClass('spanClass');
			
			//fade the load more btn
			$("#load-more").delay(200*8).fadeIn(300);
			
			//function that fades in elements
			elementFade();
		}
	});
	
	
	
	/**************************
	    GOOGLE MAPS 
	****************************/
	function initialize() {
	
		var custom = [
			{
				"featureType": "water",
				"stylers": [
					{
						"color": "#dc4e23"
					},
					{
						"visibility": "on"
					}
				]
			},
			{
				"featureType": "landscape",
				"stylers": [
					{
						"color": "#eaeaea"
					}
				]
			},
			{
				"featureType": "road",
				"stylers": [
					{
						"saturation": -100
					},
					{
						"lightness": 45
					}
				]
			},
			{
				"featureType": "road.highway",
				"stylers": [
					{
						"visibility": "simplified"
					}
				]
			},
			{
				"featureType": "road.arterial",
				"elementType": "labels.icon",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "administrative",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#444444"
					}
				]
			},
			{
				"featureType": "transit",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "poi",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			}
		]
	
	
	  	var myLatlng = new google.maps.LatLng(45.4292557,-75.690043);
	  	var mapOptions = {
			zoom: 13,
			center: myLatlng,
			scrollwheel: false,
			styles: custom
	  	};
	
	  	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	
		
	  	var marker = new google.maps.Marker({
		  	position: myLatlng,
		  	map: map,
		  	title: 'Uluru (Ayers Rock)',
		  	icon: 'img/pin.png'
		  
	  	});
	}
	
    google.maps.event.addDomListener(window, 'load', initialize);
	

});//WHEN DOM IS READY FUNCTION




function elementFade(){
	    //hide all the elements
		$(".project-wrap").css("display", "none");
		
		projs = document.querySelectorAll(".project-wrap");
		//loop through the images and add the function to create the lightbox
		for(var j=0;j<projs.length;j++){
			projs[j].id = j;
		}
		
		//each project function
		$(".project-wrap").each(function(){
			//multiply the delay by the index number of each project (0,1,2,3..etc)
			var id = $(this).attr("id");
			$(this).delay(200*id).fadeIn(300);
		});
	
}




