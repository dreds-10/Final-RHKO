

$(document).ready(function(){
	loadJSON();
	loadOlder();
});

function loadJSON(){
	
   $('.project-main-wrap').addClass('loading');
	
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
		
		$('.project-main-wrap').removeClass('loading');
		
        var jsonObj = JSON.parse(http_request.responseText);
		
		
		
		
		var mainWrap = document.querySelector('.project-main-wrap');
		
		for(var key in jsonObj){
			
			//project wrap
			var projectWrap = document.createElement("div");
			projectWrap.className = "project-wrap";		
			
			/**************************
			CREATING THE RESPONSIVE IMGS
			***************************/
			//project link
			var projTag = document.createElement("a");
			projTag.setAttribute('href', jsonObj[key].proj_url);	
			
			//img div
			var projImgDiv = document.createElement("div");
			projImgDiv.className = "proj-img";
			projTag.appendChild(projImgDiv);
			
			//Main Span
			var mainSpan = document.createElement("span");
			mainSpan.setAttribute('data-picture', "");		
			mainSpan.setAttribute('data-alt', jsonObj[key].img_alt);
			projImgDiv.appendChild(mainSpan);
			
			//Img1 Span
			var img1Span = document.createElement("span");
			img1Span.setAttribute('data-src', jsonObj[key].img_big_url);
			img1Span.setAttribute('data-media', "(max-width: 3000px)");	
			mainSpan.appendChild(img1Span);
			
			//Img1 img
			var img1 = document.createElement("img");
			img1.setAttribute('src', jsonObj[key].img_big_url);
			img1.setAttribute('alt', jsonObj[key].img_alt);	
			img1Span.appendChild(img1);
			
			//Img1 Span
			var img2Span = document.createElement("span");
			img2Span.setAttribute('data-src', jsonObj[key].img_small_url);
			img2Span.setAttribute('data-media', "(max-width: 650px)");	
			mainSpan.appendChild(img2Span);
			
			//no script
			var noscript = document.createElement("noscript");
			mainSpan.appendChild(noscript);
			//img no script
			var imgNo = document.createElement("img");
			imgNo.setAttribute('src', jsonObj[key].img_big_url);
			imgNo.setAttribute('alt', jsonObj[key].img_alt);	
			noscript.appendChild(imgNo);
			
			//create the overlay div
		    var mask = document.createElement("div");
			mask.className = "mask";
			mask.innerHTML = "View Project";
			projImgDiv.appendChild(mask);
			
			
			
			/**************************
			CREATING THE PROJECT INFO
			***************************/
			//create the warapping div
			var projDescription = document.createElement("div");
			projDescription.className = "proj-description";
			
			//create the project title
			var title = document.createElement("h2");
			title.innerHTML = jsonObj[key].proj_title;
			projDescription.appendChild(title);
			
			//create the project title
			var p1 = document.createElement("p");
			p1.innerHTML = jsonObj[key].min_description;
			projDescription.appendChild(p1);
			
			//create MORE BTN
			var projLink = document.createElement("a");
			projLink.setAttribute('href', jsonObj[key].proj_url);
			projDescription.appendChild(projLink);
			
			//More Info txt
			var m = document.createElement("p");
			m.innerHTML = jsonObj[key].proj_url;
			projLink.appendChild(m);
			
			for(var t in jsonObj[key].tags){
				//Tags
				var tag = document.createElement("span");
				tag.className = "tag";
				tag.innerHTML = jsonObj[key].tags[t];
				projDescription.appendChild(tag);
			}
			
			//universal appending
			projectWrap.appendChild(projTag);
			projectWrap.appendChild(projDescription);
			mainWrap.appendChild(projectWrap);
			
			$(".project-wrap").css("display", "none");
	
			//each project function
		    $(".project-wrap").each(function(){
				//multiply the delay by the index number of each project (0,1,2,3..etc)
				var index = $(this).index();
				$(this).delay(200*index).fadeIn(300);
			});
			
			
			
		}
		
		
		
		//LOAD MORE PROJECTS BTN
		var loadM = document.createElement("a");
		loadM.setAttribute('href', 'old-proj.html');
		document.querySelector(".wrapper").appendChild(loadM);
		
		var btn = document.createElement("div");
		btn.id = "load-more";
		btn.innerHTML = "Load more";
		loadM.appendChild(btn);
		
		//DELAY TO FADE THE BTN
		$("#load-more").css("display", "none");
		$("#load-more").delay(200*8).fadeIn(300);
		
		//CREATE THE DIV THAT WILL CONTAIN ALL THE OLD PROJECTS WHEN THE BTN ABOVE IS TRIGGED
		var loadDiv = document.createElement("div");
		loadDiv.id = "load-old-proj";
		document.querySelector(".wrapper").appendChild(loadDiv);
		
		
		
		
		
      }

   }
   http_request.open("GET", data_file, true);
   http_request.send();
}




/*************************
LOAD OLDER PROJECTS
************************/
function loadOlder() {
	
 $('.wrapper').on("click", "#load-more",function(e) {
    e.preventDefault();  
    loadOldProjects();
 });
}

// empty elements from #inner div, add loading class, load in elements from link #inner div, remove loading class when complete.
function loadOldProjects() {
    $('#load-old-proj').load("old-proj.html" + ' .project-wrap', function() {
  		//hide the load more btn
		$('#load-more').remove();
	
		$("#load-old-proj .project-wrap").css("display", "none");	
		//each project function
		$("#load-old-proj .project-wrap").each(function(){
		//multiply the delay by the index number of each project (0,1,2,3..etc)
		var index = $(this).index();
		$(this).delay(200*index).fadeIn(300);
	});
	
  });
}






















