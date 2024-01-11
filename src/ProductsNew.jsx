import axios from "axios"

export function ProductsNew(props) {
  const createProduct = (event) => {    
    event.preventDefault();
    const params = new FormData(event.target)    
    props.onCreateProduct(params, () => {event.target.reset()})
    
    console.log('creating product...')
  }
  
  return (
    <div>
      <p>Make a new product</p>
      <form onSubmit={createProduct}>
        <p>Name<input type="text" /></p>
        <p>Price<input type="text" /></p>
        <p>Description<input type="text" /></p>
        <p>Supplier<input name="supplier_id" type="text" /></p>
        <button>Make new product</button>
      </form>
      {/* <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form> */}
    </div>
  )
}