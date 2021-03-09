const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');
const form = document.getElementById('signin__form');
const signin = document.getElementById('signin');
signin.classList.add('signin_active');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if ( localStorage.getItem('user') ) {
        signin.classList.remove('signin_active');
        welcome.classList.add('welcome_active');
        userId.textContent = localStorage.getItem('user');
    } else {

        let formData = new FormData(form);
        let xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
        xhr.addEventListener('readystatechange', function () {

            if (this.readyState === xhr.DONE && this.status === 200) {
                let response = JSON.parse(this.responseText).success;

                if (response) {
                    let id = JSON.parse(this.responseText).user_id;
                    signin.classList.remove('signin_active');
                    welcome.classList.add('welcome_active');
                    userId.textContent = id;
                    localStorage.setItem('user', id);
                } else {
                    alert('wrong login or password');
                }
            }

        })
        xhr.send(formData);
    }
})