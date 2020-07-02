// Selecting the arms
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

function runTheClock() {
    // Creating date object
    const date = new Date();

    // Getting hours(0–23), minutes(0–59) and seconds(0–59)
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    // For every second, the second-arm moves 6 (360 / 60) degree
    let secPosition = sec * 6;

    // For every minute, the minute-arm moves 6 (360 / 60) degree like seconds
    // Here we also change the minute-arm in accordance with the seconds to make it more precise
    let minPosition = min * 6 + secPosition / 60;

    // Here seconds is negligible
    // For every hour, the hour-arm moves 30 (360 / 12) degree
    // We also have to change the hour-arm in accordance with the minutes and seconds
    let hrPosition = hr * 30 + minPosition / 12;

    // Setting the position of the arms after updated info
    HOURHAND.style.transform = `rotate(${hrPosition}deg)`;
    MINUTEHAND.style.transform = `rotate(${minPosition}deg)`;
    SECONDHAND.style.transform = `rotate(${secPosition}deg)`;
}

// Running the clock after every 1 seconds
setInterval(runTheClock, 1000);

// Things to Note:
// 60 sec = 1 min || 60 min = 1 hr

// When calculating degree
// 60 sec || 60 min || 12 hr
// 360/60 || 360/60 || 360/12
