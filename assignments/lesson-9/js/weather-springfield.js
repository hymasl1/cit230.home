var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', 'http://api.openweathermap.org/data/2.5/weather?id=4156210&appid=c0fec883e727184c603e8a3cc5d88e5d&units=imperial', true);

weatherRequest.send();

weatherRequest.onload = function () {
    var weatherInfo = JSON.parse(weatherRequest.responseText);
    console.log(weatherInfo);

    document.getElementById('currentTemp').innerHTML = weatherInfo.main.temp;
    var high = parseFloat(document.getElementById('high').innerHTML = weatherInfo.main.temp_max);
    var low = parseFloat(document.getElementById('low').innerHTML = weatherInfo.main.temp_min);
    var wind = parseFloat(document.getElementById('wind').innerHTML = weatherInfo.wind.speed);

    var avrg = (high + low) / 2;
    var chill = 35.74 + (0.6215 * avrg) - (35.75 * Math.pow(wind, 0.16)) + (0.4275 * avrg * (Math.pow(wind, 0.16)));

    document.getElementById("chill").innerHTML = Math.round(chill);


    var iconcode = weatherInfo.weather[0].icon;
    var icon_path = "http://openweathermap.org/img/w/" + iconcode + ".png";
    document.getElementById('weather_icon').src = icon_path;
}
