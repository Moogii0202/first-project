import React from 'react';
import Header from './Header';
import CartItem from './cartItem'; // Ensure capitalization matches the file name
import CartSummary from './CartSummary';
import Footer from './Footer';
import './App.css';
// dhdhsjds

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
    {
      id: 2,
      title: 'Advanced JavaScript: Understanding the Weird Parts',
      author: 'Tony Alicea',
      rating: 4.8,
      reviews: '1,234,567 ratings',
      hours: '12 total hours',
      lectures: '180 lectures',
      level: 'Intermediate',
      price: 19.99,
      originalPrice: 59.99,
    },
    {
      id: 3,
      title: 'Node.js, Express, MongoDB & More: The Complete Bootcamp 2024',
      author: 'Angela Yu',
      rating: 4.7,
      reviews: '789,012 ratings',
      hours: '32.5 total hours',
      lectures: '300 lectures',
      level: 'All levels',
      price: 29.99,
      originalPrice: 99.99,
    },
    // You can add more items like this
  ];

  return (
    <div>
      <Header />
      <div className="cart-container">
        
        
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
