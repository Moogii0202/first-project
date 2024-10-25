import React from 'react';
import Header from './Header';
import CartItem from './cartItem';  // Ensure capitalization matches the file name
import CartSummary from './CartSummary';
import Footer from './Footer';
import './App.css';

const App = () => {
  // Mock data for cart items
  const cartItems = [
    {
      id: 1,
      title: 'React - The Complete Guide 2024 (incl. Next.js, Redux)',
      author: 'academind by Axamelian',
      rating: 4.5,
      reviews: '2,123,455 ratings',
      hours: '68.5 total hours',
      lectures: '687 lectures',
      level: 'All levels',
      price: 11.99,
      originalPrice: 74.99,
    },
    // You can add more items like this
  ];

  return (
    <div>
      <Header />
      <div className="cart-container">
        <h2>Shopping Cart</h2>
        <p>{cartItems.length} course in cart</p>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
        <CartSummary total={cartItems.reduce((acc, item) => acc + item.price, 0)} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
