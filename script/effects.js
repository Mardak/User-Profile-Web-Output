var shareLevel = 1;


// my custom tooltip
function tooltip() {
	// create tooltip
	$('<p id="test">My <em>new</em> text</p>').appendTo('body').animate({opacity: "0.0"}, 1020);
	
	//animate tooltip
	
	//hide tooltip
}


$(document).ready(function(){
	
	
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
		$("ul#interest1 li.level1").stop().animate({opacity: "1"}, 120);
	});
	
	$("ul#interest1 li.level1").hover(function(e) {
		$("ul#interest1 li.level1").css("cursor", "pointer");
		$("ul#interest1 li.level1").stop().animate({opacity: "0.8"}, 120);
        $(".image400x140").children('a').children('img').animate({ height: '299', left: '0', top: '0', width: '450'}, 100);
        $(".image400x140").children('a').children('span').fadeIn(200);
    }).mouseleave(function(e) {
        $(".image400x140").children('a').children('img').animate({ height: '332', left: '-20', top: '-20', width: '500'}, 100);
        $(".image400x140").children('a').children('span').fadeOut(200);
		$("ul#interest1 li.level1").stop().animate({opacity: "1"}, 120);
    });


	
	// SLIDER BAR
	$(function() {
	        $( "#slider-horizontal" ).slider(
				{
		            orientation: "horizontal",
		            range: "min",
		            min: 0,
		            max: 100,
		            value: 37,
		            slide: function(event, ui) {
							if (ui.value == 0) {
								// turn off all levels
								$("li.level1").stop().animate({opacity: "0.3"}, 120);
								
							}
							
							if (ui.value == 37) {
								// turn off all levels
								$("li.level1").stop().animate({opacity: "1"}, 120);
								
							}
							
					},
					stop: function(event, ui) {     
					}
				});
	    });
});
