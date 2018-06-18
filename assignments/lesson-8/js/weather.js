var weatherObject = new XMLHttpRequest();
weatherObject.open('GET','http://api.openweathermap.org/data/2.5/weather?zip=83448,us&appid=c0fec883e727184c603e8a3cc5d88e5d&units=imperial',true);

weatherObject.send();

weatherObject.onload = function() {
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    
    document.getElementById('place').innerHTML = weatherInfo.name;
    document.getElementById('temp').innerHTML = weatherInfo.main.temp;
    document.getElementById('wind').innerHTML = weatherInfo.wind.speed;
    
    var iconcode = weatherInfo.weather[0].icon;
    var icon_path = "http://openweathermap.org/img/w/" + iconcode + ".png";
    document.getElementById('weather_icon').src = icon_path;
    
} // end of function