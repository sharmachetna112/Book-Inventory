// src/components/manageInventory/ManageInventory.jsx
import React, { useState, useEffect } from "react";
import { getMockData, addMockData, deleteMockData } from "../../utils/mockData";

const ManageInventory = () => {
  const [inventory, setInventory] = useState([]);
  const [newItem, setNewItem] = useState("");

  useEffect(() => {
    getMockData("inventory").then((data) => setInventory(data));
  }, []);

  const addItem = () => {
    if (!newItem) {
      alert("Item name is required!");
      return;
    }

    addMockData("inventory", { name: newItem })
      .then((item) => {
        setInventory((prevInventory) => [...prevInventory, item]);
        setNewItem("");
      })
      .catch((error) => console.error("Error adding item:", error));
  };

  const deleteItem = (itemId) => {
    deleteMockData("inventory", itemId)
      .then((updatedInventory) => {
        setInventory(updatedInventory);
      })
      .catch((error) => console.error("Error deleting item:", error));
  };

  return (
    <div className="p-4">
      <h3 className="mb-4">Manage Inventory</h3>
      <input
        type="text"
        className="form-control"
        placeholder="Item Name"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button className="btn btn-primary mt-2" onClick={addItem}>
        Add Item
      </button>

      {/* Inventory Table */}
      <table className="table table-bordered mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Item Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>
                <button className="btn btn-danger" onClick={() => deleteItem(item.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageInventory;
