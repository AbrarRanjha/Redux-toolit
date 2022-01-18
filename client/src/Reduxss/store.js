import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './features/cartSlice';
import  counterSlice,{ fetchProduct } from './features/productSlice'

export const store = configureStore({
  reducer: {
    product:counterSlice,
    cart:cartSlice
  },
})
store.dispatch(fetchProduct());
export default store