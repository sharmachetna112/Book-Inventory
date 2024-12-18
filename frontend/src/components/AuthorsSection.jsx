// src/components/AuthorsSection.jsx
import React from "react";

const AuthorsSection = ({ authors }) => {
  return (
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
  );
};

export default AuthorsSection;
