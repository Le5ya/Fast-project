import { createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../../const";
export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const token = state.auth.accessToken;

    try {
      const response = await fetch(`${API_URL}api/cart`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Не удалось загрузить содержимое корзины");
        return await response.json();
      }
    } catch (error) {}
  },
);

export const addProductToCart = createAsyncThunk(
  "cart/addPoductToCart",
  async (productData, { getState, rejectWithValue }) => {
    const state = getState();
    const token = state.auth.accessToken;

    try {
      const response = await fetch(`${API_URL}api/cart/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(productData),
      });
      if (!response.ok) {
        throw new Error("Не удалось загрузить содержимое корзины");
        return await response.json();
      }
    } catch (error) {}
  },
);

const initialState = {
  products: [],
  totalPrice: 0,
  totalCount: 0,
  loadingFetch: false,
  loadingAdd: false,
  loadingUpdate: false,
  loadingRemove: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder(addCase);
  },
});
