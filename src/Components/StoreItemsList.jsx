import { getStoreProducts } from "../helpers";

function StoreItemsList() {
    return (
        <ul className="item-list store--item-list">
            {getStoreProducts().map((product) => (
                <li>
                    <div className="store--item-icon">
                        <img
                            src={`../../assets/icons/${
                                product.id < 10 ? "00" : "0"
                            }${product.id}-${product.name}.svg`}
                            alt={`${product.name}`}
                        />
                    </div>
                    <button>Add to cart</button>
                </li>
            ))}
        </ul>
    );
}

export default StoreItemsList;
{
    /* <img src={`../../assets/icons/${product.id<10?'00':'0'}${product.id}-${product.name}.svg`} */
}
