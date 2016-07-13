var link = document.querySelector(".like-link");
var form = document.querySelector("#new-comment");

form.addEventListener("submit", comment);
link.addEventListener("click", like);

function like(event) {
  event.preventDefault();
  var likes = document.querySelector(".like-count");
  var a = likes.textContent;
  var b = parseInt(a);
  var c = b + 1;
  likes.textContent = c;
}


function comment(event) {
  event.preventDefault();
  // define the comment box text area as a var
  // define the input as a var
  // create the new div
  // define the div class
  // define the text content as the input var defined above
  // append the div to a parent
  // make the comment box value null

  var textBox = document.querySelector("#new-comment-body");
  var entry = textBox.value;
  var commentsDiv = document.createElement("div");
  commentsDiv.setAttribute("class","comment");
  commentsDiv.textContent = entry;
  var comments = document.querySelector("#comments");
  comments.appendChild(commentsDiv);
  document.querySelector("#new-comment-body").value = null;

}
