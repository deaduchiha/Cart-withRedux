import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

// Redux
import store from "./redux/store";

// Components
import Store from "./components/Store/Store";
import Details from "./components/details/Details";
import Navbar from "./components/shared/navbar/Navbar";

const App = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path="/product" element={<Store />} />
        <Route path="/product/:id" element={<Details />} />
        <Route path="*" element={<Navigate to="/product" />} />
      </Routes>
    </Provider>
  );
};

export default App;
