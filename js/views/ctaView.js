class ctaCl {
  #quantity = document.querySelector('.quantity');
  #quantityValue = 0;

  #btnAddToCart = document.querySelector('.btn--add-to-cart');

  changeQuantity(e) {
    if (!e.target.classList.contains('quantity__operator')) return;

    if(e.target.dataset.operator === 'increase') {
      this.#quantityValue++;
    } else if(e.target.dataset.operator === 'decrease'  && this.#quantityValue !== 0) {
      this.#quantityValue--;
    }
    this.#quantity.querySelector('.quantity__value').innerHTML = this.#quantityValue;
  }

  addHandlerQuantity(handler) {
    this.#quantity.addEventListener('click', function(e){
      handler(e);
    })
  }

  #resetQuantityValue() {
    this.#quantityValue = 0;
    this.#quantity.querySelector('.quantity__value').innerHTML = this.#quantityValue;
  }

  saveData(images) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    let quantityValue = this.#quantityValue;
    if(!quantityValue) return false;
    if(!cart) {
      cart = [];
    }
    const cartData = {
      quantityValue: quantityValue,
      productName: document.querySelector('.heading-1').textContent,
      price: document.querySelector('.price__current').textContent.replace('$', ''),
      img: images.productThumb,
      deleteIcon: images.deleteIcon,
    }
    cart.push(cartData);
    localStorage.setItem('cart', JSON.stringify(cart));
    this.#resetQuantityValue();
    return cart;
  }

  addHandlerAddToCart(handler) {
    this.#btnAddToCart.addEventListener('click', handler)
  }
}

export default new ctaCl();