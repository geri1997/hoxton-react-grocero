import { useState } from "react";
import CartProduct from "./CartProduct";
import Price from "./Price";

function Main({
  products,
  setProducts,
  addToCart,
  filterType,
  setFilterType,
  setSortInfo,
}) {
  return (
    <main id="cart">
      <h2>Your Cart</h2>
      <button
        onClick={(e) => {
          setSortInfo({
            sorted: true,
            alphabetically: false,
            ascending: false,
          });
        }}
      >
        Sort High to Low
      </button>
      <button
        onClick={(e) => {
          setSortInfo({ sorted: true, alphabetically: false, ascending: true });
        }}
      >
        Sort Low to High
      </button>
      <button
        onClick={(e) => {
          setSortInfo({ sorted: true, alphabetically: true, ascending: true });
        }}
      >
        Sort A to Z
      </button>
      <button
        onClick={(e) => {
          setSortInfo({ sorted: true, alphabetically: true, ascending: false });
        }}
      >
        Sort Z to A
      </button>

      <div className="filter">
        <label htmlFor="fruit">Fruit</label>
        <input
          onChange={(e) => {
            if (e.target.checked) {
              setFilterType([...filterType, "fruit"]);
            } else {
              filterType.splice(filterType.indexOf("fruit"), 1);
              setFilterType([...filterType]);
            }
          }}
          checked={filterType.includes("fruit")}
          type="checkbox"
          name="fruit"
          id="fruit"
        />
        <label htmlFor="vegetable">Vegetable</label>
        <input
          type="checkbox"
          name="vegetable"
          id="vegetable"
          onChange={(e) => {
            if (e.target.checked) {
              setFilterType([...filterType, "vegetable"]);
            } else {
              filterType.splice(filterType.indexOf("vegetable"), 1);
              setFilterType([...filterType]);
            }
          }}
          checked={filterType.includes("vegetable")}
        />
      </div>

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

      <Price products={products} />
    </main>
  );
}

export default Main;
