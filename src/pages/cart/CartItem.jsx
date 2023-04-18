import { React, useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import './CartItem.css'

function CartItem( { id, productImage, productName, price } ) {

   const {cartItems, addToCart, removeFromCart, updatedCartItemCount} = useContext(ShopContext)

  return (
    <div className="cart-item">
      <img className="cart-item-img" src={productImage}/>

      <div className="cart-item-desc">
         <p> <b> {productName} </b> </p>

         <p>{price} грівень</p>
         <div className="count-handler">
            <button onClick={() => addToCart(id)}> + </button>
            <input width={50} value={cartItems[id]} onChange={(e) => updatedCartItemCount(Number(e.target.value), id)}/>
            <button onClick={() => removeFromCart(id)}> - </button>
         </div>
      </div>

    </div>
  )
}

export default CartItem