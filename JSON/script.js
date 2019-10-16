class Object {
   name;
   shape;
   color;
   things;
}

function parseObject() {
   var object = new Object();
   object.name = document.getElementById("name").value;
   object.shape = document.getElementById("shapes").value;
   object.color = document.getElementById("color").value;
   object.things = new Array();

   //Add the things to the list
   var checkBox = document.getElementById("checkBox");
   for (var i = 0; i < checkBox.childNodes.length; i++) {
      if (checkBox.childNodes[i].childNodes[0].checked) {
         object.things.push(checkBox.childNodes[i].chileNodes[0].value);
      }
   }

   var parsedObject = JSON.parse(object);
   document.getElementById("objectPlace").innerHTML = parsedObject;
}