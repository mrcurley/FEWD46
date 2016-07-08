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
li.textContent = "Products";
ol.appendChild(li);

var a = document.createElement("a")

var li = document.createElement("li");
li.textContent = "Sign Up";
ol.appendChild(li);
