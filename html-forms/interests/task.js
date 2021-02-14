const radioBoxes = document.querySelectorAll('.interest__check');

for (let box of radioBoxes) {

    if (box.closest('.interest').querySelector('.interests_active')) {
        box.addEventListener('change', () => {
            let lowerBoxes = box.closest('.interest').querySelector('.interests_active').querySelectorAll('.interest__check');
            for (let lowerBox of lowerBoxes) {
                lowerBox.checked = box.checked;
                // if (box.checked) {
                //     lowerBox.checked = true;
                // } else {
                //     lowerBox.checked = false;
                // }
            }
        })
    }
}
