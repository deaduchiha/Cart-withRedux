import React from "react";
import { useDispatch, useSelector } from "react-redux";

// Function
import { shorten } from "../../../helper/function";

// Styles
import styles from "./Cart.module.css";

// Action
import { decrease, increase, removeItem } from "../../../redux/cart/cartAction";

const Cart = (props) => {
  const state = useSelector((state) => state.cartState);
  const dispatch = useDispatch();
  const { image, title, price, quantity } = props.data;

  return (
    <div className={styles.container}>
      <img className={styles.productImage} src={image} alt="product" />
      <div className={styles.data}>
        <h3>{shorten(title)}</h3>
        <p>{price}$</p>
      </div>
      <div>
        <span className={styles.quantity}>{quantity}</span>
      </div>
      <div className={styles.buttonContainer}>
        {quantity > 1 ? (
          <button onClick={() => dispatch(decrease(props.data))}>-</button>
        ) : (
          <button onClick={() => dispatch(removeItem(props.data))}>
            <i className="bi bi-trash3-fill"></i>
          </button>
        )}
        <button onClick={() => dispatch(increase(props.data))}>+</button>
      </div>
    </div>
  );
};

export default Cart;
