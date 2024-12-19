// // src/components/UsersSection.jsx
// import React from 'react';

// const UsersSection = ({ users }) => {
//   return (
//     <section className="mb-5">
//       <h2 className="mb-3">Users</h2>
//       <table className="table table-hover">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Email</th> 
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user.id}>
//               <td>{user.id}</td>
//               <td>{user.firstName}</td>
//               <td>{user.lastName}</td>
//               <td>{user.email}</td> 
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </section>
//   );
// };

// export default UsersSection;