const close = document.querySelectorAll('.modal__close');
const container = document.getElementById('modal_main')
const showSuccess = document.querySelector('.show-success');
const secondContainer = document.getElementById('modal_success');

//probably not very efficient?
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        container.classList.toggle('modal_active', false);
        secondContainer.classList.toggle('modal_active', false);
    }
}

showSuccess.onclick = function () {
    secondContainer.classList.toggle('modal_active', true);
    container.classList.toggle('modal_active', false);
}