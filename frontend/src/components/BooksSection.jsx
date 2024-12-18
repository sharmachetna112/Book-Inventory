// src/components/BooksSection.jsx
import React from "react";

const BooksSection = ({ books, onAddToCart }) => {
  return (
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
                  onClick={() => onAddToCart(book)}
                >
                  Add to Cart
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default BooksSection;
