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
   displayPlayerStats() {
      document.getElementById("health").innerHTML = health;
      document.getElementById("weapon").innerHTML = weapon;
      document.getElementById("armor").innerHTML = armor;
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
         case "Rusty Sword":
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
         case "Iron Axe":
            damage = 10;
            hit = roll() + 2;
            break;
         case "Javelin":
            damage = 5;
            hit = roll() + 3;
            break;
         case "Steel Mace":
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
 * Takes a string as a paramater and 
 * adds it to the game div
 ***********************************/
function displayText(text) {
   var node = document.createElement("P");
   var textNode = document.createTextNode(text);
   node.appendChild(textNode);
   document.getElementById("game").appendChild(node);
}

/*************************************
 * Fetches the value of the input box
 * and resets it
 *************************************/
function getInput() {
   var input = document.getElementById("option").value;
   document.getElementById("option").value = "";

   return input;
}

/*************************************
 * Lets other functions know when the 
 * button gets clicked
 *************************************/
var clicked = false;
function buttonClick() {
   clicked = true;
}

function isClicked() {
   return clicked;
}

function game() {
   // Wait for the button to be clicked
   while(isClicked()) {}
   clicked = false;

   displayText("Button was clicked");
}