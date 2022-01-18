import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
const initialState={
    products:[],
    status:null
}

//Actions
export const getProductsss=createAsyncThunk(
        "product/getProductsss",
        async()=>{
           const {data}= await axios.get('http://localhost:8000/products')
           return data;
        }
 )

 //Rducers
const productsSlice=createSlice({
name:'product',
initialState,
reducers:{},
extraReducers:{
    [getProductsss.fulfilled]:(state,action)=>{
    state.status="success"
     state.products=action.payload
    }
}

})



export default productsSlice.reducer;