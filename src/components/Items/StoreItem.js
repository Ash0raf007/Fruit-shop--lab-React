import React from "react";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import FormatCurrency from "../FormatCurrency";
import "./style.css";
//////////////////////////go to Store.js for importanat
const StoreItem = ({item}) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(item.id);

  return (
    <div className="main1">
      <div className="content-card">
        <div className="image">
          <img
            src={item.imgUrl}
            alt=""
            style={{ height: "250px", width: "250px", objectFit: "contain"}}
          />
        </div>

        <div className="info">
          <span>{item.name}</span>
          <span>Price: {FormatCurrency(item.price)}</span>
          <span>Rate:{item.Rate}</span>
        </div>
        <div className="buttons">
          {quantity === 0 ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              <button onClick={() => increaseCartQuantity(item.id)}>
                Add To Cart
              </button>
            </div>
          ) : (

            
            <div>

          <div style={{display:"flex", justifyContent:"space-between",paddingInline:"30px"}}> 
                 <button onClick={() => decreaseCartQuantity(item.id)}>-</button>
                <div>{quantity} in cart</div>
                <button onClick={() => increaseCartQuantity(item.id)}>+</button>
                </div>
          <div style={{display:"flex", justifyContent:"center"}}>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>

          </div>

            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoreItem;
