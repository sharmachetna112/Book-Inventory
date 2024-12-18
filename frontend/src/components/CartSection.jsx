// src/components/CartSection.jsx
import React from "react";

const CartSection = ({ cart, onRemoveFromCart }) => {
  return (
    <section className="mb-5">
      <h2 className="mb-3">Shopping Cart</h2>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => onRemoveFromCart(item)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default CartSection;
