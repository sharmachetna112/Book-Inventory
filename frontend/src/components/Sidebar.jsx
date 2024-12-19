// import React from "react";
// import { NavLink } from "react-router-dom";

// const Sidebar = ({ links, role }) => {
//   return (
//     <div className="d-flex flex-column bg-primary text-white p-4" style={{ width: "250px", height: "100vh", position: "fixed" }}>
//       <h2 className="h4 mb-4">{role === "Admin" ? "Admin Panel" : "User Panel"}</h2>
//       <nav className="nav flex-column">
//         {links.map((link, index) => (
//           <NavLink
//             key={index}
//             to={link.path}
//             className={({ isActive }) =>
//               `nav-link ${isActive ? "bg-light text-primary" : "text-white"}`
//             }
//           >
//             {link.name}
//           </NavLink>
//         ))}
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;
