var townObj = new XMLHttpRequest();
townObj.open('GET', 'https://byui-cit230.github.io/weather/data/towndata.json');

townObj.send();

townObj.onload = function () {
    var townInfo = JSON.parse(townObj.responseText);
    console.log(townInfo);
    /*------Springfield Town Info------*/
    document.getElementById('city-name-s').innerHTML = townInfo.towns[3].name;
    document.getElementById('town-motto-s').innerHTML = townInfo.towns[3].motto;
    document.getElementById('town-events-s').innerHTML = townInfo.towns[3].events[0];
    document.getElementById('town-events-s1').innerHTML = townInfo.towns[3].events[1];
    document.getElementById('town-events-s2').innerHTML = townInfo.towns[3].events[2];
    document.getElementById('town-year-s').innerHTML = townInfo.towns[3].yearFounded;
    document.getElementById('town-pop-s').innerHTML = townInfo.towns[3].currentPopulation;
    document.getElementById('town-rain-s').innerHTML = townInfo.towns[3].averageRainfall;
}
