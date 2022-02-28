
    //Preloader
    $(window).on('load', function () {
        $(".loader").delay(400).fadeOut("slow");
        $("#preloder").delay(400).fadeOut("slow");
    });
    function darken_screen(yesno){
		if( yesno == true ){
			document.querySelector('.screen-darken').classList.add('active');
		}
		else if(yesno == false){
			document.querySelector('.screen-darken').classList.remove('active');
		}
	}
    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }