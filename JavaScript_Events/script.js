function addEvents() {
   document.getElementById("events").addEventListener("touchstart", processTouch(event));
}

function processTouch(event) {
   document.getElementById("output").innerHTML = "You are touching the screen!";
}

function moveTouch() {
   document.getElementById("output").innerHTML = "You are moving your finger";
   changeColor();
}

function endTouch() {
   document.getElementById("output").innerHTML = "";
}

function loadPageFunction() {
   var color = localStorage.getItem("color");
   var background = localStorage.getItem("background");
   document.getElementById("events").style.backgroundColor = (color != null) ? color : "blue";
   document.body.style.backgroundColor = (background != null) ? background : "white";
}

function saveColors() {
   var color = document.getElementById("events").style.backgroundColor;
   var background = document.body.style.backgroundColor;
   localStorage.setItem("color", color);
   localStorage.setItem("background", background);
}

function changeColor() {
   document.getElementById("events").style.backgroundColor = getRandomColor();
}

function changeBackgroundColor() {
   var color = document.getElementById("events").style.backgroundColor;
   document.body.style.backgroundColor = color;
}

//Found on StackOverflow
//https://stackoverflow.com/questions/1484506/random-color-generator
function getRandomColor() {
   var letters = '0123456789ABCDEF';
   var color = '#';
   for (var i = 0; i < 6; i++) {
     color += letters[Math.floor(Math.random() * 16)];
   }
   return color;
 }