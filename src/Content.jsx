import axios from "axios";
import { ProductsIndex } from "./ProductsIndex";
import { CartedProductsIndex } from "./CartedProductsIndex";
import { ProductsNew } from "./ProductsNew";
import { Modal } from "./Modal";
import { ProductsShow } from "./ProductsShow";
import { OrdersIndex } from "./OrdersIndex";
import { OrdersShow } from "./OrdersShow";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Signup } from "./Signup";
import { Login } from "./Login";

export function Content() {
  const [products, setProducts] = useState([]);
  const [isProductsShowVisible, setIsProductsShowVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});

  const handleIndexProducts = () => {
    console.log("get data from rails");
    axios.get("http://localhost:3010/products.json").then((response) => {
      // console.log(response.data)
      setProducts(response.data);
    });
  };

  const handleCreateProduct = (params, successCallback) => {
    console.log("creating product");
    axios
      .post("http://localhost:3010/products.json", params)
      .then((response) => {
        console.log(response.data);
        setProducts([...products, response.data]);
        successCallback();
      });
  };

  const handleShowProduct = (product) => {
    console.log("handleShowProduct", product);
    setIsProductsShowVisible(true);
    setCurrentProduct(product);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsProductsShowVisible(false);
  };

  useEffect(handleIndexProducts, []);

  return (
    <div>
      <h1>Welcome to my little web page</h1>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route
          path="/products/new"
          element={<ProductsNew onCreateProduct={handleCreateProduct} />}
        />
        <Route
          path="/"
          element={
            <ProductsIndex
              products={products}
              onShowProduct={handleShowProduct}
            />
          }
        />
        <Route path="/cart" element={<CartedProductsIndex />} />
        <Route path="/orders" element={<OrdersIndex />} />
        <Route path="/orders/:id" element={<OrdersShow />} />
      </Routes>

      {/* <button onClick={handleIndexProducts}>Get products</button> */}

      <Modal show={isProductsShowVisible} onClose={handleClose}>
        <ProductsShow product={currentProduct} onClose={handleClose} />
      </Modal>
    </div>
  );
}
