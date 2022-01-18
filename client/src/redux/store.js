import {configureStore} from '@reduxjs/toolkit';
import productReducer,{getProductsss} from './features/productsSlice';
import cartReducer,{subTotal} from './features/cartSlice';
const store=configureStore({
    reducer:{
        products:productReducer,
        carts:cartReducer,
    }
})
store.dispatch(getProductsss());
store.dispatch(subTotal());
export default store;