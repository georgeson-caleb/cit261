function drawRect() {
   var canvas = document.getElementById("myCanvas");
   var ctx = canvas.getContext("2d");
   ctx.fillStyle = "#FF0000";
   var i = 0;
   for (i; i < 500; i++) {
      ctx.fillRect(0, 0, i, 80);
   }
}