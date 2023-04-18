import { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { ShopContext } from '../../context/shop-context'
import { PRODUCTS } from '../../Products'
import CartItem from './CartItem'
import './Cart.css'

function Cart() {

  const {cartItems, getTotalCartAmount} = useContext(ShopContext)
  const totalAmount = getTotalCartAmount()

  const navigate = useNavigate()

  return (
    <div className='cart'>

      <h1 className='cart-title'>Твоя корзінка</h1>

      <div className="cartItems">
        {cartItems.length == 0 && <h2>Empty</h2>}
        
        {cartItems.length === 0 ? <h2>Empty</h2> : PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} {...product} />
          }
        })}
      </div>
        {totalAmount > 0 ? (
          <div className="checkout">
          <p>Всього {totalAmount} грівень</p>
          <div className="checkout-btns">
            <button onClick={(() => navigate("/"))}>Вибрати щось ще!!</button>
            <button onClick={() => navigate("/purchase")}>Зробити покупочку</button>
          </div>
        </div>
        ) : (
          <h2 className='cart-notification'>Пуста корзінка купи щось не будь лохом...(натискни на shop)</h2>
        )}

    </div>
  )
}

export default Cart