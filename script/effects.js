var shareLevel = 1;


// var imgs = [new Image(), new Image()];
// imgs[0].src = "https://sitesuggest.mozillalabs.com/images/test.png";
// imgs[1].src = "https://sitesuggest.mozillalabs.com/images/proto-up/images/sports.jpg";

var next = 1;
function doFlip() {
  var img = document.getElementsByClassName('viewport');
  img.style.transform = "rotateY(90deg)";

  img.addEventListener("transitionend", function once() {
    img.removeEventListener("transitionend", once);
    img.src = imgs[next].src;
    img.style.transform = "";
    next = +!next;
  });
}


$(document).ready(function(){
	
	//do first Flip onLoad
	// doFlip();

	
		
	//Hover over images
    $('.viewport').mouseenter(function(e) {
        $(this).children('a').children('img').animate({ height: '299', left: '0', top: '0', width: '450'}, 100);
        $(this).children('a').children('span').fadeIn(200);
    }).mouseleave(function(e) {
        $(this).children('a').children('img').animate({ height: '332', left: '-20', top: '-20', width: '500'}, 100);
        $(this).children('a').children('span').fadeOut(200);
    });
	
	$(".image400x140").hover(function() {
		tooltip();
		$("ul#interest1 li.level1").stop().animate({opacity: "0.8"}, 120);
	}, function() {
		removetooltip();
		$("ul#interest1 li.level1").stop().animate({opacity: "1"}, 120);
	});
	
	$("ul#interest1 li.level1").hover(function(e) {
		// $("ul#interest1 li.level1").css("cursor", "move");
		$("ul#interest1 li.level1").stop().animate({opacity: "0.8"}, 120);
        $(".image400x140").children('a').children('img').animate({ height: '299', left: '0', top: '0', width: '450'}, 100);
        $(".image400x140").children('a').children('span').fadeIn(200, "linear");
    }).mouseleave(function(e) {
        $(".image400x140").children('a').children('img').animate({ height: '332', left: '-20', top: '-20', width: '500'}, 100);
        $(".image400x140").children('a').children('span').fadeOut(200, "linear");
		$("ul#interest1 li.level1").stop().animate({opacity: "1"}, 120);
    });


	
	// SLIDER BAR
	$(function() {
	        $( "#slider-horizontal" ).slider(
				{
		            orientation: "horizontal",
		            range: "min",
		            min: 0,
		            max: 1000,
		            value: 372,
		            slide: function(event, ui) {
							if (ui.value <= 250) {
								shareLevel = 0;

								// turn off all levels
								$("li.level1").stop().animate({opacity: "0.3"}, 120);
								$("li.level2").stop().animate({opacity: "0.3"}, 120);
								$("li.level3").stop().animate({opacity: "0.3"}, 120);
							}
							else if (ui.value <= 500) {
								shareLevel = 1;

								// turn off all levels except 1
								$("li.level1").stop().animate({opacity: "1"}, 120);
								$("li.level2").stop().animate({opacity: "0.3"}, 120);
								$("li.level3").stop().animate({opacity: "0.3"}, 120);
							}
							else if (ui.value <= 750) {
								shareLevel = 2;

								// turn off all levels except 2
								$("li.level1").stop().animate({opacity: "0.3"}, 120);
								$("li.level2").stop().animate({opacity: "1"}, 120);
								$("li.level3").stop().animate({opacity: "0.3"}, 120);
							}
							else {
								shareLevel = 3;

								// turn off all levels except 3
								$("li.level1").stop().animate({opacity: "0.3"}, 120);
								$("li.level2").stop().animate({opacity: "0.3"}, 120);
								$("li.level3").stop().animate({opacity: "1"}, 120);
							}
							
					},

                                        // Automatically center in the column when stopping
					stop: function(event, ui) {     
                                          var center;
                                          if (ui.value <= 250) {
                                            center = 122;
                                          }
                                          else if (ui.value <= 500) {
                                            center = 372;
                                          }
                                          else if (ui.value <= 750) {
                                            center = 625;
                                          }
                                          else {
                                            center = 874;
                                          }
                                          $( "#slider-horizontal" ).slider("option", "value", center);
					}
				});
	    });
});
