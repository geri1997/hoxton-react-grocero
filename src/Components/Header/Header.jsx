function Header(props) {

  return (
    <header id="store">
      <h1>Grocero</h1>
      {/* {props.children.props.children} */}
      <ul className="item-list store--item-list">
        {props.products.map((product) => (
          <li key={product.id}>
            <div className="store--item-icon">
              <img
                src={`../../assets/icons/${product.id < 10 ? "00" : "0"}${
                  product.id
                }-${product.name}.svg`}
                alt={`${product.name}`}
              />
            </div>
            <button
              onClick={(e) => {
                // const newArr = props.products.map(function (item) {
                //   if (0 < item.quantityInStore && item.quantityInStore <= 10) {
                //     return item.id === product.id
                //       ? {
                //           ...item,
                //           // quantityInCart: item.quantityInCart++,
                //           // quantityInStore: item.quantityInStore--,
                //           quantityInCart: item.quantityInCart + 1,
                //           quantityInStore: item.quantityInStore - 1,
                //         }
                //       : item;
                //   }
                //   return item;
                // });
                props.setProducts(props.addToCart(props.products,product));
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
