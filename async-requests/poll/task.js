const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const dataTitle = JSON.parse(xhr.responseText).data.title;
        const dataAnswers = JSON.parse(xhr.responseText).data.answers;

        console.log(dataTitle);
        console.log(dataAnswers);

        for (const answer in dataAnswers) {
            pollTitle.innerText = dataTitle;
            const item = `<button class="poll__answer">
                             ${dataAnswers[answer]}
                          </button>`;

            pollAnswers.insertAdjacentHTML('afterbegin', item);
        }
    }
})

pollAnswers.addEventListener('click', () => {
  alert('Thank you! Your vote has been counted!');
})