var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', 'http://api.openweathermap.org/data/2.5/weather?id=4156210&appid=c0fec883e727184c603e8a3cc5d88e5d&units=imperial', true);

weatherRequest.send();

weatherRequest.onload = function () {
    var weatherInfo = JSON.parse(weatherRequest.responseText);
    console.log(weatherInfo);

    document.getElementById('currentTemp').innerHTML = weatherInfo.main.temp;

}
