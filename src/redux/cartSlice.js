import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    cartItems:[],
    totalQuantity:0,
}

const cartSlice = createSlice({
    name:"Cart",
    initialState,
    reducers:{
        addItem:(state,action)=>{
            const newItem = action.payload;
            const existingItem = state.cartItems.find(
                (item)=>item.id === newItem.id
            );
            state.totalQuantity++
            if(!existingItem){
                const newItem = action.payload;
                state.cartItems=[...state.cartItems,newItem]
            }
            else{
                // existingItem.quantity++
                existingItem.totalPrice= Number(existingItem.totalPrice) +Number(newItem.price)

            }
          
            // console.log(state.totalQuantity);
            // console.log("statecartItems",state.cartItems);
            // console.log("newItem",newItem)

        },
        deleteItem:(state, action) => {
        const id = action.payload;
        const existingItem1 = state.cartItems.find((item)=>item.id===id);
        console.log(existingItem1)
         if(existingItem1){
            state.cartItems = state.cartItems.filter((item)=>item.id !==id);
            if(state.cartItems.length > 0){
            state.totalQuantity=state.totalQuantity - 1;}
        else{
            state.totalQuantity=0;
        }}
         

        
       

        },
       
        



    }});

export const cartActions = cartSlice.actions
export default cartSlice.reducer