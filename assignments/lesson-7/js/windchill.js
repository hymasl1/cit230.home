    var high = parseFloat(document.getElementById("high").innerHTML);
    var low = parseFloat(document.getElementById("low").innerHTML);
    var wind = parseFloat(document.getElementById("wind").innerHTML);
    var avrg = (high + low) / 2;

    var chill = 35.74 + (0.6215 * avrg) - (35.75 * Math.pow(wind, 0.16)) + (0.4275 * avrg * (Math.pow(wind, 0.16)));
    
    document.getElementById("chill").innerHTML = Math.round(chill);
