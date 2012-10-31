// Fill in some fake data
var demographics = {
  gender: "female",
  age: "25",
  children: "no",
  education: "college",
  browser: "home"
};

var interests = {
  automobile: {
    asian: {
      honda: true,
      toyota: true
    },
    smallcar: {
      civic: true,
      corolla: true
    }
  },
  computers: {
    laptop: {
      apple: true,
      dell: true
    },
    software: {
      photoshop: true,
      powerpoint: true
    }
  },
  consumergoods: {
    beer: {
      heineken: true,
      samueladams: true
    },
    shampoo: {
      headnshoulders: true,
      herbalessenses: true
    }
  },
  fashion: {
    shoeshape: {
      closedtoe: true,
      flat: true
    },
    colors: {
      black: true,
      red: true
    }
  },
  sports: {
    baseball: {
      cardinals: true,
      giants: true
    },
    football: {
      raiders: true,
      sf49ers: true
    }
  },
  travel: {
    cruise: {
      alaska: true,
      caribbean: true
    },
    europe: {
      france: true,
      spain: true
    }
  }
};

// Fake localizing function
function _(topic, value) {
  return localized[topic][value];
}
const localized = {
  age: {
    "18": "18-24",
    "25": "25-34",
    "35": "35-44",
    "45": "45-54",
    "55": "55-64",
    "65": "65+"
  },
  browser: {
    home: "Home",
    school: "School",
    work: "Work"
  },
  children: {
    no: "None",
    yes: "Has Children"
  },
  education: {
    college: "College",
    graduate: "Graduate School",
    none: "No College",
    some: "Some College"
  },
  gender: {
    female: "Female",
    male: "Male"
  }
};

// Populate the page with data
var allTopics = [];
var allRules = [];
var allKeywords = [];
addEventListener("load", function() {
  // Fill in demographics
  Object.keys(demographics).forEach(function(topic) {
    var span = document.getElementById("demo-" + topic);
    span.textContent = _(topic, demographics[topic]);
  });

  // Fill in interests
  Object.keys(interests).forEach(function(topic, index) {
    // Display top-level vertical
    var col = index + 1;
    document.getElementById("interest-" + col + "-1").textContent = topic;
    allTopics.push(topic);

    // Display matching rules
    var rules = Object.keys(interests[topic]);
    document.getElementById("interest-" + col + "-2").textContent = rules.join(", ");

    // Display keywords from matching rules
    var topicKeywords = [];
    rules.forEach(function(rule) {
      allRules.push(rule);
      Object.keys(interests[topic][rule]).forEach(function(keyword) {
        allKeywords.push(keyword);
        topicKeywords.push(keyword);
      });
    });
    document.getElementById("interest-" + col + "-3").textContent = topicKeywords.join(", ");
  });

  updateBalls(1);
});

var oldLevel = 0;
function updateBalls(level) {
  var pjs = Processing.getInstanceById("feedback-canvas");

  if (oldLevel < 1 && level >= 1) {
    allTopics.forEach(function(topic) {
      pjs.addBall(255, Math.random()*255, Math.random()*255, topic);
    });
  }

  if (oldLevel < 2 && level >= 2) {
    allRules.forEach(function(rule) {
      pjs.addBall(Math.random()*255, 255, Math.random()*255, rule);
    });
  }

  if (oldLevel < 3 && level >= 3) {
    allKeywords.forEach(function(keyword) {
      pjs.addBall(Math.random()*255, Math.random()*255, 255, keyword);
    });
  }

  if (oldLevel >= 1 && level < 1) {
    allTopics.forEach(function(topic) {
      pjs.removeBall(topic);
    });
  }

  if (oldLevel >= 2 && level < 2) {
    allRules.forEach(function(rule) {
      pjs.removeBall(rule);
    });
  }

  if (oldLevel >= 3 && level < 3) {
    allKeywords.forEach(function(keyword) {
      pjs.removeBall(keyword);
    });
  }

  oldLevel = level;
}
