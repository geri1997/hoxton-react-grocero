import { useState } from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1, // <- the item id matches the icon name in the assets/icons folder
      name: "beetroot",
      price: 0.35,
      quantityInStore: 10,
      quantityInCart: 0,
      type: "vegetable",
    },
    {
      id: 2, // <- the item id matches the icon name in the assets/icons folder
      name: "carrot",
      price: 0.5,
      quantityInStore: 10,
      quantityInCart: 0,
      type: "vegetable",
    },
    {
      id: 3, // <- the item id matches the icon name in the assets/icons folder
      name: "apple",
      price: 0.45,
      quantityInStore: 10,
      quantityInCart: 0,
      type: "fruit",
    },
    {
      id: 4, // <- the item id matches the icon name in the assets/icons folder
      name: "apricot",
      price: 0.15,
      quantityInStore: 10,
      quantityInCart: 0,
      type: "fruit",
    },
    {
      id: 5, // <- the item id matches the icon name in the assets/icons folder
      name: "avocado",
      price: 0.25,
      quantityInStore: 10,
      quantityInCart: 0,
      type: "fruit",
    },
    {
      id: 6, // <- the item id matches the icon name in the assets/icons folder
      name: "bananas",
      price: 0.35,
      quantityInStore: 10,
      quantityInCart: 0,
      type: "fruit",
    },
    {
      id: 7, // <- the item id matches the icon name in the assets/icons folder
      name: "bell-pepper",
      price: 0.4,
      quantityInStore: 10,
      quantityInCart: 0,
      type: "vegetable",
    },
    {
      id: 8, // <- the item id matches the icon name in the assets/icons folder
      name: "berry",
      price: 0.8,
      quantityInStore: 10,
      quantityInCart: 0,
      type: "fruit",
    },
    {
      id: 9, // <- the item id matches the icon name in the assets/icons folder
      name: "blueberry",
      price: 0.9,
      quantityInStore: 10,
      quantityInCart: 0,
      type: "fruit",
    },
    {
      id: 10, // <- the item id matches the icon name in the assets/icons folder
      name: "eggplant",
      price: 0.75,
      quantityInStore: 10,
      quantityInCart: 0,
      type: "vegetable",
    },
  ]);
  const [filterType, setFilterType] = useState([]);
  function addToCart(products, product) {
    return products.map(function (item) {
      if (0 < item.quantityInStore && item.quantityInStore <= 10) {
        return item.id === product.id
          ? {
              ...item,
              // quantityInCart: item.quantityInCart++,
              // quantityInStore: item.quantityInStore--,
              quantityInCart: item.quantityInCart + 1,
              quantityInStore: item.quantityInStore - 1,
            }
          : item;
      }
      return item;
    });
  }
  let productsToDisplay = products;
  function filteredArrByType(productsToDisplay, filterType) {
    return productsToDisplay.filter((product) =>
      filterType.includes(product.type)
    );
  }
  if (filterType.length!==0)
    productsToDisplay = filteredArrByType(productsToDisplay, filterType);

  //  let arrrrr=[<li >
  //                     <img
  //                       className="cart--item-icon"
  //                       src={`../../assets/icons/001-beetroot.svg`}
  //                       alt={`beetroot`}
  //                     />
  //                     <p>beetroot</p>
  //                     <button

  //                       className="quantity-btn remove-btn center"
  //                     >
  //                       -
  //                     </button>
  //                     <span className="quantity-text center">

  //                     </span>
  //                     <button

  //                       className="quantity-btn add-btn center"
  //                     >
  //                       +
  //                     </button>
  //                   </li>,<li >
  //                     <img
  //                       className="cart--item-icon"
  //                       src={`../../assets/icons/001-beetroot.svg`}
  //                       alt={`beetroot`}
  //                     />
  //                     <p>beetroot</p>
  //                     <button

  //                       className="quantity-btn remove-btn center"
  //                     >
  //                       -
  //                     </button>
  //                     <span className="quantity-text center">

  //                     </span>
  //                     <button

  //                       className="quantity-btn add-btn center"
  //                     >
  //                       +
  //                     </button>
  //                   </li>,<li >
  //                     <img
  //                       className="cart--item-icon"
  //                       src={`../../assets/icons/001-beetroot.svg`}
  //                       alt={`beetroot`}
  //                     />
  //                     <p>beetroot</p>
  //                     <button

  //                       className="quantity-btn remove-btn center"
  //                     >
  //                       -
  //                     </button>
  //                     <span className="quantity-text center">

  //                     </span>
  //                     <button

  //                       className="quantity-btn add-btn center"
  //                     >
  //                       +
  //                     </button>
  //                   </li>]
  return (
    <>
      <Header
        productsToDisplay={productsToDisplay}
        products={products}
        setProducts={setProducts}
        addToCart={addToCart}
      ></Header>
      <Main
        products={products}
        setProducts={setProducts}
        addToCart={addToCart}
        setFilterType={setFilterType}
        filterType={filterType}
      />
    </>
  );
}

export default App;
