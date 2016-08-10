// When the page loads
// Look in local storage to see if the the list.html is there
// If the html is there
//    -Set the HTML of the list to the HTML in localStorage
//    -element.innerHTML = ...
// When the user adds an item
//    -Do all the normal functions
//    -Once the item is added to the list
//    -Save the html of the list to localStorage - localStorage.setItem("...", el.innerHTML)

var list=document.querySelector("#todo-list");
list.innerHTML = localStorage.getItem("listHTML");

var form = document.querySelector("#new-item-form");
var entry = document.querySelector("#new-item-input");

form.addEventListener("submit", createToDos);

function createToDos (event) {
  event.preventDefault();

  var listItem = entry.value.split(",");
  form.reset();

  listItem.forEach(createList);
    function createList(i) {
      var ul = document.querySelector("ul");
      var list = document.createElement("li");
      var label = document.createElement("label");
      var input = document.createElement("input");
      var span = document.createElement("span");

      ul.appendChild(list);
      list.appendChild(label);
      label.appendChild(input);
      label.appendChild(span);

      list.setAttribute("id", "#todo-list");
      input.setAttribute("type", "checkbox");

      span.textContent = i.trim();

  }
  localStorage.setItem("listHTML", list.innerHTML);

}








  //span.textContent = entry.value;
