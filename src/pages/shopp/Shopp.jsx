import React from 'react'
import { PRODUCTS } from '../../Products'
import Product from './Product'
import './Shopp.css'

function Shopp() {
  return (
    <div className='shop'>
      <div className="products">
         {PRODUCTS.map((product) => <Product key={product.id} {...product}/>)}
      </div>
    </div>
  )
}

export default Shopp