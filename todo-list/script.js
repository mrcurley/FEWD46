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
  var label = document.createElement("label");
  var input = document.createElement("input");
  var span = document.createElement("span");

  ul.appendChild(list);
  list.setAttribute("id", "#todo-list");
  list.appendChild(label);
  label.appendChild(input);
  input.setAttribute("type", "checkbox");
  label.appendChild(span);
  span.textContent = n;

  form.reset();
}

form.addEventListener("submit", formSubmitted);
