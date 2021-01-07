const counter = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');
const img = function (){
    cookie.width = 200;
}

const speed = document.getElementById('speed__counter');
let lastClicked = (new Date()).getTime();

cookie.onclick = function () {

    counter.textContent = Number(counter.textContent) + 1;

    cookie.width = cookie.width * 2;
    setTimeout(img, 100)

    let newClicked = (new Date()).getTime();
    let timeBetween = newClicked - lastClicked;
    lastClicked = newClicked;
    let clickSpeed = 1000 / timeBetween;
    speed.textContent = clickSpeed.toFixed(2);
}

