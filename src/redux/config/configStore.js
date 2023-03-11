import { configureStore } from "@reduxjs/toolkit";
import wishlists from "../modules/wishlists";


const store = configureStore({
    reducer:{
        wishlists: wishlists,
    }
})


export default store