import { createSlice } from "@reduxjs/toolkit";
const initialState={
   cartItems:[]

}
export const cartSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {

        //Add To Cart
      addToCart(state,action){
          const itemIndex= state.cartItems.findIndex((item)=>
              item.id===action.payload.id)

             if(itemIndex>=0){
                state.cartItems[itemIndex].cartQuantity+=1;
        }
           else{

            const addProduct={...action.payload,cartQuantity:1}
            state.cartItems.push(addProduct)
             }

      },
      removeToCard(state,action){
          const itemIndex=state.cartItems.findIndex((item)=>
          item.id===action.payload.id
          )
          if(state.cartItems[itemIndex].cartQuantity>1){
              state.cartItems[itemIndex].cartQuantity-=1;
          }

      },

    


      deleteToCard(state,action){
        const itemIndex=state.cartItems.filter(item=>
            item.id!==action.payload.id
        )
        state.cartItems=itemIndex;
        
    },



      
        
         

     },
  
  })

 export const {addToCart,removeToCard,deleteToCard}=cartSlice.actions;
  export default cartSlice.reducer;