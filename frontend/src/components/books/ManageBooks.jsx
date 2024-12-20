// // src/components/books/ManageBooks.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Change to useNavigate

const ManageBooks = () => {
  const [books, setBooks] = useState([]); // Initial books from dummy data
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState([]); // Cart state to store added items
  const navigate = useNavigate(); // Initialize useNavigate

  // Dummy Data for Books (Simulating backend data)
  const dummyBooks = [
    {
      id: 1,
      title: "The Great Gatsby",
      category: "Fiction",
      author: "F. Scott Fitzgerald",
      price: "10.99",
      publicationYear: "1925",
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      category: "Fiction",
      author: "Harper Lee",
      price: "8.99",
      publicationYear: "1960",
    },
    {
      id: 3,
      title: "1984",
      category: "Dystopian",
      author: "George Orwell",
      price: "12.99",
      publicationYear: "1949",
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      category: "Romance",
      author: "Jane Austen",
      price: "7.99",
      publicationYear: "1813",
    },
    {
      id: 5,
      title: "Moby-Dick",
      category: "Adventure",
      author: "Herman Melville",
      price: "9.99",
      publicationYear: "1851",
    },
  ];

  // Fetch books data from localStorage on component mount
  useEffect(() => {
    setBooks(dummyBooks); // Directly use the dummy data
  }, []);

  // Add a new book to the cart
  const addToCart = (book) => {
    setCart((prevCart) => [...prevCart, book]);
  };

  // Navigate to the shopping cart page
  const goToCart = () => {
    navigate("/admin-login/shopping-cart", { state: { cart } }); // Pass cart state on navigation
  };

  // Filter books based on search term
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Highlight search term in text
  const highlightText = (text, term) =>
    term
      ? text.replace(new RegExp(term, "gi"), (match) => `<mark>${match}</mark>`)
      : text;

  return (
    <div className="p-4">
      <h3 className="mb-4">Manage Books</h3>

      {/* Search Input */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search by Title, Category, or Author"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Add to Cart Button */}
      <button className="btn btn-primary mb-4" onClick={goToCart}>
        Go to Cart ({cart.length} items)
      </button>

      {/* Books Table */}
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Author</th>
            <th>Price</th>
            <th>Publication Year</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td
                dangerouslySetInnerHTML={{
                  __html: highlightText(book.title, searchTerm),
                }}
              />
              <td
                dangerouslySetInnerHTML={{
                  __html: highlightText(book.category, searchTerm),
                }}
              />
              <td
                dangerouslySetInnerHTML={{
                  __html: highlightText(book.author, searchTerm),
                }}
              />
              <td>{book.price}</td>
              <td>{book.publicationYear}</td>
              <td>
                {/* Add to Cart Button */}
                <button
                  className="btn btn-success"
                  onClick={() => addToCart(book)}
                >
                  Add to Cart
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageBooks;

// import React, { useState, useEffect } from "react";
// import { getMockData, addMockData, deleteMockData } from "../../utils/mockData";

// const ManageBooks = () => {
//   const [books, setBooks] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [newBook, setNewBook] = useState({
//     title: "",
//     category: "",
//     author: "",
//     price: "",
//     publicationYear: "",
//   });

//   // Fetch books data from localStorage on component mount
//   useEffect(() => {
//     getMockData("books").then((data) => setBooks(data));
//   }, []);

//   // Add a new book to the list
//   const addBook = () => {
//     if (
//       !newBook.title ||
//       !newBook.category ||
//       !newBook.author ||
//       !newBook.price ||
//       !newBook.publicationYear
//     ) {
//       alert("All fields must be filled!");
//       return;
//     }
//     if (isNaN(newBook.price) || isNaN(newBook.publicationYear)) {
//       alert("Price and Publication Year must be valid numbers.");
//       return;
//     }
//     // Retrieve books from localStorage to calculate the next ID
//     const currentBooks = JSON.parse(localStorage.getItem("books")) || [];
//     const nextId =
//       currentBooks.length > 0
//         ? Math.max(...currentBooks.map((book) => book.id)) + 1
//         : 1;

//     // Create a new book entry with the new ID
//     const newBookEntry = { ...newBook, id: nextId };

//     // Update the mock data and state
//     addMockData("books", newBookEntry)
//       .then((book) => {
//         setBooks((prevBooks) => {
//           // Avoid duplicates by checking if the book with the same ID exists
//           if (prevBooks.some((b) => b.id === book.id)) {
//             return prevBooks; // Skip adding duplicate
//           }
//           return [...prevBooks, book];
//         });
//       })
//       .catch((error) => console.error("Error adding book:", error));

//     // Clear the input fields after adding the book
//     setNewBook({
//       title: "",
//       category: "",
//       author: "",
//       price: "",
//       publicationYear: "",
//     });
//   };

//   // Edit a book by ID
//   const editBook = (bookId) => {
//     const bookToEdit = books.find((book) => book.id === bookId);
//     setNewBook(bookToEdit);
//   };

//   const confirmDelete = (bookId) => {
//     const isConfirmed = window.confirm("Are you sure you want to delete this book?");
//     if (isConfirmed) {
//       deleteBook(bookId);
//     }
//   };
  

//   // Delete a book by ID
//   const deleteBook = (bookId) => {
//     deleteMockData("books", bookId)
//       .then((updatedBooks) => {
//         setBooks(updatedBooks); // Update the state with the new list of books
//       })
//       .catch((error) => console.error("Error deleting book:", error));
//   };

//   // Filter books based on search term
//   const filteredBooks = books.filter(
//     (book) =>
//       book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       book.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       book.author.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Highlight search term in text
//   const highlightText = (text, term) =>
//     term
//       ? text.replace(new RegExp(term, "gi"), (match) => `<mark>${match}</mark>`)
//       : text;

//   return (
//     <div className="p-4">
//       <h3 className="mb-4">Manage Books</h3>

//       {/* Search Input */}
//       <div className="mb-4">
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Search by Title, Category, or Author"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>

//       {/* Add Book Form
//       <div className="mb-4">
//         <h5>Add New Book</h5>
//         <div className="row mb-3">
//           <div className="col-12 col-md-2">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Title"
//               value={newBook.title}
//               onChange={(e) =>
//                 setNewBook({ ...newBook, title: e.target.value })
//               }
//             />
//           </div>
//           <div className="col-12 col-md-3">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Category"
//               value={newBook.category}
//               onChange={(e) =>
//                 setNewBook({ ...newBook, category: e.target.value })
//               }
//             />
//           </div>
//           <div className="col-12 col-md-3">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Author"
//               value={newBook.author}
//               onChange={(e) =>
//                 setNewBook({ ...newBook, author: e.target.value })
//               }
//             />
//           </div>
//           <div className="col-12 col-md-2">
//             <input
//               type="number"
//               className="form-control"
//               placeholder="Price"
//               value={newBook.price}
//               onChange={(e) =>
//                 setNewBook({ ...newBook, price: e.target.value })
//               }
//             />
//           </div>
//           <div className="col-12 col-md-2">
//             <input
//               type="number"
//               className="form-control"
//               placeholder="Year"
//               value={newBook.publicationYear}
//               onChange={(e) =>
//                 setNewBook({ ...newBook, publicationYear: e.target.value })
//               }
//             />
//           </div>
//         </div>
//         <button className="btn btn-primary" onClick={addBook}>
//           Add Book
//         </button>
//       </div> */}

//       {/* Books Table */}
//       <table className="table table-bordered">
//         <thead className="thead-dark">
//           <tr>
//             <th>ID</th>
//             <th>Title</th>
//             <th>Category</th>
//             <th>Author</th>
//             <th>Price</th>
//             <th>Publication Year</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredBooks.map((book) => (
//             <tr key={book.id}>
//               <td>{book.id}</td>
//               <td
//                 dangerouslySetInnerHTML={{
//                   __html: highlightText(book.title, searchTerm),
//                 }}
//               />
//               <td
//                 dangerouslySetInnerHTML={{
//                   __html: highlightText(book.category, searchTerm),
//                 }}
//               />
//               <td
//                 dangerouslySetInnerHTML={{
//                   __html: highlightText(book.author, searchTerm),
//                 }}
//               />
//               <td>{book.price}</td>
//               <td>{book.publicationYear}</td>
//               <td className="d-flex gap-3">
//               <button
//                   className="btn btn-warning"
//                   onClick={() => editBook(book.id)}
//                 >
//                   Edit
//                 </button>
//                 <button
//                   className="btn btn-danger"
//                   onClick={() => confirmDelete(book.id)}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ManageBooks;
