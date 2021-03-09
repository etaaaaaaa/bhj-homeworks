const textArea = document.getElementById('editor');
textArea.value = localStorage.getItem('usersInput');

textArea.addEventListener('input', () => {
    let text = textArea.value;
    console.log(text);
    localStorage.setItem('usersInput', text);
})