import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    users:[],
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        addUser:(state,action)=>{
            const newUser = action.payload;
            console.log(newUser.id)
           
           const exis = state.users.find((item)=> item.email === newUser.email)
            if(!exis){
                const newUser = action.payload;
                state.users =[...state.users,newUser]
            }
        }
    }
})


export const userActions = userSlice.actions;
export default userSlice.reducer;
