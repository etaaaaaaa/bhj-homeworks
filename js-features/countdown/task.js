const timer = document.getElementById("timer");

const addTimer = function() {

    timer.textContent = timer.textContent - 1;

}

let interval = setInterval(() => {
addTimer()
}, 1000);

const milliseconds = timer.textContent * 1000;
setTimeout(function() {alert('u won'); clearInterval(interval)}, milliseconds)