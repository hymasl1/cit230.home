 var townObj = new XMLHttpRequest();
 townObj.open('GET', 'https://byui-cit230.github.io/weather/data/towndata.json');

 townObj.send();

 townObj.onload = function () {
     var townInfo = JSON.parse(townObj.responseText);
     console.log(townInfo);
     /*------Franklin Town Info------*/
     document.getElementById('townf-name').innerHTML = townInfo.towns[0].name;
     document.getElementById('townf-motto').innerHTML = townInfo.towns[0].motto;
     document.getElementById('townf-founded').innerHTML = townInfo.towns[0].yearFounded;
     document.getElementById('townf-population').innerHTML = townInfo.towns[0].currentPopulation;
     document.getElementById('townf-rainfall').innerHTML = townInfo.towns[0].averageRainfall;
     document.getElementById('eventf1').innerHTML = townInfo.towns[0].events[0];
     document.getElementById('eventf2').innerHTML = townInfo.towns[0].events[1];
     document.getElementById('eventf3').innerHTML = townInfo.towns[0].events[2];


     /*------Greenville Town Info------*/
     document.getElementById('towng-name').innerHTML = townInfo.towns[1].name;
     document.getElementById('towng-motto').innerHTML = townInfo.towns[1].motto;
     document.getElementById('towng-founded').innerHTML = townInfo.towns[1].yearFounded;
     document.getElementById('towng-population').innerHTML = townInfo.towns[1].currentPopulation;
     document.getElementById('towng-rainfall').innerHTML = townInfo.towns[1].averageRainfall;
     document.getElementById('eventg1').innerHTML = townInfo.towns[1].events[0];
     document.getElementById('eventg2').innerHTML = townInfo.towns[1].events[1];
     document.getElementById('eventg3').innerHTML = townInfo.towns[1].events[2];

     /*------Springfield Town Info------*/
     document.getElementById('towns-name').innerHTML = townInfo.towns[3].name;
     document.getElementById('towns-motto').innerHTML = townInfo.towns[3].motto;
     document.getElementById('towns-founded').innerHTML = townInfo.towns[3].yearFounded;
     document.getElementById('towns-population').innerHTML = townInfo.towns[3].currentPopulation;
     document.getElementById('towns-rainfall').innerHTML = townInfo.towns[3].averageRainfall;
     document.getElementById('events1').innerHTML = townInfo.towns[3].events[0];
     document.getElementById('events2').innerHTML = townInfo.towns[3].events[1];
     document.getElementById('events3').innerHTML = townInfo.towns[3].events[2];
 }
