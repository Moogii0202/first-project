import React from 'react';
import './CartItem.css';

const CartItem = ({ item }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} className="course-image" />
      <div className="course-info">
        <h3>{item.title}</h3>
        <p>by {item.author}</p>
        <div className="rating">
          <span className="best-seller">Best seller</span>
          <span>{item.rating} ★★★★★ ({item.reviews})</span>
        </div>
        <p>{item.hours} • {item.lectures} lectures • {item.level}</p>
      </div>
      <div className="course-actions">
        <p className="price">${item.price.toFixed(2)}</p>
        <span className="original-price">${item.originalPrice.toFixed(2)}</span>
        <div className="actions">
          <button>Remove</button>
          <button>Save for later</button>
          <button>Add to wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
