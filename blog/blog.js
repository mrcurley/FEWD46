var link = document.querySelector(".like-link");
var form = document.querySelector("#new-comment");

form.addEventListener("submit", comment);
link.addEventListener("click", like);

function like(event) {
  event.preventDefault();
  // call the span with class "like-count"
  var countSpan = document.querySelector(".like-count");
  // access the text content within the span
  var a = countSpan.textContent;
  // define the text as a number vs a string
  var b = parseInt(a);
  // add a value of 1 on click
  var c = b + 1;
  // rewrite the text content within the span to reflect new value
  countSpan.textContent = c;
}


function comment(event) {
  event.preventDefault();
  // define the variable for the new-comment form
  var body = document.querySelector("#new-comment-body");
  // define the value of the body input
  var entry = body.value;
  // define variable for comment display
  var newDiv = document.querySelector("#comments");
  // display the text entry in a new block
  newDiv.textContent = entry;
  document.querySelector("#new-comment-body").value = null;
}
