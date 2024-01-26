import axios from "axios";
import { useEffect, useState } from "react";

export function ProductsNew(props) {
  const [suppliers, setSuppliers] = useState([]);
  const [images, setImages] = useState([""]);

  const createProduct = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateProduct(params, () => {
      event.target.reset();
    });
    console.log("creating product...");
  };

  const productsIndex = () => {
    console.log("hello from products index");

    axios.get("http://localhost:3010/suppliers.json").then((response) => {
      console.log(response.data);
      setSuppliers(response.data);
    });
  };

  const addImage = () => {
    console.log("adding image");
    setImages([...images, ""]);
  };

  useEffect(productsIndex, []);

  return (
    <div>
      <p>Make a new product</p>
      {/* {suppliers.map((supplier) => (
        <p key={supplier.id}>{supplier.name}</p>
      ))} */}
      <form onSubmit={createProduct}>
        <p>
          Name
          <input name="name" type="text" />{" "}
        </p>
        <p>
          Price
          <input name="price" type="text" />
        </p>
        <p>
          Description
          <input name="description" type="text" />
        </p>
        {images.map((image) => (
          <p>
            Image
            <input name="images[]" type="text" />
          </p>
        ))}
        <select name="supplier" id="things">
          {suppliers.map((supplier) => (
            <option>{supplier.name}</option>
          ))}
        </select>
        <button>Make new product</button>
      </form>
      <p>
        <button onClick={addImage}>add more images</button>
      </p>
    </div>
  );
}
