var shareLevel = 1;

// XXX temporary sample images and text
var nextData = 0;
var data = [
  {className: "interest1", text: "corolla", img: "https://sitesuggest.mozillalabs.com/images/proto-up/images/toyota/toyota_corolla/2231016735_cefbeddc48_m.jpg"},
  {className: "interest2", text: "sports", img: "https://sitesuggest.mozillalabs.com/images/proto-up/images/sports.jpg"},
  {className: "interest3", text: "beer", img: "https://sitesuggest.mozillalabs.com/images/proto-up/images/beer.jpg"},
  {className: "interest4", text: "chips", img: "https://sitesuggest.mozillalabs.com/images/proto-up/images/chips.jpg"},
  {className: "interest5", text: "herbalessenses", img: "https://sitesuggest.mozillalabs.com/images/proto-up/images/herbal.jpg"},
  {className: "interest6", text: "luxury", img: "https://sitesuggest.mozillalabs.com/images/proto-up/images/luxury/lexus_gs/8028630811_ef02264ed7_m.jpg"},
];

var timer;
var state = true;
function showNext() {
  // Stop any pending animations and prepare the next one
  clearTimeout(timer);
  timer = setTimeout(showNext, 5000);

  // XXX temporary picking of image data
  var toShow = data[nextData];
  nextData = (nextData + 1) % data.length;

  // Figure out which nodes are animating in or out
  var shown = state ? "firstChild" : "lastChild";
  var hidden = state ? "lastChild" : "firstChild";

  // Set the background of the whole area
  document.getElementById("colorer").className = toShow.className;

  // Animate a transition based on what's changing
  function animate(id, callback) {
    var parent = document.getElementById(id);
    var showNode = parent[shown];
    var hideNode = parent[hidden];

    // Add a one-time flip transition that auto-unflips
    if (flipNext) {
      showNode.style.transform = "rotateX(90deg)";
      showNode.addEventListener("transitionend", function once(event) {
        if (event.propertyName != "transform") {
          return;
        }
        showNode.removeEventListener("transitionend", once);
        showNode.style.transform = "";
      });
    }

    // Do custom element transitions
    callback(showNode);

    // Show the one that's showing and hide the one hiding
    showNode.style.opacity = 1;
    showNode.style.pointerEvents = "auto";
    hideNode.style.opacity = 0;
    hideNode.style.pointerEvents = "none";
  }

  // Switch the displayed text
  animate("text1", function(node) {
    node.textContent = toShow.text;
  });

  // Switch the images
  ["400x140", "160x276", "170x144", "130x67a", "130x67b", "160x60"].forEach(function(size) {
    animate("image" + size, function(node) {
      node.style.backgroundImage = "url(" + toShow.img + ")";
    });
  });

  // Update state for the next animation
  if (flipNext) {
    flipNext = false;
  }
  state = !state;
}

var flipNext = false;
function flip() {
  flipNext = true;
  showNext();
}


$(document).ready(function() {
  showNext();
  /*
  // Hover over images
  $(".viewport").mouseenter(function(e) {
    $(this).children("a").children("img").animate({
      height: "299",
      left: "0",
      top: "0",
      width: "450"
    }, 100);
    $(this).children("a").children("span").fadeIn(200);
  }).mouseleave(function(e) {
    $(this).children("a").children("img").animate({
      height: "332",
      left: "-20",
      top: "-20",
      width: "500"
    }, 100);
    $(this).children("a").children("span").fadeOut(200);
  });

  $(".image400x140").hover(function() {
    tooltip();
    $("ul#interest1 li.level1").stop().animate({
      opacity: "0.8"
    }, 120);
  }, function() {
    removetooltip();
    $("ul#interest1 li.level1").stop().animate({
      opacity: "1"
    }, 120);
  });

  $("ul#interest1 li.level1").hover(function(e) {
    $("ul#interest1 li.level1").stop().animate({
      opacity: "0.8"
    }, 120);
    $(".image400x140").children("a").children("img").animate({
      height: "299",
      left: "0",
      top: "0",
      width: "450"
      }, 100);
    $(".image400x140").children("a").children("span").fadeIn(200, "linear");
  }).mouseleave(function(e) {
    $(".image400x140").children("a").children("img").animate({
      height: "332",
      left: "-20",
      top: "-20",
      width: "500"
    }, 100);
    $(".image400x140").children("a").children("span").fadeOut(200, "linear");
    $("ul#interest1 li.level1").stop().animate({
      opacity: "1"
    }, 120);
  });
  */

  // SLIDER BAR
  $(function() {
    $("#slider-horizontal").slider({
      orientation: "horizontal",
      range: "min",
      min: 0,
      max: 1000,
      value: 372,
      slide: function(event, ui) {
        var currentLevel = shareLevel;
        if (ui.value <= 250) {
          shareLevel = 0;

          // turn off all levels
          $("li.level1").stop().animate({
            opacity: "0.3"
          }, 120);
          $("li.level2").stop().animate({
            opacity: "0.3"
          }, 120);
          $("li.level3").stop().animate({
            opacity: "0.3"
          }, 120);
        }
        else if (ui.value <= 500) {
          shareLevel = 1;

          // turn off all levels except 1
          $("li.level1").stop().animate({
            opacity: "1"
          }, 120);
          $("li.level2").stop().animate({
            opacity: "0.3"
          }, 120);
          $("li.level3").stop().animate({
            opacity: "0.3"
          }, 120);
        }
        else if (ui.value <= 750) {
          shareLevel = 2;

          // turn off all levels except 2
          $("li.level1").stop().animate({
            opacity: "0.3"
          }, 120);
          $("li.level2").stop().animate({
            opacity: "1"
          }, 120);
          $("li.level3").stop().animate({
            opacity: "0.3"
          }, 120);
        }
        else {
          shareLevel = 3;

          // turn off all levels except 3
          $("li.level1").stop().animate({
            opacity: "0.3"
          }, 120);
          $("li.level2").stop().animate({
            opacity: "0.3"
          }, 120);
          $("li.level3").stop().animate({
            opacity: "1"
          }, 120);
        }

        // Indicate that the level changed
        if (shareLevel != currentLevel) {
          flip();
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
        $("#slider-horizontal").slider("option", "value", center);
      }
    });
  });
});
