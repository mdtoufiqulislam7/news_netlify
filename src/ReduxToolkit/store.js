import { configureStore } from "@reduxjs/toolkit";
import productdata from './slice';
import Userslice from "./Userslice";




export const store = configureStore({

    reducer:{
        product: productdata,
        user:Userslice
    }
})


export default store