var shareLevel = 1;


$(document).ready(function(){
	
	var arrayData = [
		'Nissans',
		'Toyota',
		'Travel'
	];
	
	$("#image-interest-general").each(function(i){
		$(this).simpletip({ 
			content: arrayData[i],
			fixed: true,
			position: ["-220", "-50"]
		});
	});
	
	
	
	$("#demographic").each(function(i){
		$(this).simpletip({ 
			content: "<b>Your Demographics</b><ul id='demo-tooltip'><li>Gender: Female</li><li>Age: 25</li><li>Browser location: Home</li><li>Income: $50-60K</li><li>Children: None</li></ul>",
			fixed: true,
			position: ["20", "-900"]
		});	 
	});
	
	
	$("#demographic").hover(function () {
	    $("#image-demographic").css("border","1px solid #c0c9d5");
	  }, function () {
	    var cssObj = {
	      'border' : '1px solid #9e9267'
	    }
	    $("#image-demographic").css(cssObj);
	});
	
	
	
	
	// YOUR DEMOGRAPHICS IMAGE GRID
	
	$("#image-demographic").each(function(i){
		$(this).simpletip({ 
			content: "<b>Your Demographics</b><ul id='demo-tooltip'><li>Gender: Female</li><li>Age: 25</li><li>Browser location: Home</li><li>Income: $50-60K</li><li>Children: None</li></ul>",
			fixed: true,
			position: ["-280", "-100"]
		});
	});
	
	$("#image-demographic").hover(function () {
		$("#image-demographic").css("border","1px solid #c0c9d5");
	    $(".demographic-style").css("opacity","1");
	  }, function () {
		$("#image-demographic").css("border","1px solid #9e9267");
	    $(".demographic-style").css('opacity','.6');
	});
	
	
	
	
	
	
	
	//Hover over images
    $('.viewport').mouseenter(function(e) {
        $(this).children('a').children('img').animate({ height: '299', left: '0', top: '0', width: '450'}, 100);
        $(this).children('a').children('span').fadeIn(200);
    }).mouseleave(function(e) {
        $(this).children('a').children('img').animate({ height: '332', left: '-20', top: '-20', width: '500'}, 100);
        $(this).children('a').children('span').fadeOut(200);
    });
	
	$(".image400x140").hover(function() {
	    $("ul#interest1 li.level1").css("opacity", "0.5");
	}, function() {
	    $("ul#interest1 li.level1").css("opacity", "1");
	});
	
	$("ul#interest1 li.level1").hover(function(e) {
		$("ul#interest1 li.level1").css("opacity", "0.5");
        $(".image400x140").children('a').children('img').animate({ height: '299', left: '0', top: '0', width: '450'}, 100);
        $(".image400x140").children('a').children('span').fadeIn(200);
    }).mouseleave(function(e) {
        $(".image400x140").children('a').children('img').animate({ height: '332', left: '-20', top: '-20', width: '500'}, 100);
        $(".image400x140").children('a').children('span').fadeOut(200);
		$("ul#interest1 li.level1").css("opacity", "1");
    });
	

	
	// SLIDER BAR
	$(function() {
	        $( "#slider-horizontal" ).slider(
				{
		            orientation: "horizontal",
		            range: "min",
		            min: 0,
		            max: 100,
		            value: 20,
		            slide: function( event, ui ) {
		                $( "#amount" ).val( ui.value );
		            }
		        }
			);
	        // $( "#amount" ).val( $( "#slider-horizontal" ).slider( "value" ) );
	    });
	
	
	
    $(function() {
        $( "#slider" ).slider({
			orientation: "horizontal",
			range: "min",
            value: 0,
            min: 0,
            max: 100,
            slide: function( event, ui ) {
                $( "#amount" ).val( ui.value );
            }
        });
        $( "#amount" ).val( $( "#slider" ).slider( "value" ) );
    });

	$(function() {
        $( "#slider2" ).slider({
			orientation: "horizontal",
			range: "min",
            value: 0,
            min: 0,
            max: 4,
            slide: function( event, ui ) {
                $( "#amount2" ).val( ui.value );
                shareLevel = 3 - ui.value;
                updateBalls(shareLevel);
            }
        });
        $( "#amount2" ).val( $( "#slider2" ).slider( "value" ) );

    });



	// FLIP CARD ANIMATION
	$('.flip').find('.card').delay(100).addClass('flipped');


	$("li").bind("mousemove", function(event) {
	    $(this).find("div.tooltip").css({
	        top: event.pageY + 5 + "px",
	        left: event.pageX + 5 + "px"
	    }).show();
	});


});
