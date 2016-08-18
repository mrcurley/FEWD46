// getItem
// when apple is clicked
// add class for active to the div
// get data value of image and set as var

$(".food-icon").one("click", getItem);


// Get food item selection data
function getItem(event) {
  event.preventDefault();

  var foodIcon = $(event.target).parents(".food-icon");
  var data = foodIcon.data("value");
  var foodItem = $(this).attr("name");

  $(".food-icon").removeClass("active");
  foodIcon.addClass("active");

  $(".footer").animate({
    height: "12%", padding: "30px 0px 10px"
  });


  // Calculate Calories and load results
  $("#burn-button").on("click", getCalories);

  function getCalories (event) {
    event.preventDefault();
    $("#food-screen").addClass("hidden");
    $("#burn-screen").removeClass("hidden");
    $(".footer").addClass("hidden");
    $(".food-pick").text(foodItem);

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

    else if (data == 670 || data == 400 || data == 647 || data == 231 || data == 258 || data == 550 || data == 400 || data == 309 || data == 300 || data == 267 || data == 180 || data == 84) {
      var pepTalk = $(".pep-talk");
      var feedback = $("<h3>").text("You sure you want to do that?");
      feedback.appendTo(pepTalk);
    }

    else if (data == 95 || data == 226 || data == 91 || data == 124 || data == 40 || data == 275 || data == 65 || data == 154 || data == 184) {
      var pepTalk = $(".pep-talk");
      var feedback = $("<h3>").text("👏🏻👏🏻👏🏻 Excellent choice! Keep on fighting the good fight against donuts, cheeseburgers and bacon.");
      feedback.appendTo(pepTalk);
    }

    else if (data == 280) {
      var pepTalk = $(".pep-talk");
      var feedback = $("<h3>").text("Mmmmmmmmmm, pizza 🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕");
      feedback.appendTo(pepTalk);
    }

    else if (data == 270) {
      var pepTalk = $(".pep-talk");
      var feedback = $("<h3>").text("This super-fish increases cardiovascular strength, reduces risk of depression, is an excellent source of Vitamin D and prevents cell damage. Salmon FTW!");
      feedback.appendTo(pepTalk);
    }

    else if (data == 80) {
      var pepTalk = $(".pep-talk");
      var feedback = $("<h3>").text("Um, have you ever had a flat white?");
      feedback.appendTo(pepTalk);
    }

    else if (data == 146 || data == 90 || data == 105 || data == 123) {
      var pepTalk = $(".pep-talk");
      var feedback = $("<h3>").text("Gotta take the edge of somehow, eh? If you choose to drink, keep it moderate. One drink a day for women and two for men!");
      feedback.appendTo(pepTalk);
    }

    else {
      var pepTalk = $(".pep-talk");
      var feedback = $("<h3>").text("How do you like em? 🍳 Poached, scrambled, fried, sunny-side up?");
      feedback.appendTo(pepTalk);
    }

  }


  // Restaurant Finder
  $("#start-again-button").on("click", function() {
    window.location.reload(true);
  });

  $("#eat-now-button").on("click", function() {
    navigator.geolocation.getCurrentPosition(getPlaces);
  });


  // Geolocation
  function getPlaces(position) {
    console.log(position);
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    callYelp(lat, long);
  }


  //get Yelp json data
  function callYelp(lat, long) {
    event.preventDefault();
    var url = "http://proxy.avandamiri.com/yelp/search?latitude=" + lat +
      "&longitude=" + long + "&term=" + escape(foodItem);
    $.get(url, showPlaces);
  }

  function showPlaces(response) {
    $("#burn-screen").addClass("hidden");
    $("#eat-screen").removeClass("hidden");

    console.log(response);
    response["businesses"].forEach(addRestaurant);
  }

  function addRestaurant(restaurant) {
    //$("#food-pick").text(foodItem);

    var listItem = $("<li>").addClass("restaurants");
    var name = $("<div>").addClass("rest-name").text(restaurant["name"]).attr("href", restaurant["mobile_url"]);
    var address = $("<div>").addClass("rest-address").text(
      restaurant.location.display_address[0]+ " | " +
      restaurant.location.display_address[1]+ " | " +
      restaurant.location.display_address[2]
    );
    var rating = $("<img>").addClass("rest-rating").attr("src", restaurant["rating_img_url"]);

    listItem.appendTo($(".restaurant-list"));
    name.appendTo(listItem);
    address.appendTo(listItem);
    rating.appendTo(listItem);
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
