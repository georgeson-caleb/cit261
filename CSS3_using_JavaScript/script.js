var iBorder = 0;

function changeBorder() {
   var borders = ["2px solid black", "5px dotted red", "10px ridged blue"]

   var selection = iBorder % borders.length;

   document.getElementById("example").style.border = borders[selection];

   iBorder++;
}