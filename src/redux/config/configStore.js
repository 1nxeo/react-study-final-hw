import { configureStore } from "@reduxjs/toolkit";
import wishlists from "../modules/wishlists";
import comments from "../modules/comments";


const store = configureStore({
    reducer:{ wishlists, comments  }
})


export default store