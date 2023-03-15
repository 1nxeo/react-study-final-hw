import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { v4 as uuidv4 } from "uuid";


const initialState = {
    wishes:[],
    isLoading: false,
    error:null,
};


export const __getWishes = createAsyncThunk(
    "wishes/getWishes",
    async (payload, thunkAPI) => {
        try {
          const data = await axios.get("http://localhost:4000/wishes");
          return thunkAPI.fulfillWithValue(data.data)
        } catch (error) {
          return thunkAPI.rejectWithValue(error)
        }
      }
  );



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
    extraReducers:{
        [__getWishes.pending]: (state) => {
            state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
          },
          [__getWishes.fulfilled]: (state, action) => {
            state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
            state.wishes = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
          },
          [__getWishes.rejected]: (state, action) => {
            state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
            state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
          },
    }

})

// export const { addWish ,switchWish} = wishSlice.actions;
export default wishSlice.reducer;