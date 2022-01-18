import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState={
    items:[],
    status:null
}
 export const fetchProduct=createAsyncThunk(
   " couter/FetchProduct",
   async()=>{
      const {data}= await axios.get("http://localhost:8000/products")
      return data;
   }
 )
 export const createProduct=createAsyncThunk(
  " couter/createProduct",
  async(data)=>{
     const response= await axios.post("http://localhost:8000/addProducts",data)
     return response.data;
  }
)


 




export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: { },
    extraReducers:{
        [fetchProduct.fulfilled]:(state,action)=>{
                   state.status="success"
                   state.items=action.payload
        },
        [createProduct.fulfilled]:(state,action)=>{
          state.status="success"
          state.items=action.payload
},

    }
  })

  export default counterSlice.reducer;

  