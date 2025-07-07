import { useState, useEffect, useContext } from "react";
import ProductCard from "../components/ProductCard";
import { AppContext } from "../context/AppContext";

const Products = () => {
  const { searchQuery, products } = useContext(AppContext);

  const [filteredProducts, setFilteredProducts] = useState([]);

useEffect(() => {
  const query = searchQuery.trim().toLowerCase();
  if (!query) {
    setFilteredProducts(products); // if empty query, show all
  } else {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
  }
}, [searchQuery, products]);

  
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  {filteredProducts.length > 0 ? (
    filteredProducts.map((product) => (
      <ProductCard key={product._id} product={product} />
    ))
  ) : (
    <p>No products found</p>
  )}
</div>
  );
};

export default Products;
