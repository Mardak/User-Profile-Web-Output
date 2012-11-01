const IMAGE_SIZE = 100;

$(document).ready(function(){
});

function pickImage() {
  var choices = [];
  switch (shareLevel) {
    case 3:
      choices.push("honda");
      choices.push("toyota");
      choices.push("civic");
      choices.push("corolla");

    case 2:
      choices.push("asian");
      choices.push("smallcar");

    case 1:
      choices.push("automobile");
  }

  console.log(choices);
  function makeItem() {
    var blob = imageData.shift();
    var pieces = blob.split(";");
    return {
      blob: blob,
      url: "https://sitesuggest.mozillalabs.com/images/proto-up/images/" + pieces[0],
      attrs: pieces[1].split(",")
    };
  }

  var choice = choices[Math.floor(Math.random() * choices.length)];
  if (choice == null) {
    if (Math.random() < .5) {
      return {
        url: "https://sitesuggest.mozillalabs.com/images/test.png",
        attrs: ["something", "not", "auto"]
      }
    }
    else {
      return makeItem();
    }
  }

  do {
    var item = makeItem();
    if (item.attrs.indexOf(choice) != -1) {
      return item;
    }
    imageData.push(item.blob);
  } while (true);
}

function makeImage() {
  var container = document.getElementById("feedback-images");
  var img = document.createElement("img");

  var recycle = false;
  var item = pickImage();
  img.src = item.url;

  img.style.opacity = 0;
  img.style.position = "absolute";
  container.appendChild(img);

  img.addEventListener("mouseover", function() {
    document.getElementById("feedback-output").textContent = item.attrs.join(" ");
  });

  var timer = 0;
  var lastTime = Date.now();
  setInterval(function() {
    var now = Date.now();
    timer = (timer + now - lastTime) % 10000;
    lastTime = now;

    var frac = timer / 10000;
    if (frac < .2) {
      if (recycle) {
        recycle = false;
        if (item.blob != null) {
          imageData.push(item.blob);
        }
        item = pickImage();
        img.src = item.url;
      }

      frac = frac / .2;

      img.style.opacity = Math.sin(Math.PI * frac / 2);
      img.style.height = (IMAGE_SIZE / 2 + frac * IMAGE_SIZE / 2) + "px";
      img.style.width = (IMAGE_SIZE / 2 + frac * IMAGE_SIZE / 2) + "px";

      img.style.left = (725 + IMAGE_SIZE / 4 - frac * IMAGE_SIZE / 4 + 75 * Math.cos(Math.PI * frac / 2)) + "px";
      img.style.top = 75 * Math.sin(Math.PI * frac / 2) + "px";
    }
    else if (frac < .8) {
      recycle = true;

      frac = (frac - .2) / .6;

      img.style.left = (725 - frac * 550) + "px";
    }
    else {
      recycle = true;

      frac = (frac - .8) / .2;

      img.style.opacity = Math.cos(Math.PI * frac / 2);
      img.style.height = (IMAGE_SIZE - frac * IMAGE_SIZE / 2) + "px";
      img.style.width = (IMAGE_SIZE - frac * IMAGE_SIZE / 2) + "px";

      img.style.left = (175 - frac * IMAGE_SIZE / 4 - 75 * Math.sin(Math.PI * frac / 2)) + "px";
      img.style.top = 75 * Math.cos(Math.PI * frac / 2) + "px";
    }
  }, 10);
}

