function appendChildExample() {
   var node = document.createElement("LI");
   var textNode = document.createTextNode("Boat");
   node.appendChild(textNode);
   document.getElementById("stuff").appendChild(node);
}

function insertBeforeExample() {
   var node = document.createElement("LI");
   var textNode = document.createTextNode("Plane");
   node.appendChild(textNode);
   var list = document.getElementById("stuff");
   var i = 0;
   for (var x in list.childNodes) {
      console.log(i, ": ", x.innerHTML);
      i++;
   }
   list.insertBefore(node, list.childNodes[2]);
}

function removeChildExample() {
   var item = document.getElementById("stuff");
   item.removeChild(item.childNodes[0]);
}