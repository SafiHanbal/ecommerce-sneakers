class galleryCl {
  #parentEl = document.querySelector('.gallery');

  #slides;
  curSlide = 0;
  maxSlide;

  setSliderHeight() {
    this.#parentEl.querySelector('.gallery__product--slider').style.height = `${this.#parentEl.querySelectorAll('.gallery__img--slide')[0].getBoundingClientRect().width}px`;

    document.querySelectorAll('.slider__thumbnail__fade').forEach(el => el.style.height = `${ document.querySelectorAll('.slider__thumbnail__img')[0].getBoundingClientRect().height}px`);


  }

  addSliderImgs(arrProductImgs) {
    let markup = ``;

    arrProductImgs.forEach((img) => {
      markup += `
      <img src="${img}" alt="Product Image" class="gallery__img gallery__img--slide">
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

  //////////////////////////////////////////

  #sliderEl = document.querySelector('.slider');
  #overlay = document.querySelector('.overlay');

  showSlider() {
    this.#sliderEl.classList.add('slider--active');
    this.#overlay.classList.add('overlay--active');
    document.body.classList.add('scroll-lock');
  }

  addHnadlerGalleryImg(handler) {
    if(window.innerWidth <= 900) return;
    document.querySelectorAll('.gallery__img--slide').forEach(el => el.addEventListener('click', handler))
  }

  closeSlider() {
    this.#sliderEl.classList.remove('slider--active');
    this.#overlay.classList.remove('overlay--active');
    document.body.classList.remove('scroll-lock');
  }

  addHandlerCloseSlider(handler) {
    this.#sliderEl.querySelector('.slider__close').addEventListener('click', handler);

    this.#overlay.addEventListener('click', handler)
  }
}

export default new galleryCl();