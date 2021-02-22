const links = document.querySelectorAll('.has-tooltip');
let hint = document.createElement('div');

for (let link of links) {
    const title = link.getAttribute('title');

    hint.classList.add('tooltip');

    link.addEventListener('click', (event) => {
        event.preventDefault();

        hint.classList.remove('tooltip_active');
        hint.innerText = title;
        hint.classList.add('tooltip_active');

        link.append(hint);
    })
}