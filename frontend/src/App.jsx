import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./auth/LoginPage";
import AdminDashboard from "./pages/AdminDashboard"; 
import UserDashboard from "./pages/UserDashboard"; 
import AdminSummary from "./components/dashboard/AdminSummary";
import BookList from "./components/books/BookList"; 
import AuthorList from "./components/authors/AuthorList"; 
import CategoryList from "./components/categories/CategoryList"; 
import InventoryList from "./components/inventory/InventoryList"; 
import ManageBooks from "./components/books/ManageBooks";
import ManageAuthors from "./components/authors/ManageAuthors";
import ManageCategories from "./components/categories/ManageCategories";
import ManageInventory from "./components/inventory/manageInventory";
import ShoppingCart from "./components/shoppingCart/ShoppingCart";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin-login" element={<AdminDashboard />}>
          <Route index element={<AdminSummary />} />
          <Route path="books" element={<ManageBooks />} />
          <Route path="authors" element={<ManageAuthors />} />
          <Route path="categories" element={<ManageCategories />} />
          <Route path="inventory" element={<ManageInventory />} />
          <Route path="shopping-cart" element={<ShoppingCart />} />
        </Route>
        <Route path="/user-login/*" element={<UserDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
