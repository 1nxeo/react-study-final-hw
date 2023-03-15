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
          const data = await axios.get(`${process.env.REACT_APP_SERVER_URL}/wishes`);
          return thunkAPI.fulfillWithValue(data.data)
        } catch (error) {
          return thunkAPI.rejectWithValue(error)
        }
      }
  );

  export const __addWishes = createAsyncThunk(
    "wishes/addWishes",
    async (payload, thunkAPI) => {
        try {
          await axios.post(`${process.env.REACT_APP_SERVER_URL}/wishes`, payload);
          return thunkAPI.fulfillWithValue(payload)
        } catch (error) {
          return thunkAPI.rejectWithValue(error)
        }
      }
  );


  export const __deleteWishes = createAsyncThunk(
    "wishes/deleteWishes",
    async (payload, thunkAPI) => {
        try {
          await axios.delete(`${process.env.REACT_APP_SERVER_URL}/wishes/${payload}`);
          return thunkAPI.fulfillWithValue(payload)
        } catch (error) {
          return thunkAPI.rejectWithValue(error)
        }
      }
  );

  export const __switchWishes = createAsyncThunk(
    "wishes/switchWishes",
    async (payload, thunkAPI) => {
        try {
          await axios.patch(`${process.env.REACT_APP_SERVER_URL}/wishes/${payload.id}`, payload);
          return thunkAPI.fulfillWithValue(payload)
        } catch (error) {
          return thunkAPI.rejectWithValue(error)
        }
      }
  );

  export const __updateWishes = createAsyncThunk(
    "wishes/updateWishes",
    async (payload, thunkAPI) => {
        try {
          await axios.patch(`${process.env.REACT_APP_SERVER_URL}/wishes/${payload.id}`, payload);
          return thunkAPI.fulfillWithValue(payload)
        } catch (error) {
          return thunkAPI.rejectWithValue(error)
        }
      }
  );

  // export const __addComments = createAsyncThunk(
  //   "wishes/addComments",
  //   async (payload, thunkAPI) => {
  //       try {
  //         await axios.post(`${process.env.REACT_APP_SERVER_URL}/wishes/${payload.postId}`, payload);
  //         return thunkAPI.fulfillWithValue(payload)
  //       } catch (error) {
  //         return thunkAPI.rejectWithValue(error)
  //       }
  //     }
  // );




const wishSlice =createSlice({
    name:'wishes',
    initialState,
    reducers:{
        // addWish : (state, action) => {return {...state, wishes:[...state.wishes, action.payload]}},
        // switchWish : (state, action) => {
        //     const newList = state.wishes.map((item)=>item.id === action.payload ? {...item, isDone: !item.isDone}:item)
        //     return {...state, wishes:newList}
        // },
        // deleteWish : (state, action) => {
        //   const newList = state.wishes.filter((item)=>item.id !== action.payload)
        //   return {...state, wishes:newList}
        // },
        // updateWish : (state, action) => {
        //   const editId = action.payload.id;
        //   const editTargetIndex = state.wishes.findIndex((item)=>item.id === editId)
        //   const editList = [...state.wishes]
        //   editList.splice(editTargetIndex,1, action.payload)
        //   return {...state, wishes:editList}
        // }
    },
    extraReducers:{
        [__getWishes.pending]: (state) => {
            state.isLoading = true; 
          },
          [__getWishes.fulfilled]: (state, action) => {
            state.isLoading = false; 
            state.wishes = action.payload; 
          },
          [__getWishes.rejected]: (state, action) => {
            state.isLoading = false; 
            state.error = action.payload;
          },
          [__deleteWishes.pending]: (state) => {
            state.isLoading = true;
          },
          [__deleteWishes.fulfilled]: (state, action) => {
            const newState = state.wishes.filter((item)=>item.id !== action.payload)
            state.isLoading = false;
            state.wishes = newState;
          },
          [__deleteWishes.rejected]: (state, action) => {
            state.isLoading = false; 
            state.error = action.payload; 
          },
          [__switchWishes.pending]: (state) => {
            state.isLoading = true;
          },
          [__switchWishes.fulfilled]: (state, action) => {
            const newState = state.wishes.map((item)=>item.id === action.payload.id ? {...item, isDone: !item.isDone}:item)
            state.isLoading = false;
            state.wishes = newState;
          },
          [__switchWishes.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload; 
          },
          [__addWishes.pending]: (state) => {
            state.isLoading = true;
          },
          [__addWishes.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.wishes =[...state.wishes, action.payload];
          },
          [__addWishes.rejected]: (state, action) => {
            state.isLoading = false; 
            state.error = action.payload; 
          },
          [__updateWishes.pending]: (state) => {
            state.isLoading = true;
          },
          [__updateWishes.fulfilled]: (state, action) => {
            const editId = action.payload.id;
          const editTargetIndex = state.wishes.findIndex((item)=>item.id === editId)
          const editList = [...state.wishes]
          editList.splice(editTargetIndex,1, action.payload)
            state.isLoading = false;
            state.wishes = editList
          },
          [__updateWishes.rejected]: (state, action) => {
            state.isLoading = false; 
            state.error = action.payload; 
          },
    }

})

// export const { addWish ,switchWish, deleteWish, updateWish} = wishSlice.actions;
export default wishSlice.reducer;