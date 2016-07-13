var body = document.querySelector("body");

// Create the <header> and append it to the body...
var header = document.createElement("header");
body.appendChild(header);

var a = document.createElement("a");
a.setAttribute("href", "index.html");
header.appendChild(a);

var img = document.createElement("img");
img.setAttribute("src","images/acme-corp.jpg");
img.setAttribute("id", "logo");
img.setAttribute("width", "200");
img.setAttribute("height", "55");
header.appendChild(img);

var nav = document.createElement("nav");
header.appendChild(nav);

var ol = document.createElement("ol");
nav.appendChild(ol);

var li = document.createElement("li");
ol.appendChild(li);

var a = document.createElement("a");
a.setAttribute("href", "products.html");
a.textContent = "Products";
li.appendChild(a);

var li = document.createElement("li");
ol.appendChild(li);

var a = document.createElement("a");
a.classList.add("button");
a.setAttribute("href", "signup.html");
a.textContent = "Sign Up";
li.appendChild(a);

var main = document.createElement("main");
main.classList.add("container");
body.appendChild(main);

var h = document.createElement("h1");
h.textContent = "Welcome to ACME Corp";
main.appendChild(h);

var p = document.createElement("p");
p.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
main.appendChild(p);

var p = document.createElement("p");
p.textContent = " Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
main.appendChild(p);

var f = document.createElement("footer");
f.classList.add("container");
body.appendChild(f);

var p = document.createElement("p");
p.textContent = "Copyright, 2015";
f.appendChild(p);
