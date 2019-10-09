var scenario = {
   one: {
      text: "Choose your weapon: ",
      buttons: [["Rusty Sword", "setWeapon(weapons.rustySword),advanceTo(scenario.two)"],
                ["Iron Sword", "setWeapon(weapons.ironSword),advanceTo(scenario.two)"]]
   },
   two: {
      text: "Yay! It works!",
      buttons: [["Start Over", ""]]
   }
}

var weapons = {
   rustySword: "Rusty Sword",
   ironSword:  "Iron Sword",
}

function displayText(text) {
   var game = document.getElementById("game");
   var node = document.createElement("node");
   var textElement = document.createTextNode(text);
   node.appendChild(textElement);
   game.appendChild(node);
}

function showButtons(buttons) {
   var userInput = document.getElementById("userInput");
   userInput.innerHTML = "";
   for (var i = 0; i < buttons.length; i++) {
      userInput.innerHTML += "<button onclick=\"" + buttons[i][1] +
         "\">" + buttons[i][0] + "</button>";
   }
}

function advanceTo(x) {
   displayText(x.text);
   showButtons(x.buttons);
}

//advanceTo(scenario.one);