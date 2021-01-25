const dropdownsArray = Array.from(document.querySelectorAll('.dropdown__value'));
const linksArray = Array.from(document.querySelectorAll('.dropdown__link'));

for (let dropdown of dropdownsArray) {
    dropdown.addEventListener('click', () => dropdown.nextElementSibling.classList.add('dropdown__list_active'));

    for (let link of linksArray) {
        link.addEventListener('click', function (e) {
            link.parentElement.parentElement.previousElementSibling.textContent = this.textContent;
            dropdown.nextElementSibling.classList.remove('dropdown__list_active');
            e.preventDefault();
        }, false)
    }
}