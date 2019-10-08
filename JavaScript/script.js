var player;
var dragon;

/**************************************************
 * Player
 * Implementation of the Player class
 **************************************************/
class Player {
   constructor() {
      var health = 50;
      var weapon = "";
      var armor = "";
   }

   /************************************
    * Displays the players stats
    ************************************/
   displayPlayerStats() {
      document.getElementById("health").innerHTML = health.value;
      document.getElementById("weapon").innerHTML = weapon.value;
      document.getElementById("armor").innerHTML = armor.value;
   }

   /************************************
    * Sets the players weapon
    ************************************/
   setWeapon(x) {
      this.weapon = x;
      advanceTo(scenario.two);
   }

   /************************************
    * The player attacks
    ************************************/
   attack(dragon) {
      displayText("You attack.");
      var damage = 0;
      var hit = 0;
      // Get the damage and roll for a hit
      switch (this.weapon) {
         case weapons.rustySword:
            damage = 5;
            hit = roll() - 2;
            if (hit == 18) {
               // There is a small chance
               // that the Rusty Sword
               // will kill the dragon
               // automatically
               // (Tetanus is very deadly!)
               damage = 100;
               displayText("The dragon gets tetanus and dies.");
            } else if (hit == -1) {
               // There is also a small
               // chance that the Rusty
               // Sword will kill the player
               // automatically
               this.health = 0;
               displayText("You get tetanus and die.")
            }
            break;
         case weapons.ironAxe:
            damage = 10;
            hit = roll() + 2;
            break;
         case weapons.javelin:
            damage = 5;
            hit = roll() + 3;
            break;
         case weapons.steelMace:
            damage = 20;
            hit = roll() - 2
         default:
            damage = 3;
            hit = roll();
            break;   
      }
      if (hit >= 20) {
         // Critical hit
         dragon.health -= damage + 20;
         displayText("Critical hit!");
      } else if (hit > 10) {
         // Normal hit
         dragon.health -= damage;
         displayText("You hit the dragon!");
      } else if (hit == 1) {
         // Critical fail
         this.health -= damage / 2;
         displayText("You miss and hit yourself. :(");
      } else {
         // Miss
         displayText("You missed.");
      }

      //Update the stats
      this.displayPlayerStats();
      dragon.displayDragonStats();

      //Check what happens next
      if (dragon.health <= 0) {
         // Dragon is dead
         advanceTo(scenario.seven)
      } else if (this.health <= 0) {
         advanceTo(scenario.six);
      } else {
         dragon.attack(this);
      }
   }
}

/*******************************************
 * Dragon
 * Implementation of the Dragon class
 *******************************************/
class Dragon {
   constructor() {
      var health = 200;
      var max_damage = 15;
      var armor = 30;
   }

   /****************************************
    * The Dragon attacks
    ****************************************/
   attack(player) {
      displayText("The dragon attacks.");
      var damage = getRandInteger(1, max_damage);
      var hit = roll();
      if (hit == 20) {
         //Critical hit
         player.health -= damage + 10;
         displayText("Critical hit!");
      } else if (hit > 12) {
         //Normal hit
         player.health -= damage;
         displayText("You get hit!");
      } else if (hit == 1) {
         // Critical fail
         this.health -= damage;
         displayText("The dragon misses and hits itself!");
      }else {
         //miss
         displayText("The dragon missed.");
      }
   }

   /**************************************
    * Show the Dragon's stats
    **************************************/
   displayDragonStats() {
      document.getElementById("dHealth").innerHTML = health;
   }
}


/***********************************
 * Simulates rolling a 20 sided die
 ***********************************/
function roll() {
   return Math.floor(Math.random() * (1 - 20) ) + 1;
}

/***********************************
 * Returns a random integer between 
 * the min and the max parameters
 ***********************************/
function getRandInteger(min, max) {
   return Math.floor(Math.random() * (min - max) + 1);
}


/***********************************
 * Takes a string as a parameter and 
 * adds it to the game div
 ***********************************/
function displayText(text) {
   var node = document.createElement("P");
   var textNode = document.createTextNode(text);
   node.appendChild(textNode);
   document.getElementById("game").appendChild(node);
}

/**********************************
 * Takes a list of buttons as a 
 * parameter and displays each button
 **********************************/
function showButtons(buttons) {
   var userInput = document.getElementById("userInput");
   userInput.innerHTML = "";
   for (var i = 0; i < buttons.length; i++) {
     userInput.innerHTML += "<button onClick="+buttons[i][1]+">" + buttons[i][0] + "</button>";
   };
};

function advanceTo(x) {
   var player;
   var dragon;
   if (x == scenario.one) {
      player = new Player();
      dragon = new Dragon();
   }
   displayText(x.text);
   showButtons(x.buttons);
   player.displayPlayerStats();
   dragon.displayDragonStats();
}

var scenario = {
   one: {
      text: "You find yourself in a dark tunnel with bones along the walls. " +
              "There are weapons on the ground. Which one do you pick?",
      buttons: [["Rusty Sword", "player.setWeapon(weapons.rustySword)"], 
                  ["Iron Axe", "player.setWeapon(weapons.ironAxe)"],
                  ["Javelin", "player.setWeapon(weapons.javelin)"],
                  ["Steel Mace", "player.setWeapon(weapons.steelMace)"]]
   },
   two: {
      text: "As you continue down the tunnel you enter a large tunnel lit by a " +
            "tall chandelier dangling from the ceiling.",
      button: ["Continue", "advanceto(scenario.three)"]
   },
   three: {
      text: "As you examine the chandelier, you realize that the chandelier is actually " + 
            "a dragon!",
      button: ["Continue", "advanceto(scenario.three)"]
   },
   four: {
      text: "The dragon jumps down and attacks!",
      button: [["Jump", "player.jump()"], ["Duck", "player.duck()"], ["Attack", "player.attack()"]]
   },
   five: {
      text: "What do you do?",
      button: [["Jump", "player.jump()"], ["Duck", "player.duck()"], ["Attack", "player.attack()"]]
   },
   six: {
      text: "You have died. What do you do?",
      button: [["Try again", "advanceTo(scenario.one)"], ["End game", "advanceTo(scenario.eight)"]]
   },
   seven: {
      text: "The dragon is dead! You won! What do you do?",
      button: [["Play again", "advanceTo(scenario.one)"], ["End game", "advanceTo(scenario.eight)"]]
   },
   eight: {
      text: "Thanks for playing!",
      buttons: []
   }
}

var weapons = { rustySword: 1, ironAxe: 2, javelin: 3, steelMace: 4 }