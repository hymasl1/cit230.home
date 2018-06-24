var townObj = new XMLHttpRequest();
townObj.open('GET', 'https://byui-cit230.github.io/weather/data/towndata.json');

townObj.send();

townObj.onload = function () {
    var townInfo = JSON.parse(townObj.responseText);
    console.log(townInfo);
    /*------Franklin Town Info------*/
    document.getElementById('city-name-f').innerHTML = townInfo.towns[0].name;
    document.getElementById('town-motto-f').innerHTML = townInfo.towns[0].motto;
    document.getElementById('town-events-f').innerHTML = townInfo.towns[0].events[0];
    document.getElementById('town-events-f1').innerHTML = townInfo.towns[0].events[1];
    document.getElementById('town-events-f2').innerHTML = townInfo.towns[0].events[2];
    document.getElementById('town-year-f').innerHTML = townInfo.towns[0].yearFounded;
    document.getElementById('town-pop-f').innerHTML = townInfo.towns[0].currentPopulation;
    document.getElementById('town-rain-f').innerHTML = townInfo.towns[0].averageRainfall;
}
