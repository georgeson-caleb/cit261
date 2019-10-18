function performAjaxRequest(key) {
   var weather;
   var queryString = "https://api.openweathermap.org/data/2.5/weather?q=Barranquilla&units=imperial&apikey=" + key;
   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        weather = JSON.parse(this.responseText);
        console.log(this.responseText);
        displayWeather(weather);
      }
    };
    xhttp.open("GET", queryString, true);
    xhttp.send();
}

function getKey() {
   var apiKey;
   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        performAjaxRequest(this.responseText);
      }
    };
    xhttp.open("GET", "apiKey.php", true);
    xhttp.send();
} 

function displayWeather(weather) {
   var string = "City: " + weather.name + "<br>Temp: " + weather.main.temp;
   document.getElementById("weather").innerHTML = string;
}