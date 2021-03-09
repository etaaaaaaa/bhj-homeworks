const popup = document.getElementById('subscribe-modal');
const close = document.querySelector('.modal__close');

close.addEventListener('click', () => {
    popup.classList.remove('modal_active');
    document.cookie='status=1';
})

const getCookie = (name) => {
    const value = "; " + document.cookie;
    let parts = value.split("; "+ name + "=" );

    if ( parts.length === 2 ) {
        return parts
            .pop()
            .split(";")
            .shift();
    }
}

if ( getCookie('status') !== '1' ) {
    popup.classList.add('modal_active');
}