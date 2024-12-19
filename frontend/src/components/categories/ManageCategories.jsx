// src/components/manageCategories/ManageCategories.jsx
import React, { useState, useEffect } from "react";
import { getMockData, addMockData, deleteMockData } from "../../utils/mockData";

const ManageCategories = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");

  useEffect(() => {
    getMockData("categories").then((data) => setCategories(data));
  }, []);

  const addCategory = () => {
    if (!newCategory) {
      alert("Category name is required!");
      return;
    }

    addMockData("categories", { name: newCategory })
      .then((category) => {
        setCategories((prevCategories) => [...prevCategories, category]);
        setNewCategory("");
      })
      .catch((error) => console.error("Error adding category:", error));
  };

  const deleteCategory = (categoryId) => {
    deleteMockData("categories", categoryId)
      .then((updatedCategories) => {
        setCategories(updatedCategories);
      })
      .catch((error) => console.error("Error deleting category:", error));
  };

  return (
    <div className="p-4">
      <h3 className="mb-4">Manage Categories</h3>
      <input
        type="text"
        className="form-control"
        placeholder="Category Name"
        value={newCategory}
        onChange={(e) => setNewCategory(e.target.value)}
      />
      <button className="btn btn-primary mt-2" onClick={addCategory}>
        Add Category
      </button>

      {/* Categories Table */}
      <table className="table table-bordered mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Category Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <td>{category.id}</td>
              <td>{category.name}</td>
              <td>
                <button className="btn btn-danger" onClick={() => deleteCategory(category.id)}>
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

export default ManageCategories;
