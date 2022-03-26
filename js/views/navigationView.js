import iconClose from './../../images/icon-close.svg';
import iconMenu from './../../images/icon-menu.svg';

class navCl {
  #navigationMenu = document.querySelector('.navigation__menu');
  #navigationList = document.querySelector('.navigation__list');
  #overlay = document.querySelector('.overlay');

  #navigationCart = document.querySelector('.navigation__cart')
  #cart = document.querySelector('.cart');

  closeCart() {
    document.addEventListener('click', function(e) {
      if(e.target.closest('.cart') || e.target.classList.contains('cart__delete')) return console.log(1);
      if(e.target.classList.contains('navigation__cart') || e.target.closest('.navigation__cart')) return console.log(2);

      document.querySelector('.cart').classList.remove('cart--active');
    })
  }

  toggleNavigationMenu() {
    // Changing icon
    if (this.#navigationMenu.alt === 'navigation menu icon') {
      this.#navigationMenu.src = iconClose;
      this.#navigationMenu.alt = 'navigation close icon';
    } else if (this.#navigationMenu.alt === 'navigation close icon') {
      this.#navigationMenu.src = iconMenu;
      this.#navigationMenu.alt = 'navigation menu icon';
    }

    // Toggling overlay
    this.#overlay.classList.toggle('overlay--active')

    // Togglin navigation list
    this.#navigationList.classList.toggle('navigation__list--active');

    document.body.classList.toggle('scroll-lock');
  }

  addHandlerNavigationMenu(handler) {
    this.#navigationMenu.addEventListener('click', handler);

    this.#overlay.addEventListener('click', handler);
  }

  toggleCart() {
    this.#cart.classList.toggle('cart--active');
  }

  addHandlerNavigationCart(handler) {
    this.#navigationCart.addEventListener('click', handler)
  }
}

export default new navCl();
