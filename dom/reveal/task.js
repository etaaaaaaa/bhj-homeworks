const theDiv = document.querySelector('.reveal');

const theDivs = document.querySelectorAll('.reveal');
const divArray = Array.from(theDivs);

window.addEventListener('scroll', () => {
    for (let div of divArray) {
    const viewportHeight = window.innerHeight;
    const elementTop = div.getBoundingClientRect().top;
    if ((elementTop < viewportHeight)  && (elementTop > 0))
        div.classList.add('reveal_active');
    else
        div.classList.remove('reveal_active');
}
});