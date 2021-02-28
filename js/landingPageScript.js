//javascript animations for landing page. Done by Felix Wedel

//detect when a user clicks the button to show later time options
document.getElementById("later-btn").addEventListener("click", expandTimeTable);
document.getElementById("start-now-btn").addEventListener("click", saveCurrentTime);


var timeOptions = document.getElementsByClassName("time-option");

var currTime = "";
for (var i = 0; i < timeOptions.length; i++) {
    timeOptions[i].innerHTML = getTimeSlot(i);
    timeOptions[i].addEventListener("click", saveTime);
    currTime = getCurrTime();
}



//show the user the time table when the show later times button is clicked
function expandTimeTable() {
    //store relevent html elents as variables
    var laterBtn = document.getElementById("later-btn");
    var btnWrapper = document.getElementById("button-wrapper");
    var timeOptionsWrapper = document.getElementById("time-options-wrapper");

    //check which state the button is in when it was clicked

    //button clicked when in default state. Make the list of times visible
    if (laterBtn.innerHTML.search("View Available Times") != -1) {
        //change the button text to inform user of new button functionality
        laterBtn.innerHTML = 'Hide Available Times<br><i id="drop-down-icon" class="fas fa-angle-up">';
        //increase the size of the button wrapper to make space for the list of available times
        btnWrapper.style.height = "500px";
        //make the list of time options visible
        timeOptionsWrapper.style.visibility = "visible";
        timeOptionsWrapper.style.opacity = "1";
        //transition time needs to change depending on whether or not the list is being made visible or invisible
        timeOptionsWrapper.style.transition = " opacity 3s";
    }
    //button clicked in secondary state. Hide the list of times
    else {
        //change the button text back to default
        laterBtn.innerHTML = 'View Available Times<br><i id="drop-down-icon" class="fas fa-angle-down">';
        //shrink the button wrapper back down
        btnWrapper.style.height = "200px"
        //change the transition time. List needs to fade out faster when being hidden
        timeOptionsWrapper.style.transition = "opacity 0.5s";
        //make the list invisible
        timeOptionsWrapper.style.opacity = "0";
    }
}

//Generate a string for the inner html of the time options
//accepts the index of the current option in the list
//returns a string with information for a specific time slot
function getTimeSlot(index) {
    //create a new date object and store the current day
    var date = new Date();
    var today = date.getDay();

    //increase the time based on which time slot we are updating by a specified interval
    date.setMinutes(date.getMinutes() + (index + 1) * 60);

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
    //put together the time string
    var timeString = hour + ":" + minutes + " " + ampm;

    //now we check if the time slot is for the current day or next day
    //we append either Today or Tomorrow to the time string accordingly
    if (date.getDay() == today) {
        timeString += " Today";
    }
    else {
        timeString += " Tomorrow";
    }

    //return the completed time string
    return timeString;
}

function saveTime() {
    if (typeof (Storage) != undefined) {
        sessionStorage.preperationTime = this.innerHTML;
    }
}

function getCurrTime() {
    //create a new date object and store the current day
    var date = new Date();
    var today = date.getDay();


    //store the current minutes
    var minutes = date.getMinutes();

    //adjust the minutes to the nearest half hour or full hour

    //update the hour value as well if the minutes are rounded up
    if (minutes > 0) {
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
    //put together the time string
    var timeString = hour + ":" + minutes + " " + ampm;

    //now we check if the time slot is for the current day or next day
    //we append either Today or Tomorrow to the time string accordingly
    if (date.getDay() == today) {
        timeString += " Today";
    }
    else {
        timeString += " Tomorrow";
    }

    //return the completed time string
    return timeString;
}

function saveCurrentTime() {
    if (typeof (Storage) != undefined) {
        sessionStorage.preperationTime = currTime;
    }
    window.location = "html/restaurant.html";
}
