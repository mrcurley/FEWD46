
var form = $("#new-item-form");
var entry = $("#new-item-input");

form.on("submit", createToDos);

function createToDos (event) {
  event.preventDefault();

  var listItem = entry.val().split(",");
  //form.reset();

  listItem.forEach(createList);

  function createList(i) {
    var ul = $("ul");
    var list = $("<li>").attr("id", "#todo-list");
    var label = $("<label>").appendTo(list);
    $("<input>").appendTo(label).attr("type", "checkbox");
    $("<span>").appendTo(label).text(i.trim());

    list.appendTo(ul);
  }
}

// var form = document.querySelector("#new-item-form");
// var entry = document.querySelector("#new-item-input");
//
// form.addEventListener("submit", createToDos);
//
// function createToDos (event) {
//   event.preventDefault();
//
//   var listItem = entry.value.split(",");
//   form.reset();
//
//   listItem.forEach(createList);
//     function createList(i) {
//       var ul = document.querySelector("ul");
//       var list = document.createElement("li");
//       var label = document.createElement("label");
//       var input = document.createElement("input");
//       var span = document.createElement("span");
//
//       ul.appendChild(list);
//       list.appendChild(label);
//       label.appendChild(input);
//       label.appendChild(span);
//
//       list.setAttribute("id", "#todo-list");
//       input.setAttribute("type", "checkbox");
//
//       span.textContent = i.trim();
//   }
// }
//
//
//
//
//
//
//
//
//   //span.textContent = entry.value;
