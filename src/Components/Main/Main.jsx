import CartProduct from "./CartProduct";
import Price from "./Price";

function Main({ products, setProducts,  addToCart }) {
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
                  addToCart={addToCart}
                />
              );
            }
          })}
        </ul>
      </div>

      <Price products={products}/>
    </main>
  );
}

export default Main;
