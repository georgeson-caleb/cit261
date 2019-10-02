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
   console.out(list.childNodes[1].value);
   list.insertBefore(node, list.childNodes[1]);
}

function removeChildExample() {
   var item = document.getElementById("stuff");
   item.removeChild(item.childNodes[0]);
}