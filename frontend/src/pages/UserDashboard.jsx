// src/pages/UserDashboard.jsx
import React, { useState, useEffect } from "react";
import UserSidebar from "../components/UserSidebar";
import {
  getRandomBooks,
  getRandomAuthors,
  getRandomInventory,
  getRandomCart,
} from "../utils/mockData";

const UserDashboard = () => {
  const [authorId, setAuthorId] = useState(""); // Search input for authors
  const [books, setBooks] = useState([]); // Random books
  const [authors, setAuthors] = useState([]); // Random authors
  const [inventory, setInventory] = useState([]); // Random inventory
  const [cart, setCart] = useState([]); // Random cart items

  // Generate random data on component mount
  useEffect(() => {
    const randomizedBooks = getRandomBooks();
    setBooks(randomizedBooks);
    setAuthors(getRandomAuthors());
    setInventory(getRandomInventory());
    setCart(getRandomCart(randomizedBooks));
  }, []);

  // Handle Author Search
  const handleAuthorSearch = () => {
    console.log(`Search books by Author ID: ${authorId}`);
  };

  return (
    <div className="vh-100 d-flex flex-column">
      {/* Header Section */}
      <header className="bg-primary text-white d-flex justify-content-between align-items-center px-4 py-3 shadow">
        <h1 className="h5 mb-0">John Doe</h1>
        <div className="d-flex align-items-center">
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="rounded-circle me-2"
            style={{ width: "40px", height: "40px" }}
          />
          <span>Profile</span>
        </div>
      </header>

      {/* Main Content with Sidebar */}
      <div className="d-flex flex-grow-1">
        {/* Sidebar */}
        <UserSidebar />

        {/* Main Content */}
        <main className="flex-grow-1 bg-light p-4" style={{ marginLeft: "250px" }}>
          {/* Author Search */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <input
              type="text"
              className="form-control w-auto me-2"
              placeholder="Author ID"
              value={authorId}
              onChange={(e) => setAuthorId(e.target.value)}
            />
            <button className="btn btn-primary" onClick={handleAuthorSearch}>
              Search Author
            </button>
          </div>

          {/* Books Section */}
          <section className="mb-5">
            <h2 className="mb-3">Books</h2>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Edition</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {books.map((book) => (
                  <tr key={book.id}>
                    <td>{book.name}</td>
                    <td>{book.title}</td>
                    <td>{book.category}</td>
                    <td>{book.edition}</td>
                    <td>
                      <button
                        className="btn btn-success btn-sm"
                        onClick={() => setCart((prev) => [...prev, book])}
                      >
                        Add to Cart
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          {/* Authors Section */}
          <section className="mb-5">
            <h2 className="mb-3">Authors</h2>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                </tr>
              </thead>
              <tbody>
                {authors.map((author) => (
                  <tr key={author.id}>
                    <td>{author.id}</td>
                    <td>{author.firstName}</td>
                    <td>{author.lastName}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          {/* Shopping Cart Section */}
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
                        onClick={() =>
                          setCart((prev) => prev.filter((book) => book.id !== item.id))
                        }
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          {/* Inventory Section */}
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
        </main>
      </div>
    </div>
  );
};

export default UserDashboard;
