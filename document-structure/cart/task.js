const increaseButton = Array.from(document.querySelectorAll('.product__quantity-control_inc'));
const decreaseButton = Array.from(document.querySelectorAll('.product__quantity-control_dec'));
const addButton = Array.from(document.querySelectorAll('.product__add'));
const cart = document.querySelectorAll('.cart__products')[0];
let id, quantity, imgsrc, products;

decreaseButton.forEach((element) => {
    element.addEventListener('click', function(){
        if (this.parentNode.querySelector('.product__quantity-value').textContent > 0){
            this.parentNode.querySelector('.product__quantity-value').textContent -= 1;
        }
    })
})

increaseButton.forEach((element) => {
    element.addEventListener('click', function(){
        this.parentNode.querySelector('.product__quantity-value').textContent  = parseInt(this.parentNode.querySelector('.product__quantity-value').textContent) + 1;
    });
})

addButton.forEach((element) => {
    element.addEventListener('click', function(){
        id = this.closest('.product').dataset.id;
        quantity = parseInt(this.closest('.product__quantity').querySelector('.product__quantity-value').textContent);
        imgsrc = this.closest('.product').querySelector('.product__image').getAttribute('src');
        products = document.querySelectorAll('.cart__product');

        products.forEach((element) => {
            if (element.dataset.id === id) {
                element.querySelector('.cart__product-count').textContent = parseInt(element.querySelector('.cart__product-count').textContent) + quantity;
                element.parentNode.children[element.parentNode.children - 1].remove();
            }
        })

        if (quantity > 0) {
            cart.innerHTML += `
             <div class="cart__product" data-id=${id}>
                 <img class="cart__product-image" src=${imgsrc}>
                 <div class="cart__product-count">${quantity}</div>
             </div>`
        }
    })
})