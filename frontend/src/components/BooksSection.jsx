// import React, { useState } from "react";

// const BooksSection = ({ books = [] }) => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredBooks = books.filter((book) =>
//     book.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <section className="mb-5">
//       <h2 className="mb-3">Books</h2>
//       <input
//         type="text"
//         className="form-control mb-3"
//         placeholder="Search books..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       {filteredBooks.length === 0 ? (
//         <p>No books found.</p>
//       ) : (
//         <table className="table table-hover">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Title</th>
//               <th>Category</th>
//               <th>Edition</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredBooks.map((book) => (
//               <tr key={book.id}>
//                 <td>{book.name}</td>
//                 <td>{book.title}</td>
//                 <td>{book.category}</td>
//                 <td>{book.edition}</td>
//                 <td>
//                   <button className="btn btn-success btn-sm">Add to Cart</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </section>
//   );
// };

// export default BooksSection;
