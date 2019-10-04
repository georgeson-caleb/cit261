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
               damage = 100;
            } else if (hit == -1) {
               // There is also a small
               // chance that the Rusty
               // Sword will kill the player
               // automatically
               this.health = 0;
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
      } else if (hit > 10) {
         // Normal hit
         dragon.health -= damage;
      } else if (hit == 1) {
         // Critical fail
         this.health -= damage / 2;
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
      var damage = getRandInteger(1, max_damage);
      var hit = roll();
      if (hit == 20) {
         //Critical hit
         player.health -= damage + 10;
      } else if (hit > 12) {
         //Normal hit
         player.health -= damage;
      } else if (hit == 1) {
         // Critical fail
         this.health -= damage;
      }else {
         //miss
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