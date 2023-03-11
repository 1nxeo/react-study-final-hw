import { configureStore } from "@reduxjs/toolkit";
import wishlists from "../modules/wishlists";


const store = configureStore({
    reducer:{
        wishlists,
    }
})


export default store