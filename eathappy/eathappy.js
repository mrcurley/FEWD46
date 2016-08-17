// getItem
// when apple is clicked
// add class for active to the div
// get data value of image and set as var

$(".food-icon").on("click", getItem);

// Get food item selection data
function getItem(event) {
  event.preventDefault();
  var foodIcon = $(event.target).parents(".food-icon");
  var data = foodIcon.data("value");
  var foodItem = foodIcon.attr("name");

  foodIcon.toggleClass("active");
  $(".footer").animate({
    height: "10%", padding: "30px 0px 10px"
  });

// Calculate Calories and load results
  $("#burn-button").on("click", getCalories);

  function getCalories () {
    $("#food-screen").addClass("hidden");
    $("#burn-screen").removeClass("hidden");
    $(".footer").addClass("hidden");

    var bikeCal = parseInt(data/150/0.00632);
    var walkCal = parseInt(data/150/0.048);
    var runCal = parseInt(data/150/0.079);

    $("#bike-total").text(bikeCal);
    $("#walk-total").text(walkCal);
    $("#run-total").text(runCal);

    if (data == 0) {
      var pepTalk = $(".pep-talk");
      var feedback = $("<h3>").text("💁🏼 Drink up girl! Drinking plenty of water is a great way to stay hydrated and avoid overeating.");
      feedback.appendTo(pepTalk);
    }

    else if (data == 95,226,91,124,40,275,65) {
      var pepTalk = $(".pep-talk");
      var feedback = $("<h3>").text("👏🏻👏🏻👏🏻 Excellent choice! Keep on fighting the good fight against donuts, cheeseburgers and bacon.");
      feedback.appendTo(pepTalk);
    }
  }

// Restaurant Finder
  $("#eat-now-button").on("click", findRestaurants);

  function findRestaurants () {

  }

}


// findRestaurants
// When the eat now button is clicked
// Get location
// When location comes back Call Yelp api
// Use food name & location to build url for api call
// Hide Results screen
// Show Restaurants screen
// Append restaurants to restaurants list div


// getCalories
// when the burn button is clicked
// run the formula to calculate minutes of walking, running, biking
// add h1 to each results box div
// assign the value of the formula
// append the h1 to the results-box div
