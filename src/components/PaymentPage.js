import React from "react";
import "./PaymentPage.css";
import CheckoutProducts from "./CheckoutProduct";
import { useStateValue } from "../config/StateProvider";
import {Link} from 'react-router-dom'

function PaymentPage() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="payment">
      <div className="payment_container">

        <h3>Checkout (<Link to='/checkout'>{basket?.length} items</Link>)</h3>

        {/* {Payment Section - Delivery address} */}

        <div className="payment_section">
          <div className="payment_title">
            <h4>Delivery Address</h4>
          </div>
          <div className="payment_address">
            <h6>{user?.email}</h6>
            <h6>123 React Lane</h6>
            <h6>Karachi Nazimabad, KN</h6>
          </div>
        </div>

        {/* {Payment Section - Review Items} */}
        <div className="payment_section">
          <div className="payment_title">
            <h4>Review Items and Delivery</h4>
          </div>
          <div className="payments_items">
            {basket.map((item) => (
              <CheckoutProducts
                id={item.id}
                title={item.title}
                Image={item.Image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/* {Payment Section - payment Method} */}
        <div className="payment_section">
          <div className="payment_title">
            <h4>Payment Method</h4>
          </div>
          <div className="payment_details">
              {/* stripe methods  */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
