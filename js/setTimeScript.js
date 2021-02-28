

//retrieve the time from session storage
var time = sessionStorage.preperationTime;
//store all month names in an array 
var months = ["Jan", "Feb", "March", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
//javascript date object
var dateObj = new Date();
//get todays day (1-31)
var day = dateObj.getDate();
if (time.includes("Tomorrow")) {
    day = day + 1;
}
//get todays month(0-11) and get the correct month name from the months array
var month = months[dateObj.getMonth()]

//just keep the hours and am/pm
var shortTime = time.replace("Today", "");
shortTime = shortTime.replace("Tomorrow", "")

//put together the full time string
var fullTime = month + " " + day + " " + shortTime;

//grab the html element that shows the time
var timeLabel = document.getElementsByClassName("TIME");


//Option 2, Use month and day, remove Today/Tomorrow
//Output will be something like "Nov 24 8:00 AM"
timeLabel[0].innerHTML = fullTime;

for (var i = 1; i < timeLabel.length; i++) {
    timeLabel[i].addEventListener("click", saveTime);
    timeLabel[i].innerHTML = getTimeSlot(i);
}

function getTimeSlot(index) {
    var date = new Date();


    //increase the time based on which time slot we are updating by a specified interval
    date.setMinutes(date.getMinutes() + index * 60);

    //store the current minutes
    var minutes = date.getMinutes();

    //adjust the minutes to the nearest half hour or full hour
    if (minutes < 30) {
        minutes = 0;
    }
    //update the hour value as well if the minutes are rounded up
    else {
        minutes = 0;
        date.setHours(date.getHours() + 1);
    }

    //store the hour value
    var hour = date.getHours();
    //check if the hour value coresponds to am or pm and store the result
    var ampm = hour >= 12 ? "pm" : "am";
    //convert 24 hour time to 12 hour time(more common and familiar to users)
    hour = hour % 12;
    //if the hour is 0(false boolean value) change it to 12
    hour = hour ? hour : 12;
    //append the minute value to a 0 if it is lower than 10
    minutes = minutes < 10 ? '0' + minutes : minutes;

    var monthLocal = months[date.getMonth()];
    var today = date.getDate();
    //put together the time string
    var timeString = monthLocal + " " + today + " " + hour + ":" + minutes + " " + ampm;

    //now we check if the time slot is for the current day or next day
    //we append either Today or Tomorrow to the time string accordingly
    // if (date.getDay() == today) {
    //     timeString += " Today";
    // }
    // else {
    //     timeString += " Tomorrow";
    // }

    //return the completed time string
    return timeString;
}

function saveTime() {
    var newTime = this.innerHTML;
    sessionStorage.preperationTime = newTime.substring(6);
    timeLabel[0].innerHTML = newTime;
}