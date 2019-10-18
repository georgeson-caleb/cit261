function performAjaxRequest() {
   var weather;
   var queryString = "https://api.openweathermap.org/data/2.5/weather?q=Barranquilla&units=imperial&apikey=" + getKey();
   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        weather = JSON.parse(this.responseText);
      }
    };
    xhttp.open("GET", queryString, true);
    xhttp.send();

    var string = "City: " + weather.city + "<br>Temp: " + weather.maxTemp;
    document.getElementById("weather").innerHTML = string;
}

function getKey() {
   var apiKey;
   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        apiKey = this.responseText;
      }
    };
    xhttp.open("GET", "apiKey.txt", true);
    xhttp.send();

    return apiKey;
}