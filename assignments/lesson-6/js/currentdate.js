function currentDate() {
    var d = new Date();
    var day = d.getDay();
    var month = d.getMonth();
    var year = d.getYear();
    var dom = d.getDate();
    if (year < 1000) {
        year += 1900
    }
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var monthday = new Array(12)
    monthday[0] = "Januray";
    monthday[1] = "February";
    monthday[2] = "March";
    monthday[3] = "April";
    monthday[4] = "May";
    monthday[5] = "June";
    monthday[6] = "July";
    monthday[7] = "August";
    monthday[8] = "September";
    monthday[9] = "October";
    monthday[10] = "November";
    monthday[11] = "December";

    var n = weekday[day] + " " + dom + ", " + monthday[month] + " " + year;

    document.getElementById("c").innerHTML = n;
}
