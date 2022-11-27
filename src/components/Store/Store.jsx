import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Redux
import { fetchProducts } from "../../redux/product/productsAction";

// Components
import Product from "../product/Product";
import Loading from "../shared/loading/Loading";

// Styles
import styles from "./Store.module.css";

const Store = () => {
  const dispatch = useDispatch();
  const productsState = useSelector((state) => state.productsState);

  useEffect(() => {
    if (!productsState.products.length) dispatch(fetchProducts());
  }, []);

  return (
    <div className={styles.container}>
      {productsState.loading ? (
        <Loading />
      ) : productsState.error ? (
        <p>Something went wrong.</p>
      ) : (
        productsState.products.map((product) => (
          <Product key={product.id} productData={product} />
        ))
      )}
    </div>
  );
};

export default Store;
