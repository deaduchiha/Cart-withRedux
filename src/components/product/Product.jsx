import React from "react";
import { Link } from "react-router-dom";

//Styles
import styles from "./Product.module.css";

// Function
import { shorten } from "../../helper/function";

const Product = ({ productData }) => {
  return (
    <div className={styles.container}>
      <img className={styles.cardImage} src={productData.image} alt="product" />
      <h3>{shorten(productData.title)}</h3>
      <p>{`${productData.price} $`}</p>
      <div className={styles.linkContainer}>
        <Link to={`/product/${productData.id}`}>Details</Link>
        <div className={styles.buttonContainer}>
          {/* this is button container */}
        </div>
      </div>
    </div>
  );
};

export default Product;
