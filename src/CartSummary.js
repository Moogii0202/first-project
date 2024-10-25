import React from 'react';
import './CartSummary.css';

const CartSummary = ({ total }) => {
  return (
    <div className="cart-summary">
      <h3>Total: ${total.toFixed(2)}</h3>
      <p className="discount-info">84% off</p>
      <button className="checkout-button">Checkout</button>
      <div className="coupon-section">
        <input type="text" placeholder="Enter coupon" />
        <button>Apply</button>
      </div>
    </div>
  );
};

export default CartSummary;
