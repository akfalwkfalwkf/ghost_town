
$(document).ready(function() {

  $(".clickl").click(function(){
         $(".Fo").fadeOut();
         $(".clickl").fadeOut();
		 $(".light2").fadeOut();
	     $(".light3").fadeOut();
	     $(".titleshake").fadeOut();
         $(".cg").fadeIn();
    })

  $(".cg").click(function(){
         $(".Fo").fadeIn();
         $(".clickl").fadeIn();
         $(".light2").fadeIn();
          $(".light3").fadeIn();
	 	 $(".titleshake").fadeIn();
         $(".cg").fadeOut();
    })
  

  })