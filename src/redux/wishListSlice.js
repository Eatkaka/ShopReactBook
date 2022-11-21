import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  bookWL: [ ],
  isColor:false,
 
};
const wishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {

    changeWL: (state, action) => {
     
      const newWL = action.payload;
      const exisWL = state.bookWL.find((item) => item.id === newWL.id);
      if (!exisWL) {
         state.newColor= "#FF0000"
        const newWL = action.payload;
        state.bookWL = [...state.bookWL, newWL];}
        else{
         state.newColor="#333333";
         state.bookWL = state.bookWL.filter((item) => item.id !== action.payload.id)
        }
    }, 
      
    
    deleteItem: (state, action) => {
      const id = action.payload;
      const existingItem1 = state.bookWL.find((item) => item.id === id);
      if (existingItem1) {
        state.bookWL = state.bookWL.filter((item) => item.id !== id);
      }
    },
    

  },
});
export const wlActions = wishListSlice.actions;
export default wishListSlice.reducer;
