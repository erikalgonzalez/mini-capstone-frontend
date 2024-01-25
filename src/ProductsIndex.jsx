export function ProductsIndex(props) {
  console.log(props.products);

  return (
    <div id="products-index">
      <h1>All Products</h1>
      <div className="row">
        {props.products.map((product) => (
          <div
            key={product.id}
            class="col-sm-4 col-lg-4 d-flex align-items-stretch"
          >
            <div className="card">
              <div className="card-body">
                <p className="card-title">{product.name}</p>
                <p className="card-title">{product.price}</p>
                <p className="card-text">{product.description}</p>
                <img
                  src={product.image_url}
                  class="card-img-top"
                  alt="..."
                ></img>
                <button
                  className="btn btn-primary"
                  onClick={() => props.onShowProduct(product)}
                >
                  More Info
                </button>
              </div>
            </div>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}
