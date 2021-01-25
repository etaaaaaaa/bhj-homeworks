const tabsArray = Array.from(document.querySelectorAll('.tab'));
const contentArray = Array.from(document.querySelectorAll('.tab__content'))

for (let tab of tabsArray) {
    tab.addEventListener('click', () => {

        for (let element of tabsArray) {
            element.classList.remove('tab_active');
        }
        tab.classList.add('tab_active');

        for (let content of contentArray) {
            content.classList.remove('tab__content_active');
        }
        contentArray[tabsArray.indexOf(tab)].classList.add('tab__content_active');
    });
}