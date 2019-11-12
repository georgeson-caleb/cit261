document.getElementById("canvas").addEventListener('touchstart', processTouch(ev), false);

function processTouch(ev) {
   console.log(ev);
}

function initializeEventListener() {
   document.getElementById("canvas").addEventListener('touchstart', processTouch(ev), false);
}