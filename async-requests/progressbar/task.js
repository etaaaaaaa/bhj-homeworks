const progress = document.getElementById('progress');
const send = document.getElementById('send');

const xhr = new XMLHttpRequest();
const formData = new FormData(form);

send.addEventListener('click', (e) => {
    e.preventDefault();

    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.onprogress = (e) => {
        progress.value = e.loaded / 1000000;
    }
    xhr.send(formData);
})