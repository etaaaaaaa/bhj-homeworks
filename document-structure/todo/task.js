const inputField = document.getElementById('task__input');
const taskList = document.getElementById('tasks__list');
const button = document.getElementById('tasks__add');

button.addEventListener('click', e => {
    e.preventDefault();
    console.log(inputField.value);

    if (inputField.value.trim() !== '') {
        taskList.insertAdjacentHTML('beforeend', `
        <div class="task">
             <div class="task__title">
                 ${inputField.value}
             </div>
             <a href="#" class="task__remove">&times;</a>
         </div>`)

        inputField.value = '';

        const removeButtons = document.querySelectorAll('.task__remove');

        for(let removeButton of removeButtons) {
            removeButton.addEventListener('click', e => {
                e.preventDefault();
                e.target.parentElement.remove();
            })
        }
    }
})