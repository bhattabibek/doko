import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ProductCard = ({ product }) => {
  const { navigate } = useContext(AppContext);

  return (
    product && (
      <div
        onClick={() => navigate(`/product/${product._id}`)}
        className="border border-gray-200 rounded-b-md md:px-4 px-3 py-2 bg-white min-w-56 max-w-56 w-full cursor-pointer"
      >
        {/* Image */}
        <div className="group flex items-center justify-center px-2">
          <img
            src={product.image[0]}
            alt={product.name}
            className="group-hover:scale-105 transition-transform duration-200 max-w-26 md:max-w-36"
          />
        </div>

        {/* Info */}
        <div className="text-gray-500 text-sm mt-2">
          <p>{product.category}</p>
          <p className="text-gray-700 font-medium text-lg truncate w-full">
            {product.name}
          </p>
          <div className="flex items-center gap-2 justify-between mt-1">
            <span className="text-indigo-600 font-semibold">NPR {product.offerPrice}</span>
            {product.price > product.offerPrice && (
              <span className="border-gray-300 border p-3 hover:bg-blue-900 hover:text-white rounded-2xl">
               ADD TO CART
              </span>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default ProductCard;
