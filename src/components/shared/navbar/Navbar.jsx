import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// Style
import styles from "./Navbar.module.css";

const Navbar = () => {
  const state = useSelector((state) => state.cartState);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <Link className={styles.productLink} to="/product">
          Products
        </Link>
        <div className={styles.iconContainer}>
          <Link to="/cart">
            <i className="bi bi-cart"></i>
            <span>{state.itemsCounter}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
