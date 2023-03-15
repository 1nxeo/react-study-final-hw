import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { v4 as uuidv4 } from "uuid";


const initialState = {
    comments:[],
    isLoading: false,
    error:null,
};


export const __getComments = createAsyncThunk(
    "comments/getComments",
    async (payload, thunkAPI) => {
      try{
        const data = await axios.get(`${process.env.REACT_APP_SERVER_URL}/comments`);
        return thunkAPI.fulfillWithValue(data.data)
      }catch(err){
        return thunkAPI.rejectWithValue(err)
      }
    }
  )


const commentSlice = createSlice({
    name:'comments',
    initialState,
    reducers:{
        addComment : (state, action) => {return {...state, wishes:[...state.wishes, action.payload]}},
        deleteComment : (state, action) => {
          const newList = state.comments.filter((item)=>item.postId !== action.payload)
          return {...state, wishes:newList}
        },
    },
    extraReducers:{
          [__getComments.pending]: (state) => {
            state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
          },
          [__getComments.fulfilled]: (state, action) => {
            state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
            state.comments = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
          },
          [__getComments.rejected]: (state, action) => {
            state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
            state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
          },
    }

})

export const {addComment,deleteComment} = commentSlice.actions;
export default commentSlice.reducer;