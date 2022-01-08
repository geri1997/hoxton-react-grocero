function Price({products}) {
    return <div className="total-section">
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
}

export default Price