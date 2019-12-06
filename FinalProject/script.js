class Student {
   firstName;
   lastName;
   ageGroup;
   description;
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
   document.getElementById("slide2").classList = "slideLeftAppear";
}

function slide2Left() {
   document.getElementById("slide2").style.display = "block";
   document.getElementById("slide2").classList = "slideLeftAppear";
}