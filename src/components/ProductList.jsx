import React from "react";
import ProductCard from "./ProductCard";

// IMPORTANT: Tests depend on this exact export
export const sampleProducts = [
  { id: 1, name: "Apple", price: "$1.00", category: "Fruits", inStock: true },
  { id: 2, name: "Banana", price: "$0.50", category: "Fruits", inStock: true },
  { id: 3, name: "Milk", price: "$2.50", category: "Dairy", inStock: true },
  { id: 4, name: "Cheese", price: "$3.00", category: "Dairy", inStock: true },
];

const ProductList = ({ products, category, addToCart }) => {
  // Filter products by selected category
  const filteredProducts =
    category === "all"
      ? products
      : products.filter((product) => product.category === category);

  return (
    <div>
      <h2>Available Products</h2>

      {/* REQUIRED MESSAGE FOR TEST */}
      {filteredProducts.length === 0 ? (
        <p>No products available</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
