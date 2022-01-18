import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState={
    cartItems:localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")):[],
    cartItemQuantity:0,
    cartTotalAmount:0,

}
const cartSlice=createSlice({
    name:'Cart',
    initialState,
    reducers:{

        //Add To cart
addToCart(state,action){
    const itemIndex=state.cartItems.findIndex((item)=>item.id===action.payload.id
    )
    if(itemIndex>=0){
        state.cartItems[itemIndex].cartQuantity+=1;
        toast.success("increased product quantity",{
            position:'top-center'
        })
    }
    else{
        const tempProduct={...action.payload,cartQuantity:1};
        state.cartItems.push(tempProduct)

        toast.info(`${action.payload.id} added successfully`,{
            position:'top-center'
        })
                 //to store data in local storage
        localStorage.setItem("cartItems",JSON.stringify(state.cartItems));
    }

  
},

//Remove Item from Cart
removeFromCart(state,action){
    const removeCart=state.cartItems.filter(
        cartItem=>cartItem.id !== action.payload.id
    )
  state.cartItems=removeCart;
  localStorage.setItem("cartItems",JSON.stringify(state.cartItems));
},

//Decrease Quantity
decreaseQuantity(state,action){
   const check= state.cartItems.findIndex(cartItem=>cartItem.id===action.payload.id);
   if(state.cartItems[check].cartQuantity>1){
       state.cartItems[check].cartQuantity-=1;
   }
   else if(state.cartItems[check].cartQuantity===1){
    const removeCart=state.cartItems.filter(
        cartItem=>cartItem.id !== action.payload.id
    )
  state.cartItems=removeCart;
  localStorage.setItem("cartItems",JSON.stringify(state.cartItems));
   }
},



//clear cart
clearCart(state,action){
    state.cartItems=[];
    localStorage.setItem("cartItems",JSON.stringify(state.cartItems));
},

//totoal Calculations
subTotal(state,action){
    let {totalAmount,quantity}=state.cartItems.reduce((cartTotal,cartItem)=>{
        const {price,cartQuantity}=cartItem;
        const total=price*cartQuantity;
        cartTotal.totalAmount+=total;
        cartTotal.quantity+=cartQuantity

        return cartTotal;
    },{
        totalAmount:0,
        quantity:0
    });
    state.cartItemQuantity=quantity;
    state.cartTotalAmount=totalAmount;


}


    }
})





export const {addToCart,removeFromCart,decreaseQuantity,clearCart,subTotal} =cartSlice.actions;
export default cartSlice.reducer;