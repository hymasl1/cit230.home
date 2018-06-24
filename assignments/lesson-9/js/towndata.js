var townObj = new XMLHttpRequest();
townObj.open('GET', 'https://byui-cit230.github.io/weather/data/towndata.json');

townObj.send();

townObj.onload = function () {
    var townInfo = JSON.parse(townObj.responseText);
    console.log(townInfo);
    /*------Franklin Town Info------*/
    document.getElementById('city-name-f').innerHTML = townInfo.towns[0].name;
    document.getElementById('town-motto-f').innerHTML = townInfo.towns[0].motto;

    /*------Greenville Town Info------*/
    document.getElementById('city-name-g').innerHTML = townInfo.towns[1].name;
    document.getElementById('town-motto-g').innerHTML = townInfo.towns[1].motto;
    /*------Springfield Town Info------*/
    document.getElementById('city-name-s').innerHTML = townInfo.towns[3].name;
    document.getElementById('town-motto-s').innerHTML = townInfo.towns[3].motto;
}
