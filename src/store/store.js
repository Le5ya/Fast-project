import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/auth.slice";
import categoriesReducer from "./categories/categories.slice";
import goodsReducer from "./goods/goods.slice";
import productReducer from "./product/product.slice.js";
import favoriteReducer from "./favorite/favorite.js";
import cartReducer from "./cart/cart.slice.js";
import { apiTokenErrorMiddleware } from "./goods/middleware.js";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    categories: categoriesReducer,
    goods: goodsReducer,
    product: productReducer,
    favorite: favoriteReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiTokenErrorMiddleware),
});
