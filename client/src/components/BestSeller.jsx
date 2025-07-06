import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import ProductCard from '../components/ProductCard'; // ✅ Adjust the path if needed

const BestSeller = () => {
  const { products } = useContext(AppContext);

  return (
    <div className="mt-16">
      <p className="text-2xl font-medium md:text-3xl mb-4">Best Sellers</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {products
          .filter((product) => product.inStock)
          .slice(0, 5)
          .map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
      </div>
    </div>
  );
};

export default BestSeller;
