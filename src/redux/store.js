import { combineReducers, configureStore ,} from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import wishListReducer from "./wishListSlice";
 import userReducer from "./userSlice";
import storage from "redux-persist/lib/storage";

//  import cartSlice from "./cartSlice";
// import wishListSlice from "./wishListSlice";
import {
  persistStore,
  persistReducer,
 
} from 'redux-persist'

const persistConfig = {
    key: 'root',
      storage,

  }
const reducer = combineReducers({
      cart : cartReducer,
      wishList: wishListReducer,
      user : userReducer,

})
   const persistedReducer = persistReducer(persistConfig, reducer)

const store= configureStore({
     reducer: persistedReducer,
    
    
    // reducer:{
    //   user:userReducer,
    //   cart:cartSlice,
    //   wishList:wishListSlice
    // }
   
});
export default store;
 export const persistor = persistStore(store)
