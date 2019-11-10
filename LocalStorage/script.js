var data;
class Thing {
   name;
   color;
   size;
}

function storeData(key, data) {
   localStorage.setItem(key, data);
}

function retrieveData() {
   var key = document.getElementById("key").value;
   if (localStorage.getItem(key) != null) {
      showData(localStorage.getItem(key));
   } else {
      showNoKeyError();
   }
}

function getData() {
   data = new Thing();
   data.name = document.getElementById("name").value;
   data.color = document.getElementById("color").value;
   data.size = document.getElementById("size").value;
   var dataString = JSON.stringify(data);
   storeData(data.name, dataString);
}

function showData(dataString) {
   var _data = JSON.parse(dataString);
   var string = "Name: " + _data.name + 
      "<br>Color: " + _data.color + 
      "<br>Size: " + _data.size;
   document.getElementById("thing").innerHTML = string;
}

function showNoKeyError() {
   document.getElementById("thing").innerHTML = "There is no item with that name."
}

function saveNumber() {
   storeData("number", document.getElementById("number").value);
}

function loadNumber() {
   document.getElementById("loadedNumber").innerHTML = localStorage.getItem("number");
}

function saveArray() {
   var animals = [];
   for (var i = 1; i <= 5; i++) {
      var string = "array" + i;
      var checkbox = document.getElementById(string);
      if (checkbox.checked) {
         animals.push(checkbox.value);
      }
   }
   //var jsonAnimals = JSON.stringify(animals);
   localStorage.setItem("animals", animals);
}

function loadArray() {
   document.getElementById("loadedArray").innerHTML = localStorage.getItem("animals");
}