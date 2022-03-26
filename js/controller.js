import * as model from './model';
import cartView from './views/cartView';
import ctaView from './views/ctaView';
import galleryView from './views/galleryView';
import navigationView from './views/navigationView';

const controlChangeGalleryImg = function (e) {
  galleryView.changeProductImg(e)
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

const controlShowSlider = function () {
  galleryView.showSlider()
}

const controlCloseSlider = function () {
  galleryView.closeSlider();
}

const init = function () {
  model.getCartData();
  navigationView.closeCart();

  navigationView.addHandlerNavigationMenu(controlNavigationMenu);
  navigationView.addHandlerNavigationCart(controlNavigationCart);
  ctaView.addHandlerQuantity(controlChangeQuantity);
  ctaView.addHandlerAddToCart(controlAddToCart);
  galleryView.addSliderImgs(model.state.productImages);
  galleryView.addHandlerThumbnail(controlChangeGalleryImg);
  galleryView.addHandlerChangeSlide();
  galleryView.addHnadlerGalleryImg(controlShowSlider);
  galleryView.addHandlerCloseSlider(controlCloseSlider);
  cartView.renderCartData(model.state.cartData);
  cartView.addHandlerDelete(controlDeleteFromCart);
};

init();

// const testArr = [1,2,3,4];
// testArr.splice(2, 1);
// console.log(testArr);