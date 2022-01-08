import CartProduct from "./CartProduct";

function Main({ products, setProducts, removeFromCart, addToCart }) {
  return (
    <main id="cart">
      <h2>Your Cart</h2>

      <div className="cart--item-list-container">
        <ul className="item-list cart--item-list">
          {products.map((product) => {
            if (product.quantityInCart) {
              return (
                <CartProduct
                key={product.id}
                  product={product}
                  products={products}
                  setProducts={setProducts}
                  removeFromCart={removeFromCart}
                  addToCart={addToCart}
                />
              );
            }
          })}
        </ul>
      </div>

      <div className="total-section">
        <div>
          <h3>Total</h3>
        </div>

        <div>
          <span className="total-number">
            {products
              .reduce((value, el) => {
                if (el.quantityInCart) {
                  value += el.quantityInCart * el.price;
                }
                return value;
              }, 0)
              .toFixed(2)}
          </span>
        </div>
      </div>
    </main>
  );
}

export default Main;
