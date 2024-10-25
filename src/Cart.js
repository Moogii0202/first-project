import React from 'react';
import CartItem from './cartItem'; // Adjust the import path as needed
import './Cart.css'; // Optional CSS for the Cart component

const Cart = () => {
  // Sample course data
  const courses = [
    {
      id: 1,
      title: "React for Beginners",
      author: "John Doe",
      image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2Fhaikyuu--725290714986974865%2F&psig=AOvVaw2VERCiEWw5LU4w6gCkD0sM&ust=1729591339599000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCNDgvP2bn4kDFQAAAAAdAAAAABAE", // Replace with actual image URL
      rating: 4.8,
      reviews: 200,
      hours: 10,
      lectures: 20,
      level: "Beginner",
      price: 29.99,
      originalPrice: 49.99,
    },
    {
      id: 2,
      title: "Advanced JavaScript",
      author: "Jane Smith",
      image: "1b4db781a9326d55ef773e18a72c964e.jpg", // Replace with actual image URL
      rating: 4.7,
      reviews: 150,
      hours: 15,
      lectures: 30,
      level: "Intermediate",
      price: 39.99,
      originalPrice: 59.99,
    },
    {
      id: 3,
      title: "Full Stack Development",
      author: "Alice Johnson",
      image: "https://via.placeholder.com/100", // Replace with actual image URL
      rating: 4.9,
      reviews: 300,
      hours: 20,
      lectures: 40,
      level: "Advanced",
      price: 49.99,
      originalPrice: 79.99,
    },
  ];

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {courses.map((course) => (
        <CartItem key={course.id} item={course} />
      ))}
    </div>
  );
};

export default Cart;
