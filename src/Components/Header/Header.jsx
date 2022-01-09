function Header(props) {
  let productsToDisplay = [...props.products];
  function compareByPrice(a, b) {
    return props.sortInfo.ascending ? a.price - b.price : b.price - a.price;
  }
  function compareAlphabetically(a, b) {
    return props.sortInfo.ascending
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name);
  }
  function filteredArrByType(productsToDisplay, filterType) {
    return productsToDisplay.filter((product) =>
      filterType.includes(product.type)
    );
  }

  if (props.sortInfo.sorted) {
    if (props.sortInfo.alphabetically) {
      productsToDisplay.sort((a, b) => compareAlphabetically(a, b));
    } else {
      productsToDisplay.sort((a, b) => compareByPrice(a, b));
    }
  } else {
    productsToDisplay = props.products;
  }
  if (props.filterType.length !== 0)
    productsToDisplay = filteredArrByType(productsToDisplay, props.filterType);

  return (
    <header id="store">
      <h1>Grocero</h1>
      {/* {props.children.props.children} */}
      <ul className="item-list store--item-list">
        {productsToDisplay.map((product) => (
          <li key={product.id}>
            <div className="store--item-icon">
              <img
                src={`../../assets/icons/${product.id < 10 ? "00" : "0"}${
                  product.id
                }-${product.name}.svg`}
                alt={`${product.name}`}
              />
            </div>
            <span id="amount-in-store">{product.name}</span>
            <span id="amount-in-store">Amount: {product.quantityInStore}</span>
            <span id="store-price">Price: {product.price}</span>
            <button
              onClick={(e) => {
                props.setProducts(props.addToCart(props.products, product));
              }}
            >
              Add to cart
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
