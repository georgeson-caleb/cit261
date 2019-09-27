var totalCost = 0.00;

function addElement() {
   var name = document.getElementById("expenseName").value;
   var cost = document.getElementById("expenseCost").value;

   var element = "<td>" + name + "</td><td>" + cost + "</td>";
   document.getElementById("elements").innerHTML += element;

   updateTotalCost(cost);
}

function updateTotalCost(cost) {
   totalCost += cost;
   document.getElementById("totalCost").innerHTML = "$" + totalCost;
}