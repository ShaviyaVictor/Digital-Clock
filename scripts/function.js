function updateTime () {
    //get all parts of the current time
    var now = new Date();
    var hours = now.getHours ();
    var minutes = now.getMinutes ();
    var seconds = now.getSeconds ();
    // add zero's to minutes and seconds when value is below 10
    if (minutes <10){
        minutes = '0' + minutes;
    }
    if (seconds <10){
        seconds = "0" + seconds;
    }
    //get time of the day (in terms of am or pm)
    if (hours >= 12 && hours <24) {
        var timeOfDay = 'pm';
    }
    else{
        var timeOfDay = 'am';
    }
    //convert to 12 hour clock system
   /* if (hours > 12) {
        hours = hours-12;
    }*/
    //splice them together into a character string named 'current'
    var currentTime = hours + ':' + minutes + ':' + seconds + '';
    //get the div with id = clock
    var myClock = document.getElementById ('clock');
    //write the currentTime string to the div with id clock
    myClock.innerHTML = currentTime;
}
window.onload = function () {
    //wait until the page loads
    //then call the updateTime () function every 1000 milliseconds
    setInterval ('updateTime ()', 1000);
}