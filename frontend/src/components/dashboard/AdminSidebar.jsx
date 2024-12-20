// // src/components/dashboard/AdminSidebar.jsx
import React from "react";
import { FaUserAlt, FaBook, FaListAlt, FaBoxes, FaUserTie, FaCartPlus, FaChartLine, FaCogs, FaSignOutAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const sidebarItems = [
  { to: "/admin-login", label: "Dashboard", icon: <FaUserAlt /> },
  { to: "/admin-login/books", label: "Books", icon: <FaBook /> },
 /// { to: "/admin-login/authors", label: "Authors", icon: <FaUserTie /> },
  { to: "/admin-login/categories", label: "Categories", icon: <FaListAlt /> },
  { to: "/admin-login/inventory", label: "Inventory", icon: <FaBoxes /> },
  { to: "/admin-login/shopping-cart", label: "Shopping Cart", icon: <FaCartPlus /> },
  { to: "/admin-login/purchase-log", label: "Purchase Log", icon: <FaChartLine /> },
//   { to: "/admin-login/book-condition", label: "Book Condition", icon: <FaBoxes /> },
//   { to: "/admin-login/book-reviews", label: "Book Reviews", icon: <FaBook /> },
//   { to: "/admin-login/state-management", label: "State Management", icon: <FaCogs /> },
//   { to: "/admin-login/reports", label: "Reports", icon: <FaChartLine /> },
//   { to: "/admin-login/settings", label: "Settings", icon: <FaCogs /> },
//   { to: "/admin-login/logout", label: "Logout", icon: <FaSignOutAlt /> },
];

const AdminSidebar = () => {
  return (
    <div
      className="bg-dark text-white h-100 position-fixed d-flex flex-column"
      style={{ width: "16rem", height: "100vh" }} // Sidebar full height, no overflow here
    >
      {/* Sidebar Header */}
      <div className="bg-primary py-3 text-center">
        <h3 className="mb-0">Admin Panel</h3>
      </div>

      {/* Sidebar Navigation Links */}
      <div className="flex-grow-1" style={{ overflowY: "auto", padding: "1rem" }}>
        {sidebarItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.to}
            end={item.to === "/admin-login"} // This ensures the Dashboard link is only active on the exact `/admin-login` route
            className={({ isActive }) =>
              `${
                isActive ? "bg-primary" : ""
              } d-flex align-items-center mb-2 p-2 px-4 gap-3 text-white text-decoration-none rounded hover-effect`
            }
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default AdminSidebar;






// import React from "react";
// import { FaUserAlt, FaBook, FaListAlt, FaBoxes, FaUserTie } from "react-icons/fa";
// import { NavLink } from "react-router-dom";

// const AdminSidebar = () => {
//   return (
//     <div
//       className="bg-dark text-white h-100 position-fixed d-flex flex-column"
//       style={{ width: "16rem" }}
//     >
//       <div className="bg-primary py-3 text-center">
//         <h3 className="mb-0">Admin Panel</h3>
//       </div>
//       <div className="p-3 flex-grow-1">
//         <NavLink
//           to="/admin-login"
//           className={({ isActive }) =>
//             `${
//               isActive ? "bg-primary" : ""
//             } d-flex align-items-center mb-2 p-2 px-4 gap-3 text-white text-decoration-none rounded hover-effect`
//           }
//           end
//         >
//           <FaUserAlt />
//           <span>Dashboard</span>
//         </NavLink>
//         <NavLink
//           to="/admin-login/books"
//           className={({ isActive }) =>
//             `${
//               isActive ? "bg-primary" : ""
//             } d-flex align-items-center mb-2 p-2 px-4 gap-3 text-white text-decoration-none rounded hover-effect`
//           }
//         >
//           <FaBook />
//           <span>Books</span>
//         </NavLink>
//         <NavLink
//           to="/admin-login/authors"
//           className={({ isActive }) =>
//             `${
//               isActive ? "bg-primary" : ""
//             } d-flex align-items-center mb-2 p-2 px-4 gap-3 text-white text-decoration-none rounded hover-effect`
//           }
//         >
//           <FaUserTie />
//           <span>Authors</span>
//         </NavLink>
//         <NavLink
//           to="/admin-login/categories"
//           className={({ isActive }) =>
//             `${
//               isActive ? "bg-primary" : ""
//             } d-flex align-items-center mb-2 p-2 px-4 gap-3 text-white text-decoration-none rounded hover-effect`
//           }
//         >
//           <FaListAlt />
//           <span>Categories</span>
//         </NavLink>
//         <NavLink
//           to="/admin-login/inventory"
//           className={({ isActive }) =>
//             `${
//               isActive ? "bg-primary" : ""
//             } d-flex align-items-center mb-2 p-2 px-4 gap-3 text-white text-decoration-none rounded hover-effect`
//           }
//         >
//           <FaBoxes />
//           <span>Inventory</span>
//         </NavLink>
//       </div>
//     </div>
//   );
// };

// export default AdminSidebar;
