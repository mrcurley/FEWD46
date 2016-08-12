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

  $("#burn-button").on("click", getCalories);

  function getCalories () {
    var bikeCal = (data/150*0.00632);
    var walkCal = (data/150*0.048);
    var runCal = (data/150*0.079);
    console.log(bikeCal);
  }
}




// when the burn button is clicked
// parse int the data
// run the formula to calculate minutes of walking, running, biking
// add h1 to each results box div
// assign the value of the formula
// append the h1 to the results-box div
