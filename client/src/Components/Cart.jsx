import { Button } from '@material-ui/core';
import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addToCart,deleteToCard,removeToCard } from '../Reduxss/features/cartSlice';
import axios from 'axios';
const url = 'http://localhost:8000';
// import { clearCart, decreaseQuantity, removeFromCart, subTotal } from '../redux/features/cartSlice';
const Cart = () => {

    const cart=useSelector((state)=>state.cart.cartItems);
//     useEffect(()=>{
//      dispatch(subTotal())   
//     },[cart])
const dispatch=useDispatch();
// const handleRemove=(cartItem)=>{
// dispatch(removeFromCart(cartItem))
// } 

// const decrease=(cartItem)=>{
//     dispatch(decreaseQuantity(cartItem));
// }

// const clearFullCart=()=>{
//     dispatch(clearCart());
// }


// const deletePost = async (id) => {
//     try {
//         return await axios.delete(`${url}/deleteProduct/${id}`);
//     } catch(error) {
//         console.log('Error while calling deletePost API ', error)
//     }
// }
// const deleteBlog = async (id) => {    
//     await deletePost(id);
  
// }



const AddToCaRT=(product)=>{
    dispatch(addToCart(product));
    

}
const removeCardd=(product)=>{
    dispatch(removeToCard(product));
    

}
const deleteBlog=(product)=>{
    dispatch(deleteToCard(product));
    

}







    return (
        <div>
           <h1>SHOPPING CART</h1>
           {cart.length===0 ?
           (<><h4>YOUR CART IS EMPTY</h4></>):
             (<>
                {
                    cart.map((cartItem,index)=>(
                       
                        <div key={index.id}>
                        <div  style={{display:'flex'}}   >
                        <img src={cartItem.url} />
                        <div>{cartItem.id}</div>
                      <div><button  onClick={()=>removeCardd(cartItem)}>-</button>{cartItem.cartQuantity}<button onClick={()=>{AddToCaRT(cartItem)}}>+</button></div>
                      <div>{cartItem.price}</div>
                        </div>
                        <button onClick={()=>deleteBlog(cartItem)}>remove</button>
                      <br/> <br/> <br/>
                     
                        </div>
                         
                    ))
                  }

<br/>
                <Button variant='contained' color='primary'>Clear Cart</Button>
                <div>SubTotal:</div>
                <br/>
               

             </>)
            }
        </div>
    )
}

export default Cart
