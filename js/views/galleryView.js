class galleryCl {
  #parentEl = document.querySelector('.gallery');

  #slides;
  curSlide = 0;
  maxSlide;

  setSliderHeight() {
    this.#parentEl.querySelector('.gallery__product--slider').style.height = `${this.#parentEl.querySelectorAll('.gallery__img--slide')[0].getBoundingClientRect().width}px`;
  }

  addGalleryImgs(arrProductImgs) {
    let markup = ``;

    arrProductImgs.forEach((img, i) => {
      markup += `
      <img src="${img}" alt="Product Image" class="gallery__img gallery__img--slide" data-imgno="${i}">
      `
    })

    this.#parentEl.querySelector('.gallery__product').innerHTML = markup;

    this.#slides = this.#parentEl.querySelectorAll('.gallery__img--slide');
    this.maxSlide = this.#slides.length;

    this.#goToSlide(this.curSlide);
    this.setSliderHeight();
  }

  #goToSlide(curSlide) {
    this.#slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 *(i - curSlide)}%)`;
    })
  }

  #slideLeft() {
    if (this.curSlide === 0) this.curSlide = this.maxSlide -1;
    else this.curSlide--;

    this.#goToSlide(this.curSlide);
  }

  #slideRight() {
    if (this.curSlide === this.maxSlide -1) this.curSlide = 0;
    else this.curSlide++;

    this.#goToSlide(this.curSlide);
  }

  addHandlerChangeSlide() {
    this.#parentEl.querySelector('.gallery__back').addEventListener('click', this.#slideLeft.bind(this));

    this.#parentEl.querySelector('.gallery__next').addEventListener('click', this.#slideRight.bind(this));
  }

  changeProductImg (e) {
    this.curSlide = Number(e.target.dataset.thumbno);

    this.#parentEl.querySelectorAll('.gallery__thumbnail__img').forEach(img => img.classList.remove('gallery__thumbnail__img--active'));
    this.#goToSlide(this.curSlide);
    e.target.classList.add('gallery__thumbnail__img--active');
  }

  addHandlerThumbnail(handler) {
    this.#parentEl.querySelector('.gallery__thumbnail').addEventListener('click', function(e){
      handler(e);
    })
  }
}

export default new galleryCl();