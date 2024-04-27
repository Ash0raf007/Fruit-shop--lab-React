import React from "react";
import storeItems from "../../data/items.json";
import StoreItem from '../Items/StoreItem';
import './style.css'

const Store = () => {
  
  return (
    <>
      <div className="container">
      <h1>Products</h1>
    <div className="store-border">
        {storeItems.map((item) => (

          <div key={item.id}  >
            <StoreItem item={item} />
            </div>
        ))}
        </div>
        </div>
    </>
  );
};

export default Store;
