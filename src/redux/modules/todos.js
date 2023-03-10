import { createSlice } from "@reduxjs/toolkit";


const initialState = {
        todos : [
            {
            id:1,
            title:'react',
            contents:'too difficult for me',
            isDone:false
            },
            {
                id:2,
                title:'spring',
                contents:'also too difficult for me',
                isDone:true
            },
        ]
}


const todoSlice =createSlice({
    name:'todos',
    initialState,
    reducers:{},
    extraReducers:{}

})

export const {} = todoSlice.actions;
export default todoSlice.reducer;