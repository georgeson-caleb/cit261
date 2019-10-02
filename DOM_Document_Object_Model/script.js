function appendChildExample() {
   var node = document.createElement("LI");
   var textNode = document.createTextNode("boat");
   node.appendChild(textNode);
   document.getElementById("stuff").appendChild(node);
}