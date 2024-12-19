// src/components/manageAuthors/ManageAuthors.jsx
import React, { useState, useEffect } from "react";
import { getMockData, addMockData, deleteMockData } from "../../utils/mockData";

const ManageAuthors = () => {
  const [authors, setAuthors] = useState([]);
  const [newAuthor, setNewAuthor] = useState("");

  useEffect(() => {
    getMockData("authors").then((data) => setAuthors(data));
  }, []);

  const addAuthor = () => {
    if (!newAuthor) {
      alert("Author name is required!");
      return;
    }

    addMockData("authors", { name: newAuthor })
      .then((author) => {
        setAuthors((prevAuthors) => [...prevAuthors, author]);
        setNewAuthor("");
      })
      .catch((error) => console.error("Error adding author:", error));
  };

  const deleteAuthor = (authorId) => {
    deleteMockData("authors", authorId)
      .then((updatedAuthors) => {
        setAuthors(updatedAuthors);
      })
      .catch((error) => console.error("Error deleting author:", error));
  };

  return (
    <div className="p-4">
      <h3 className="mb-4">Manage Authors</h3>
      <input
        type="text"
        className="form-control"
        placeholder="Author Name"
        value={newAuthor}
        onChange={(e) => setNewAuthor(e.target.value)}
      />
      <button className="btn btn-primary mt-2" onClick={addAuthor}>
        Add Author
      </button>

      {/* Authors Table */}
      <table className="table table-bordered mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Author Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author) => (
            <tr key={author.id}>
              <td>{author.id}</td>
              <td>{author.name}</td>
              <td>
                <button className="btn btn-danger" onClick={() => deleteAuthor(author.id)}>
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

export default ManageAuthors;
