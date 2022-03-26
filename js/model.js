import productImg1 from './../images/image-product-1.jpg';
import productImg2 from './../images/image-product-2.jpg';
import productImg3 from './../images/image-product-3.jpg';
import productImg4 from './../images/image-product-4.jpg';

import productThumb from './../images/image-product-1-thumbnail.jpg';
import deleteIcon from './../images/icon-delete.svg'

export const state = {
  productImages: [productImg1, productImg2, productImg3, productImg4],
  cartImages: {
    productThumb: productThumb,
    deleteIcon: deleteIcon,
  },
  cartData : null,
}

export const getCartData = function() {
  state.cartData = JSON.parse(localStorage.getItem('cart'));
};

export const deleteCart = function(i) {
  if (state.cartData.length === 1) {
    localStorage.clear();
    state.cartData = null;
  } else {
    state.cartData.splice(i, 1);
    localStorage.setItem('cart', JSON.stringify(state.cartData));
  }
}