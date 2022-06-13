import * as types from "./ProductTypes";

export const addProductToCart = (productId) => ({
  type: types.ADD_PRODUCT_TO_CART,
  payload: productId,
});
