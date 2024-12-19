// src/components/books/BookList.jsx

import React, { useState, useEffect } from "react";
import { getMockData } from "../../utils/mockData";

const BookList = () => {
  const [books, setBooks] = useState([]);

  // Fetch books data from mock data
  useEffect(() => {
    getMockData("books").then((data) => setBooks(data));
  }, []);

  const addToCart = (book) => {
    const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
    // Prevent adding duplicates
    if (!currentCart.some((item) => item.id === book.id)) {
      currentCart.push(book);
      localStorage.setItem("cart", JSON.stringify(currentCart));
      alert("Book added to cart!");
    } else {
      alert("This book is already in the cart.");
    }
  };

  return (
    <div className="p-4">
      <h3 className="mb-4">Books</h3>

      <div className="row">
        {books.map((book) => (
          <div key={book.id} className="col-12 col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text">{book.author}</p>
                <p className="card-text">{book.category}</p>
                <p className="card-text">${book.price}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => addToCart(book)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
