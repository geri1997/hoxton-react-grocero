function CartProduct({ products, setProducts, removeFromCart, addToCart,product }) {
  
  return (
        <li>
          <img
            className="cart--item-icon"
            src={`../../assets/icons/${product.id < 10 ? "00" : "0"}${
              product.id
            }-${product.name}.svg`}
            alt={`${product.name}`}
          />
          <p>{product.name}</p>
          <button
            onClick={() => setProducts(removeFromCart(products, product))}
            className="quantity-btn remove-btn center"
          >
            -
          </button>
          <span className="quantity-text center">{product.quantityInCart}</span>
          <button
            onClick={() => setProducts(addToCart(products, product))}
            className="quantity-btn add-btn center"
          >
            +
          </button>
        </li>
      )
    
}

export default CartProduct
