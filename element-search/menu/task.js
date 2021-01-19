const menuLinks = document.querySelectorAll('.menu__link');
const linksArray = Array.from(menuLinks);

for (let link of linksArray) {
    link.onclick = function() {
        const parent = link.parentElement;

        if (parent.querySelector('.menu_sub').classList.contains('menu_sub'))
            parent.querySelector('.menu_sub').classList.toggle('menu_active')

        if (link.closest('.menu_main')) {
            return false;
        }
    }
}