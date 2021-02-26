const textArea = document.getElementById('editor');
textArea.value = localStorage.usersInput;

textArea.addEventListener('change', () => {
    let text = textArea.value;
    console.log(text);
    localStorage.setItem('usersInput', text);
})