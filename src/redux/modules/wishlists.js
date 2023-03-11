import { createSlice } from "@reduxjs/toolkit";
import React from "react";
import { v4 as uuidv4 } from "uuid";


const initialState = {
        wishes : [
            {
            id:uuidv4(),
            url:'https://www.newbalance.com/pd/made-in-usa-993-core/WR993V1-2382.html',
            contents:'크림이 나라를 망친다.',
            isDone:false
            },
            {
            id:uuidv4(),
            title:'https://www.moncler.com/ko-kr/genius/shop-genius/2-moncler-1952-man/dun-reversible-down-jacket-gray-H20921A00024M2017S94.html',
            contents:'나도 이게 구매 완료였음 좋겠다..',
            isDone:true
            },
        ],
        wish : {
            id:"",
            url:"",
            contents:"",
            isDone:false
        }
}


const wishSlice =createSlice({
    name:'wishes',
    initialState,
    reducers:{
        addWish : (state, action) => {return {...state, wishes:[...state.wishes, action.payload]}},
        switchWish : (state, action) => {
            const newList = state.wishes.map((item)=>item.id === action.payload ? {...item, isDone: !item.isDone}:item)
            return {...state, wishes:newList}
        }
    },
    // extraReducers:{}

})

export const {addWish, switchWish} = wishSlice.actions;
export default wishSlice.reducer;