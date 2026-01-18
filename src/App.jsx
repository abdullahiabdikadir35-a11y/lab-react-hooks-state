import React, { useState } from "react";
import ProductList, { sampleProducts } from "./components/ProductList";
import DarkModeToggle from "./components/DarkModeToggle";
import Cart from "./components/Cart";

const App = () => {
  // Controls light/dark mode
  const [darkMode, setDarkMode] = useState(false);

  // Stores items added to the cart
  const [cartItems, setCartItems] = useState([]);

  // Stores selected category from dropdown
  const [category, setCategory] = useState("all");

  // Function to add products to cart
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#121212" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* Dark mode toggle button */}
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Category filter dropdown */}
      <div style={{ marginTop: "20px" }}>
        <label htmlFor="category">Filter by Category: </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All</option>
          <option value="Fruits">Fruits</option>
          <option value="Dairy">Dairy</option>
        </select>
      </div>

      {/* Product list */}
      <ProductList
        products={sampleProducts}
        category={category}
        addToCart={addToCart}
      />

      {/* Shopping cart */}
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default App;
