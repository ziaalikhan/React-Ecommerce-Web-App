import React from "react";
import { useStateValue } from "../config/StateProvider";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <h4>Welcome : {user?.email}</h4>
        <hr />
        <h3 className="checkout_title">Your Shopping Basket</h3>

        {basket.map((item) => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            Image={item.Image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
