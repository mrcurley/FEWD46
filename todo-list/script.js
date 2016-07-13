var form = document.querySelector("#new-item-form");

function formSubmitted(event) {
  event.preventDefault();
  // CREATE A LIST OF TO DO ITEMS IN THE PAGE
  // define the input as a var
  // define the value of the input as textContent
  // create a list item
  // create a label
  // create an input
  // create a span

  var entry = document.querySelector("#new-item-input");
  var n = entry.value;
  var list = document.createElement("li");
  var ul = document.querySelector("ul");
  ul.appendChild(list);
  list.setAttribute("id", "#todo-list");
  var label = document.createElement("label");
  list.appendChild(label);
  label.setAttribute("for", "#todo-list");
  var input = document.createElement("input");
  label.appendChild(input);
  input.setAttribute("type", "checkbox");
  var span = document.createElement("span");
  list.appendChild(span);
  span.textContent = n;

  // ASSIGN FUNCTION TO CHECKBOX ON CLICK
  //


  form.reset();
}

form.addEventListener("submit", formSubmitted);
