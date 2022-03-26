import * as model from './model';
import cartView from './views/cartView';
import ctaView from './views/ctaView';
import galleryView from './views/galleryView';
import navigationView from './views/navigationView';
import sliderView from './views/sliderView';

const controlChangeGalleryImg = function (e) {
  galleryView.changeProductImg(e)
}

const controlChangeSliderImg = function(i) {
  sliderView.changeProductImg(i)
}

const controlChangeQuantity = function(e) {
  ctaView.changeQuantity(e);
}

const controlAddToCart = function() {
  const cartData = ctaView.saveData(model.state.cartImages);
  model.state.cartData = cartData;
  cartView.renderCartData(model.state.cartData);
  cartView.setCartDeleteIcon();
}

const controlDeleteFromCart = function(i) {
  model.deleteCart(i);
  cartView.renderCartData(model.state.cartData);
  cartView.setCartDeleteIcon();
}

const controlNavigationCart = function() {
  navigationView.toggleCart();
}

const controlNavigationMenu = function () {
  navigationView.toggleNavigationMenu();
};

const controlShowSlider = function (i) {
  sliderView.showSlider(model.state.productImages);
  sliderView.changeProductImg(i)
  galleryView.addHandlerThumbnail(controlChangeSliderImg);
}

const controlCloseSlider = function () {
  sliderView.closeSlider();
}

const init = function () {
  model.getCartData();

  navigationView.closeCart();
  navigationView.addHandlerNavigationMenu(controlNavigationMenu);
  navigationView.addHandlerNavigationCart(controlNavigationCart);

  ctaView.addHandlerQuantity(controlChangeQuantity);
  ctaView.addHandlerAddToCart(controlAddToCart);

  galleryView.addGalleryImgs(model.state.productImages);
  galleryView.addHandlerThumbnail(controlChangeGalleryImg);
  galleryView.addHandlerChangeSlide();

  cartView.renderCartData(model.state.cartData);
  cartView.addHandlerDelete(controlDeleteFromCart);

  sliderView.addHnadlerShowSlider(controlShowSlider);
  sliderView.addHandlerCloseSlider(controlCloseSlider);
  sliderView.addHandlerChangeSlide();
  sliderView.addHandlerThumbnail(controlChangeSliderImg);
};

init();
