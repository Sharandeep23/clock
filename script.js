// Selecting the arms
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

// Creating date object
const date = new Date();

// Getting hours, minutes and seconds
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

// Here seconds is negligible
// For every hour, the hour-arm moves 30 degree
// We have to change the hour-arm in accordance with the minutes
let hrPosition = hr * (360 / 12) + min * (360 / 12 / 60);

// For every minute, the minute-arm moves 6 degree like seconds
// Here we also change the minute-arm in accordance with the seconds to make it more precise
let minPosition = min * (360 / 60) + sec * (360 / 60 / 60);

// For every second, the second-arm moves 6 degree
let secPosition = sec * (360 / 60);

// Initial Clock
setPosition();

// Running the clock every other second
setInterval(runTheClock, 1000);

function runTheClock() {
    // Moving positins for each seconds

    hrPosition += 30 / 60 / 60;
    minPosition += 6 / 60;
    secPosition += 6;

    // Setting the position of the arms after updated info
    setPosition();
}

function setPosition() {
    HOURHAND.style.transform = `rotate(${hrPosition}deg)`;
    MINUTEHAND.style.transform = `rotate(${minPosition}deg)`;
    SECONDHAND.style.transform = `rotate(${secPosition}deg)`;
}
