var totalCost = 0.00;

function addElement() {
   var name = document.getElementById("expenseName").value;
   var cost = document.getElementById("expenseCost").value;

   var element = "<tr><td>" + name + "</td><td>$<span class=\"right-align\">" + cost + "</span></td></tr>";
   document.getElementById("elements").innerHTML += element;

   updateTotalCost(cost);
}

function updateTotalCost(cost) {
   totalCost += Number(cost);
   document.getElementById("totalCost").innerHTML = totalCost;
}

function validateCost() {

}