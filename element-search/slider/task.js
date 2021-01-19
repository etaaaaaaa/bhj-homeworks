const nextButton = document.querySelector('.slider__arrow_next');
const prevButton = document.querySelector('.slider__arrow_prev');
const itemsArray = Array.from(document.querySelectorAll('.slider__item'));

console.log(itemsArray);

nextButton.onclick = function () {
    const currentSlide = (element) => element.classList.contains('slider__item_active');
    let activeSlideIndex = itemsArray.findIndex(currentSlide);

    itemsArray[activeSlideIndex].classList.remove('slider__item_active');
    (activeSlideIndex < itemsArray.length - 1) ? activeSlideIndex++ : activeSlideIndex = 0;
    itemsArray[activeSlideIndex].classList.add('slider__item_active');
}

prevButton.onclick = function () {
    const currentSlide = (element) => element.classList.contains('slider__item_active');
    let activeSlideIndex = itemsArray.findIndex(currentSlide);

    itemsArray[activeSlideIndex].classList.remove('slider__item_active');
    (activeSlideIndex <= 0) ? activeSlideIndex = itemsArray.length - 1 : activeSlideIndex--;
    itemsArray[activeSlideIndex].classList.add('slider__item_active');
}





