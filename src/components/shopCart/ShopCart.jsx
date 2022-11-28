import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// Components
import Cart from "../shared/cart/Cart";

// Styles
import styles from "./ShopCart.module.css";

// Action
import { clear, checkout } from "../../redux/cart/cartAction";

const ShopCart = () => {
  const state = useSelector((state) => state.cartState);
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <div className={styles.cartContainer}>
        {state.selectedItems.map((item) => (
          <Cart key={item.id} data={item} />
        ))}
      </div>
      {state.itemsCounter > 0 && (
        <div className={styles.payments}>
          <p>
            <span>Total items: </span>
            {state.itemsCounter}
          </p>
          <p>
            <span>Total payments: </span>
            {state.total}
          </p>
          <div className={styles.buttonContainer}>
            <button className={styles.clear} onClick={() => dispatch(clear())}>
              Clear
            </button>
            <button
              className={styles.checkout}
              onClick={() => dispatch(checkout())}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
      {state.checkout && (
        <div className={styles.complete}>
          <h3>Chechked out succusfully</h3>
          <Link to="/product">Buy more</Link>
        </div>
      )}
      {!state.checkout && state.itemsCounter === 0 && (
        <div className={styles.complete}>
          <h3>want to buy?</h3>
          <Link to="/product">Go back to shop</Link>
        </div>
      )}
    </div>
  );
};

export default ShopCart;
