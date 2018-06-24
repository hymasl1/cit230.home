var townObj = new XMLHttpRequest();
townObj.open('GET', 'https://byui-cit230.github.io/weather/data/towndata.json');

townObj.send();

townObj.onload = function () {
    var townInfo = JSON.parse(townObj.responseText);
    console.log(townInfo);
    /*------Greenville Town Info------*/
    document.getElementById('city-name-g').innerHTML = townInfo.towns[1].name;
    document.getElementById('town-motto-g').innerHTML = townInfo.towns[1].motto;
    document.getElementById('town-events-g').innerHTML = townInfo.towns[1].events[0];
    document.getElementById('town-events-g1').innerHTML = townInfo.towns[1].events[1];
    document.getElementById('town-events-g2').innerHTML = townInfo.towns[1].events[2];
    document.getElementById('town-year-g').innerHTML = townInfo.towns[1].yearFounded;
    document.getElementById('town-pop-g').innerHTML = townInfo.towns[1].currentPopulation;
    document.getElementById('town-rain-g').innerHTML = townInfo.towns[1].averageRainfall;
}