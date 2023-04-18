import './Product.css'
import { ShopContext } from '../../context/shop-context'
import { useContext } from 'react'

function Product({ id, productName, price, productImage, discount }) {
  const { addToCart, cartItems } = useContext(ShopContext)

  const cartItemsAmount = cartItems[id]

  return (
    <div className="product">
      <div className="product-info">
        <h2 className="product-title">{productName}</h2>
        <p className="product-price">{price} грівен</p>
        <p className="product-discount">{discount}</p>
      </div>
      <img src={productImage} />
      <button className="product-btn" onClick={() => addToCart(id)}>
        В корзинку {cartItemsAmount > 0 && <> ({cartItemsAmount})</>}
      </button>
    </div>
  )
}

export default Product
