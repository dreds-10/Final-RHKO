

$(document).ready(function(){
	loadJSON();
});

function loadJSON(){
   var data_file = "js/data.json";
   var http_request = new XMLHttpRequest();
   try{
      // Opera 8.0+, Firefox, Chrome, Safari
      http_request = new XMLHttpRequest();
   }catch (e){
      // Internet Explorer Browsers
      try{
         http_request = new ActiveXObject("Msxml2.XMLHTTP");
      }catch (e) {
         try{
            http_request = new ActiveXObject("Microsoft.XMLHTTP");
         }catch (e){
            // Something went wrong
            alert("Your browser may not support AJAX, or refresh because something went wrong");
            return false;
         }
      }
   }
   http_request.onreadystatechange  = function(){
		
	  
      // readyState == 4 means the request was successful
      if (http_request.readyState == 4  ){
		
        var jsonObj = JSON.parse(http_request.responseText);
		
		
		
		
		var mainWrap = document.querySelector('.project-main-wrap');
		
		for(var key in jsonObj){
			
			//project wrap
			var projectWrap = document.createElement("div");
			projectWrap.className = "project-wrap";		
			
			
			/****************
			CREATING THE IMG
			****************/
			//project link
			var projTag = document.createElement("a");
			projTag.setAttribute('href', jsonObj[key].proj_url);	
			
			//img div
			var projImgDiv = document.createElement("div");
			projImgDiv.className = "proj-img";
			projTag.appendChild(projImgDiv);
			
			/*
			var projectImg = "<a href='" + jsonObj[key].proj_url + "'>" + 
			     + '<div class="class="proj-img">' +		
					+ '<span data-picture="" data-alt="' + jsonObj[key].img_alt + '">' +						
					  +	'<span data-src="' + jsonObj[key].img_big_url '" + data-media="(max-width: 3000px)">' +						
						  +	'<img alt="' + jsonObj[key].img_alt + '" + src="' + jsonObj[key].img_big_url + '">' +						
					  + '</span>' +	
					+ '</span>' +
				 + '</div>' +
			  + "</a>";
			*/
			
			//universal appending
			projectWrap.appendChild(projTag);
			mainWrap.appendChild(projectWrap);
			
			/*
			//create the title
			var title = document.createElement("h1");
			title.innerHTML = jsonObj[key].title;	
			wrap.appendChild(title);
			
			//creative the images
			var img = document.createElement("img");
			img.setAttribute('src', jsonObj[key].imageUrl);	
			img.setAttribute('alt', jsonObj[key].imageAlt);			
			wrap.appendChild(img);			
			
			//create the author
			var author = document.createElement("h2");
			author.innerHTML = jsonObj[key].author;	
			wrap.appendChild(author);
			
			//create descrtiption
			var description = document.createElement("p");
			description.innerHTML = jsonObj[key].description;	
			wrap.appendChild(description);
			
			//append the divs into the main one
			feedWrapper.appendChild(wrap);
			*/
			
			
		}
		
		

		
		
      }

   }
   http_request.open("GET", data_file, true);
   http_request.send();
}

