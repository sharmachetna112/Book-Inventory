// src/components/InventorySection.jsx
import React from "react";

const InventorySection = ({ inventory }) => {
  return (
    <section>
      <h2 className="mb-3">Inventory</h2>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default InventorySection;
