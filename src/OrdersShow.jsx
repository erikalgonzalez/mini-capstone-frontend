import { useState, useEffect } from 'react'
import axios from 'axios'
export function OrdersShow() {
  const [order, setOrder] = useState({})
  const getOrder = () => {
    console.log('hello from get prder')    
    axios.get('http://localhost:3010/orders/16.json').then(response => {
      console.log(response.data);
      setOrder(response.data)
    })
  }

  useEffect(getOrder, [])


  return (
    <div>
      <p>hello from orders show</p>
      <p><b>subtotal:</b> {order.subtotal}</p>
      <p><b>tax:</b> {order.tax}</p>
      <p><b>total:</b> {order.total}</p>
      {order.carted_products.map(cartedProduct => (
        <div>
          <p>{cartedProduct.product.name}</p>
          <p>{cartedProduct.quantity}</p>
          <p><img width="300px" src={cartedProduct.product_images[0].url} /></p>
        </div>
      ))}
    </div>
  )
}