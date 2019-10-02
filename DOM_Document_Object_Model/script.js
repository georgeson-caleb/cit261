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
   document.getElementById("stuff").insertBefore(textNode, stuff[1]);
}

function removeChildExample() {
   var item = document.getElementById("stuff");
   if (item.hasChildNodes()) {
      item.removeChild(item[0]);
   }
}