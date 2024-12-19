// src/components/shoppingCart/ShoppingCart.jsx

import React, { useState, useEffect } from "react";
import { getMockData, addMockData, deleteMockData } from "../../utils/mockData";

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Fetch cart data from localStorage or initialize if empty
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
    calculateTotalPrice(storedCart);
  }, []);

  // Calculate the total price of the cart
  const calculateTotalPrice = (cart) => {
    const total = cart.reduce((acc, book) => acc + parseFloat(book.price), 0);
    setTotalPrice(total);
  };

  // Remove book from cart
  const removeFromCart = (bookId) => {
    const updatedCart = cart.filter((book) => book.id !== bookId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    calculateTotalPrice(updatedCart);
  };

  // Proceed to checkout (you can add further functionality here like checkout APIs, etc.)
  const proceedToCheckout = () => {
    // You can add logic for checkout
    alert("Proceeding to checkout...");
  };

  return (
    <div className="p-4">
      <h3 className="mb-4">Shopping Cart</h3>

      {cart.length === 0 ? (
        <p>Your cart is empty. Add some books to your cart.</p>
      ) : (
        <>
          {/* Shopping Cart Table */}
          <table className="table table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Category</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((book) => (
                <tr key={book.id}>
                  <td>{book.id}</td>
                  <td>{book.title}</td>
                  <td>{book.category}</td>
                  <td>{book.price}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => removeFromCart(book.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Total Price */}
          <div className="d-flex justify-content-between mb-4">
            <h5>Total: ${totalPrice.toFixed(2)}</h5>
            <button className="btn btn-success" onClick={proceedToCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
