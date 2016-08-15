//$("#burn-button").on("click", loadResults);

//function loadResults() {
//  $("#food-screen").addClass("hidden");
//  $("#burn-screen").removeClass("hidden");
//};

//$(".food-icon").on("click", loadResults);

//function loadResults() {
//  $("#food-screen").addClass("hidden");
//  $("#burn-screen").removeClass("hidden");
//};


// when apple is clicked
// add class for active to the div
// get data value of image and set as var

$(".food-icon").on("click", getItem);

function getItem(event) {
  var foodIcon = $(event.target).parents(".food-icon");
  var data = foodIcon.data("value");
  foodIcon.toggleClass("active");
  $(".footer").removeClass("hidden");

  $("#burn-button").on("click", getCalories);

  function getCalories () {
    $("#food-screen").addClass("hidden");
    $("#burn-screen").removeClass("hidden");

    $(".footer").addClass("results-footer");
    $(".footer-text").text("");

    $("#burn-button").text("PICK AGAIN");

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
  //$("#burn-button").on("click", window.location.reload());
}




// when the burn button is clicked
// parse int the data
// run the formula to calculate minutes of walking, running, biking
// add h1 to each results box div
// assign the value of the formula
// append the h1 to the results-box div
