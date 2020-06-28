// Selecting the arms
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

// Creating date object
const date = new Date();

// Getting hours(0–23), minutes(0–59) and seconds(0–59)
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

// Here seconds is negligible
// For every hour, the hour-arm moves 30 degree
// We also have to change the hour-arm in accordance with the minutes
let hrPosition = hr * (360 / 12) + min * (360 / 12 / 60);

// For every minute, the minute-arm moves 6 degree like seconds
// Here we also change the minute-arm in accordance with the seconds to make it more precise
let minPosition = min * (360 / 60) + sec * (360 / 60 / 60);

// For every second, the second-arm moves 6 degree
let secPosition = sec * (360 / 60);

// Initial Clock
setPosition();

function runTheClock() {
    // Moving positins for 100 milliseconds

    hrPosition += (30 / 60 / 60) * 0.1;
    minPosition += (6 / 60) * 0.1;
    secPosition += 6 * 0.1;

    // Setting the position of the arms after updated info
    setPosition();
}

function setPosition() {
    HOURHAND.style.transform = `rotate(${hrPosition}deg)`;
    MINUTEHAND.style.transform = `rotate(${minPosition}deg)`;
    SECONDHAND.style.transform = `rotate(${secPosition}deg)`;
}

// Running the clock every 100 milliseconds
//As the trainsition takes 100 milliseconds we've to run the clock after that so that they don't get mix up.
setTimeout(() => {
    setInterval(runTheClock, 100);
}, 100);

//REMEMBER: Brower throttles the clock if you're not focusing, then the clock will give incorrect results
// It happens because the clock is handled over to the browser not the date object.
