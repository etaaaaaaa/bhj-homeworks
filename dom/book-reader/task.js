const fontSizes = document.querySelectorAll('.font-size');
const fontSizesArray = Array.from(fontSizes);
const book = document.getElementById('book');

for (let fontSize of fontSizesArray) {
    fontSize.addEventListener('click', (event) => {
        event.preventDefault();
        document.querySelector('.font-size_active').classList.remove('font-size_active');
        fontSize.classList.add('font-size_active');

        if (fontSize.dataset.size === 'small') {
            book.classList.remove('book_fs-big');
            book.classList.add('book_fs-small');
        } else if (fontSize.dataset.size === 'big') {
            book.classList.remove('book_fs-small');
            book.classList.add('book_fs-big');
        } else {
            book.classList.remove('book_fs-small');
            book.classList.remove('book_fs-big');
        }
    })

}