const chatWidget = document.querySelector('.chat-widget');
const input = document.getElementById('chat-widget__input');

const messages = document.getElementById('chat-widget__messages')

const botMsgs = [
    'Где ваша совесть?',
    'Мы ничего не будем продавать!',
    'Добрый день! До свидания!',
    'К сожалению, все операторы сейчас заняты, не пишите нам больше.',
    'Вы не купили ни одного товара для того, чтобы так с нами разговаривать!',
    'Кто тут?',
    'Добрый день, мы ещё не проснулись. Позвоните через 10 лет'
]

chatWidget.addEventListener('click', () => {
    chatWidget.classList.add('chat-widget_active');
})

input.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {

        if (input.value === '')
            alert('you gotta write something')
        else {
            let hours = new Date().getHours();
            let minutes = new Date().getMinutes();

            messages.innerHTML += `
            <div class="message message_client">
              <div class="message__time">${hours}:${minutes}</div>
              <div class="message__text">${input.value}</div>
            </div>`;

            messages.innerHTML += `
             <div class="message">
                 <div class="message__time">${hours}:${minutes}</div>
                 <div class="message__text">
                    ${botMsgs[Math.floor(Math.random() * botMsgs.length)]}
                 </div>
             </div>`

            input.value = '';
        }
    }
})