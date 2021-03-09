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
    }
})

document.addEventListener('click', e => {
    if (e.target.classList.contains('task__remove')) {
        e.target.parentElement.remove();
    }
})