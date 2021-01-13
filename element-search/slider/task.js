const next = document.querySelector('.slider__arrow_next');
const prev = document.querySelector('.slider__arrow_prev');

next.onclick = function() {

        const active = document.querySelector('.slider__item_active');
        const newCount = document.querySelector('.slider__item');


        if (active.nextElementSibling === null) {
            newCount.className = 'slider__item slider__item_active';
            active.className = 'slider__item';
        } else {
            active.nextElementSibling.className = 'slider__item slider__item_active';
            active.className = 'slider__item';
        }

}

prev.onclick = function() {

    const active = document.querySelector('.slider__item_active');
    const newCount = document.querySelector('.slider__items').lastElementChild;


    if (active.previousElementSibling === null) {
        newCount.className = 'slider__item slider__item_active';
        active.className = 'slider__item';
    } else {
        active.previousElementSibling.className = 'slider__item slider__item_active';
        active.className = 'slider__item';
    }

}