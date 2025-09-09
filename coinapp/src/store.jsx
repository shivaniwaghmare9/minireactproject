import { configureStore } from "@reduxjs/toolkit";
import coinReducer from "./coinSlice"
const store=configureStore({
    reducer:{
     mycoin:coinReducer
    }
})
export default store;