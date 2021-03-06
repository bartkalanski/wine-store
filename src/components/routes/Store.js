import React from "react";
import { useSelector } from "../helper-functions/react-redux-hooks";

import "./Store.css";
import StoreList from "./StoreList";

const Store = () => {
  const items = useSelector((state) => state.items);
  return (
    <div className="ui container">
      <div className="ui grid">
        <StoreList items={items} />
      </div>
    </div>
  );
};

export default Store;
