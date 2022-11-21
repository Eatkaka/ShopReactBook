import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    getCartTotal: (state) => {
      let { totalAmount } = state.cartItems?.reduce(
        (cartTotal, cartItem) => {
          const { salePrice, quantity } = cartItem;
          const itemTotal = salePrice * quantity;
          cartTotal.totalAmount += itemTotal;
          
          return cartTotal;
        },
        { totalAmount: 0, totalCount: 0 }
      );
      state.totalAmount = parseInt(totalAmount.toFixed(2));
    
    },
    countUp: (state, action) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    },
    countDown: (state, action) => {
      state.cartItems = state.cartItems
        .map((item) => {
          if (item.id === action.payload) {
                return { ...item, quantity: item.quantity - 1 };
              
          } 
            return item;
          
        })       
    },

    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity++;
      if (!existingItem) {
        const newItem = action.payload;
        state.cartItems = [...state.cartItems, newItem];
      } else {
        state.cartItems.quantity++;
      }
    },
    deleteItem: (state, action) => {
      const id = action.payload;
      const existingItem1 = state.cartItems.find((item) => item.id === id);
      if (existingItem1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
        if (state.cartItems.length > 0) {
          state.totalQuantity = state.totalQuantity - 1;
        } else {
          state.totalQuantity = 0;
        }
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
