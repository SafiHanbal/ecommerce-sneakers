class cartCl {
  #parentEl = document.querySelector('.cart');
  #cartDeleteIcon;
  #deleteHandler;

  #cartHighlight = document.querySelector('.navigation__cart__highlight');

  #updateCartHighlight(i) {
    this.#cartHighlight.textContent = i;
    if(i === 0) this.#cartHighlight.classList.remove('navigation__cart__highlight--active');
    else this.#cartHighlight.classList.add('navigation__cart__highlight--active');
  }

  setCartDeleteIcon() {
    this.#cartDeleteIcon = this.#parentEl.querySelectorAll('.cart__delete');
    this.addHandlerDelete(this.#deleteHandler);
  }

  renderCartData(cartArr) {
    if(!cartArr) {
      const markup = `<p class="cart__empty">Your Cart is empty</p>`;
      this.#parentEl.querySelector('.cart__list').innerHTML = markup;
      this.#updateCartHighlight(0);
      return;
    }
    let markup = ``

    cartArr.forEach((el, i) => {
      markup += `
      <div class="cart__data">
        <img src="${el.img}" alt="product image" class="cart__img">
        <p class="cart__text cart__text--1">${el.productName}</p>
        <p class="cart__text cart__text--2">$${el.price} x ${el.quantityValue} <span class="cart__price">$${el.quantityValue * Number(el.price)}.00</span></p>
        <img src="${el.deleteIcon}" alt="delete icon" class="cart__delete" data-datano="${i}">
      </div>
      `
    });

    markup += `
      <p class="btn btn--large cart__btn">Checkout</p>
    `

    this.#parentEl.querySelector('.cart__list').innerHTML = markup;
    this.#updateCartHighlight(cartArr.length);
  }

  addHandlerDelete(handler) {
    this.#deleteHandler = handler;
    this.#parentEl.querySelectorAll('.cart__delete').forEach((del, i) => {
      del.addEventListener('click', function(){
        handler(i);
      });
    })
  }
}

export default new cartCl();