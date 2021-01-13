const close = document.querySelectorAll('.modal__close');
const container = document.getElementById('modal_main')
const showSuccess = document.querySelector('.show-success');
const secondContainer = document.getElementById('modal_success');

//probably not very efficient?
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        container.className = 'modal';
        secondContainer.className = 'modal';
    }
}

showSuccess.onclick = function () {
    secondContainer.className = 'modal modal_active';
}