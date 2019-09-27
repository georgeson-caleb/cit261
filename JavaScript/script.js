var totalCost = 0.00;

function addElement() {
   if (validateCost()) {
      var name = document.getElementById("expenseName").value;
      var cost = document.getElementById("expenseCost").value;

      var element = "<tr><td>" + name + "</td><td>$<span class=\"right-align\">" + cost + "</span></td></tr>";
      document.getElementById("elements").innerHTML += element;

      updateTotalCost(cost);

      document.getElementById("expenseName").value = "";
      document.getElementById("expenseCost").value = "";
   }
}

function updateTotalCost(cost) {
   totalCost += Number(cost);
   document.getElementById("totalCost").innerHTML = totalCost;
}

function validateCost() {
   var value = document.getElementById("expenseCost").value;
   var patt = new RegExp("\D");
   if (patt.test(value)) {
      document.getElementById("expenseCost").style.backgroundColor = "#c32323";
      document.getElementById("expenseCost").style.borderBottom = "2px solid red";
      document.getElementById("expenseCost").value = "Must enter a number!";
      return false;
   } else {
      document.getElementById("expenseCost").style.backgroundColor = "white";
      document.getElementById("expenseCost").style.borderBottom = "1px solid black";
      return true;
   }
}