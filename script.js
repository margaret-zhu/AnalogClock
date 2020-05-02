const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

function runTheClock() {
    var date = new Date();
    console.log(date); //prints out current date and time for reference
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);

    let hrPosition = (hr*360/12)+(min*(360/60)/12); //allows hour hand to move with regard to minute hand
    let minPosition = (min*360/60)+(sec*(360/60)/60); //allows minute hand to move with regard to second hand
    let secPosition = sec*360/60;

    //updates the three different hands accordingly
    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)"; 
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

var interval = setInterval(runTheClock, 1000); //updates clock every second 
