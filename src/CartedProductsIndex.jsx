import axios from "axios";
import { useState, useEffect } from "react";

export function CartedProductsIndex() {
  const [cartedProducts, setCartedProducts] = useState([]);

  const getCartedProducts = () => {
    console.log("getting products");
    axios.get("http://localhost:3010/carted_products.json").then((response) => {
      console.log(response.data);
      setCartedProducts(response.data);
    });
  };

  const createOrder = () => {
    console.log("creating order...");
    axios.post("http://localhost:3010/orders.json").then((response) => {
      console.log(response.data);
      window.location.href = `/orders/${response.data.id}`;
    });
  };

  useEffect(getCartedProducts, []);

  return (
    <div>
      <p>Your shopping cart</p>
      {cartedProducts.map((cartedProduct) => (
        <div key={cartedProduct.id}>
          {/* <p>{JSON.stringify(CartedProducts)}</p> */}
          <p>name: {cartedProduct.product.name}</p>
          <p>price: {cartedProduct.product.price}</p>
          <p>quantity: {cartedProduct.quantity}</p>
          <hr />
        </div>
      ))}
      <p>
        <button onClick={createOrder}>Buy</button>
      </p>
    </div>
  );
}
