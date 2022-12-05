import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  bookWL: [ ], 
  newColor:"#333333",

};
const wishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    changeWL: (state=initialState, action) => {
      
      const newWL = action.payload;
      // console.log("first",newWL)
      const exisWL = state.bookWL?.find((item) => item.id === newWL.id);
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
        state.newColor="#333333";
        state.bookWL = state.bookWL.filter((item) => item.id !== id);
      }
    },
    

  },
});
export const wlActions = wishListSlice.actions;
export default wishListSlice.reducer;