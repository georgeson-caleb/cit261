class Student {
   firstName;
   lastName;
   ageGroup;
   description;
   days;
   time;
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

var time = '';
function selectTime(elem) {
   var times = document.getElementById("timeSelection").childNodes;
   
   for (var i = 0; i < times.length; i++) {
      if (times[i].tagName == "DIV") {
         deselect(times[i]);
      }
   }
   select(elem);
   time = elem.innerHTML;
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
   student.days = getDays();
   student.time = time;
   saveStudentInfo(student);
}

function getDays() {
   var days = [];
   if (Monday) {
      days.push("Monday");
   }
   if (Tuesday) {
      days.push("Tuesday");
   }
   if (Wednesday) {
      days.push("Wednesday");
   }
   if (Thursday) {
      days.push("Thursday");
   }
   if (Friday) {
      days.push("Friday");
   }

   return days;
}

function saveStudentInfo(student) {
   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
         updateResponse(JSON.parse(this.responseText));
         showResponse();
      }
   }
   xhttp.open("POST", "saveStudentInfo.php", true);
   xhttp.send(JSON.stringify(student));
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

function updateResponse(response) {
   document.getElementById("firstNameResponse").innerHTML = response.firstName;
   document.getElementById("timeResponse").innerHTML = response.time;
   var dayString = "";
   for (var i = 0; i < response.days.length; i++) {
      dayString += (i < (response.days.length - 1)) ? response.days[i] + ", " : response.days[i];
   }
   document.getElementById("dayResponse").innerHTML = dayString;
}

function showResponse() {
   document.getElementById("slide2").classList.add("slideLeftDisappear");
   document.getElementById("slide3").style.display = "block";
   document.getElementById("slide3").classList.add("slideLeftAppear");
}