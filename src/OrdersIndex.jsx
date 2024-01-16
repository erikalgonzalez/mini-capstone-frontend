import { useState, useEffect } from 'react'
import axios from 'axios'

export function OrdersIndex() {
  const [orders, setOrders] = useState([])

  const getOrders = () => {
    console.log('getting orders');
    axios.get("http://localhost:3010/orders.json").then(response => {
      console.log(response.data);
      setOrders(response.data)
    })
  }

  useEffect(getOrders, [])

  return (
    <div>
      <p>I am in orders index</p>
      {orders.map(order => (
        <div key={order.id}>
          <p>subtotal: {order.subtotal}</p>
          <p>tax: {order.tax}</p>
          <p>total: {order.total}</p>
          Products in your order:
          {order.carted_products.map(carted_products => (
            <div key={carted_products.id}>
              <p>name: {carted_products.product.name}</p>
              <p>quantity: {carted_products.quantity}</p>
              <img width="300px" src={carted_products.product_images[0].url} />
            </div>
          ))}
          < hr />
        </div>
      ))}
    </div>
  )
}