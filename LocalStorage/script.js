var data;
class Thing {
   name;
   color;
   size;
}

function storeData(key, data) {
   localStorage.setItem(key, data);
}

function retrieveData(key) {
   key = document.getElementById("key").value;
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
   console.log(string);
   document.getElementById("thing").innerHTML = string;
}