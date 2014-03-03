


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
	
	
	
	/**************************
	    GOOGLE MAPS 
	****************************/
	function initialize() {
	
		var custom = [
			{
				"featureType": "water",
				"stylers": [
					{
						"color": "#56b391"
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
						"color": "#f2f2f2"
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
	
	
	  	var myLatlng = new google.maps.LatLng(45.2501566,-75.8002568);
	  	var mapOptions = {
			zoom: 6,
			center: myLatlng,
			scrollwheel: false,
			styles: custom
	  	};
	
	  	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	
		
	  	var marker = new google.maps.Marker({
		  	position: myLatlng,
		  	map: map,
		  	title: 'Uluru (Ayers Rock)',
		  	icon: 'images/pin2.png'
		  
	  	});
	}
	
    google.maps.event.addDomListener(window, 'load', initialize);
	
	
	
	
	

});//WHEN DOM IS READY FUNCTION







