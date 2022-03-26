class sliderCl {
  #parentEl = document.querySelector('.slider');
  #overlay = document.querySelector('.overlay');
  #sliderThumbnailFade = this.#parentEl.querySelectorAll('.slider__thumbnail__fade');

  #slides;
  curSlide = 0;
  maxSlide;

  setSliderHeight() {
    this.#parentEl.querySelector('.slider__main').style.height = `${this.#parentEl.querySelectorAll('.slider__img--slide')[0].getBoundingClientRect().width}px`;

    document.querySelectorAll('.slider__thumbnail__fade').forEach(el => el.style.height = `${ document.querySelectorAll('.slider__thumbnail__img')[0].getBoundingClientRect().height}px`);
  }

  #goToSlide(curSlide) {
    this.#slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 *(i - curSlide)}%)`;
    })
  }

  #slideLeft() {
    if (this.curSlide === 0) this.curSlide = this.maxSlide -1;
    else this.curSlide--;

    this.changeProductImg(this.curSlide);
  }

  #slideRight() {
    if (this.curSlide === this.maxSlide -1) this.curSlide = 0;
    else this.curSlide++;

    this.changeProductImg(this.curSlide);
  }

  addHandlerChangeSlide() {
    this.#parentEl.querySelector('.slider__back').addEventListener('click', this.#slideLeft.bind(this));

    this.#parentEl.querySelector('.slider__next').addEventListener('click', this.#slideRight.bind(this));
  }

  addHandlerThumbnail(handler) {
    this.#sliderThumbnailFade.forEach(thumb => thumb.addEventListener('click', function(e){
        handler(e.target.dataset.thumbno);
      })
      )
  }

  changeProductImg (i) {
    this.curSlide = i;

    this.#sliderThumbnailFade.forEach(img => img.classList.remove('slider__thumbnail__fade--active'));
    this.#goToSlide(this.curSlide);
    this.#sliderThumbnailFade[i]?.classList.add('slider__thumbnail__fade--active');
  }

  #addSliderImgs(arrProductImgs) {
    let markup = ``;

    arrProductImgs.forEach((img) => {
      markup += `
      <img src="${img}" alt="Product Image" class="slider__img slider__img--slide">
      `
    })

    this.#parentEl.querySelector('.slider__main').innerHTML = markup;

    this.#slides = this.#parentEl.querySelectorAll('.slider__img--slide');
    this.maxSlide = this.#slides.length;

    this.#goToSlide(this.curSlide);
    this.setSliderHeight();
  }

  showSlider(arrProductImgs) {
    this.#parentEl.classList.add('slider--active');
    this.#overlay.classList.add('overlay--active');
    document.body.classList.add('scroll-lock');
    document.body.style.height = window.innerHeight;
    this.#addSliderImgs(arrProductImgs)
  }

  addHnadlerShowSlider(handler) {
    if(window.innerWidth <= 900) return;
    document.querySelectorAll('.gallery__img--slide').forEach(el => el.addEventListener('click', function(e){
      handler(e.target.dataset.imgno)
    }))
  }

  closeSlider() {
    this.#parentEl.classList.remove('slider--active');
    this.#overlay.classList.remove('overlay--active');
    document.body.classList.remove('scroll-lock');
  }

  addHandlerCloseSlider(handler) {
    this.#parentEl.querySelector('.slider__close').addEventListener('click', handler);

    this.#overlay.addEventListener('click', handler)
  }
}

export default new sliderCl();