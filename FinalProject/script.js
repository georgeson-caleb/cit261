class Student {
   firstName;
   lastName;
   ageGroup;
   description;
}

var Monday = false;
var Tuesday = false;
var Wednesday = false;
var Thursday = false;
var Friday = false;

function selectDay(elem) {
   var day = elem.innerHTML;
   if (day == "Monday") {
      if (Monday == true) {
         Monday = false;
         deselect(elem);
      } else {
         Monday = true;
         select(elem);
      }
   } else if (day == "Tuesday") {
      if (Tuesday == true) {
         Tuesday = false;
         deselect(elem)
      } else {
         Tuesday = true;
         select(elem)
      }         
   } else if (day == "Wednesday") {
      if (Wednesday == true) {
         Wednesday = false;
         deselect(elem)
      } else {
         Wednesday = true;
         select(elem)
      }         
   } else if (day == "Thursday") {
      if (Thursday == true) {
         Thursday = false;
         deselect(elem)
      } else {
         Thursday = true;
         select(elem)
      }      
   } else if (day == "Friday") {
      if (Friday == true) {
         Friday = false;
         deselect(elem)
      } else {
         Friday = true;
         select(elem)
      }      
   }
}

function play(note) {
   document.getElementById(note).play();
}

function disable(elem) {
   elem.style.display = "none";
}

function enable(elem) {
   elem.style.display = "block";
}

function register() {
   var student = new Student();
   student.firstName = document.getElementById("firstName").value;
   student.lastName = document.getElementById("lastName").value;
   student.ageGroup = document.getElementById("ageGroup").value;
   student.description = document.getElementById("description").value;
   saveStudentInfo(student);
}

function saveStudentInfo(student) {
   console.log(student);
}

function startLoadingTransition() {
   var obj = document.getElementById("loadingScreen");
   obj.style.opacity = "100%";
   obj.style.transform = "translate(50%, 200px)";
}

function showPage() {
   document.getElementById("loadingScreen").style.display = "none";
   document.getElementById("piano").style.display = "flex";
   document.getElementById("registration").style.display = "block";
   document.getElementById("header").style.display = "block";
}

function slide1Left() {
   document.getElementById("slide1").classList = "slideLeftDisappear";
   document.getElementById("slide2").style.display = "block";
   document.getElementById("slide2").classList += " slideLeftAppear";
}

function wiggleDiv(elem) {
   elem.classList += " wiggle";
}

function undoWiggle(elem) {
   elem.classList.remove("wiggle");
}

function select(elem) {
   elem.style.backgroundColor = "#d64e4e";
   elem.style.borderColor = "#fa5757";
   elem.style.width = "70%";
   elem.style.height = "40px";
}

function deselect(elem) {
   elem.style.backgroundColor = "#fa5757";
   elem.style.borderColor = "#d64e4e";
   elem.style.width = "50%";
   elem.style.height = "30px";
}