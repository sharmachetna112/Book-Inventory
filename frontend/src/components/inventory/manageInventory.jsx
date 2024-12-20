// // src/components/manageInventory/ManageInventory.jsx
import React, { useState, useEffect } from "react";

// Mock Data for Inventory (Simulating backend data)
const mockData = [
  { ISBN: "978-3-16-148410-0", name: "Item 1", rank: "1", purchased: "yes" },
  { ISBN: "978-0-262-13472-9", name: "Item 2", rank: "2", purchased: "No" },
  { ISBN: "978-1-4028-9462-6", name: "Item 3", rank: "1", purchased: "yes" },
];

const ManageInventory = () => {
  const [inventory, setInventory] = useState(mockData); // Initial inventory from mock data
  const [ISBN, setISBN] = useState("");
  const [rank, setRank] = useState("");
  const [purchased, setPurchased] = useState("");
  const [searchISBN, setSearchISBN] = useState(""); // For searching by ISBN
  const [filteredInventory, setFilteredInventory] = useState(mockData); // Inventory filtered based on search

  const addItem = () => {
    if (!ISBN || !rank || !purchased) {
      alert("All fields are required!");
      return;
    }

    // Add new item to the mock inventory
    const newItem = { ISBN, name: `Item ${ISBN}`, rank, purchased };
    setInventory((prevInventory) => [...prevInventory, newItem]);
    setFilteredInventory((prevInventory) => [...prevInventory, newItem]);
    setISBN("");
    setRank("");
    setPurchased("");
  };

  const searchItem = () => {
    if (!searchISBN) {
      alert("Please enter an ISBN to search.");
      return;
    }

    // Filter the inventory based on the ISBN
    const filtered = inventory.filter((item) => item.ISBN === searchISBN);

    if (filtered.length > 0) {
      // If the item is found, update the filtered inventory
      setFilteredInventory(filtered);
    } else {
      alert("Item not found.");
      setFilteredInventory([]); // Reset filtered inventory if not found
    }
  };

  return (
    <div className="p-4">
      <h3 className="mb-4">Manage Inventory</h3>
      
      {/* Search Field for ISBN */}
      <input
        type="text"
        className="form-control"
        placeholder="Search by ISBN"
        value={searchISBN}
        onChange={(e) => setSearchISBN(e.target.value)}
      />
      <button className="btn btn-primary mt-2" onClick={searchItem}>
        Search
      </button>

      <hr />

      {/* Add New Inventory */}
      <input
        type="text"
        className="form-control"
        placeholder="ISBN (e.g., 978-3-16-148410-0)"
        value={ISBN}
        onChange={(e) => setISBN(e.target.value)}
      />
      <input
        type="text"
        className="form-control mt-2"
        placeholder="Rank (e.g., 1 for Bad, 2 for Poor)"
        value={rank}
        onChange={(e) => setRank(e.target.value)}
      />
      <input
        type="text"
        className="form-control mt-2"
        placeholder="Purchased (Purchased/Not Purchased)"
        value={purchased}
        onChange={(e) => setPurchased(e.target.value)}
      />
      <button className="btn btn-primary mt-2" onClick={addItem}>
        Add Item
      </button>

      {/* Inventory Table */}
      <table className="table table-bordered mt-4">
        <thead>
          <tr>
            <th>ISBN</th>
            <th>Rank</th>
            <th>Purchased</th>
          </tr>
        </thead>
        <tbody>
          {filteredInventory.length === 0 ? (
            <tr>
              <td colSpan="3" className="text-center">No items found</td>
            </tr>
          ) : (
            filteredInventory.map((item) => (
              <tr key={item.ISBN}>
                <td>{item.ISBN}</td>
                <td>{item.rank}</td>
                <td>{item.purchased}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ManageInventory;

// import React, { useState, useEffect } from "react";
// import { getMockData, addMockData, deleteMockData } from "../../utils/mockData";

// const ManageInventory = () => {
//   const [inventory, setInventory] = useState([]);
//   const [newItem, setNewItem] = useState("");

//   useEffect(() => {
//     getMockData("inventory").then((data) => setInventory(data));
//   }, []);

//   const addItem = () => {
//     if (!newItem) {
//       alert("Item name is required!");
//       return;
//     }

//     addMockData("inventory", { name: newItem })
//       .then((item) => {
//         setInventory((prevInventory) => [...prevInventory, item]);
//         setNewItem("");
//       })
//       .catch((error) => console.error("Error adding item:", error));
//   };

//   const deleteItem = (itemId) => {
//     deleteMockData("inventory", itemId)
//       .then((updatedInventory) => {
//         setInventory(updatedInventory);
//       })
//       .catch((error) => console.error("Error deleting item:", error));
//   };

//   return (
//     <div className="p-4">
//       <h3 className="mb-4">Manage Inventory</h3>
//       <input
//         type="text"
//         className="form-control"
//         placeholder="Item Name"
//         value={newItem}
//         onChange={(e) => setNewItem(e.target.value)}
//       />
//       <button className="btn btn-primary mt-2" onClick={addItem}>
//         Add Item
//       </button>

//       {/* Inventory Table */}
//       <table className="table table-bordered mt-4">
//         <thead>
//           <tr>
//             <th>ISBN</th>
//             <th>Rank</th>
//             <th>Purchased</th>
//           </tr>
//         </thead>
//         <tbody>
//           {inventory.map((item) => (
//             <tr key={item.id}>
//               <td>{item.id}</td>
//               <td>{item.name}</td>
//               <td>
//                 <button className="btn btn-danger" onClick={() => deleteItem(item.id)}>
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

// export default ManageInventory;
