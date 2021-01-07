const deadCounter = document.getElementById("dead");
const missedCounter = document.getElementById('lost');

getHole = index => document.getElementById(`hole${index}`);

for (let i = 1; i < 10; i++) {
    getHole(i).onclick = function () {

        if (getHole(i).className === 'hole hole_has-mole') {
            deadCounter.textContent = Number(deadCounter.textContent) + 1;
             if (Number(deadCounter.textContent) === 10) {
                 alert('u won!');
             }
        } else {
            missedCounter.textContent = Number(missedCounter.textContent) + 1;
             if (Number(missedCounter.textContent) === 5) {
                 alert('u lost! :(');
                 deadCounter.textContent = 0;
                 missedCounter.textContent = 0;
             }
        }
    }
}
