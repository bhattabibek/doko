import React from 'react';
import { categories } from '../assets/assets';

const Category = () => {
  return (
    <div className="mt-16">
      <p className="text-2xl font-medium md:text-3xl">Category</p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
        {categories.map((item, index) => (
          <div
            key={index}
            className="group cursor-pointer py-5 px-3 rounded-lg bg-gray-100 hover:bg-indigo-100 transition-all flex flex-col items-center justify-center"
          >
            <p className="text-sm font-medium mb-2">{item.name}</p>
            <img
              src={item.image}
              alt={item.name}
              className="max-w-28 transition-transform duration-300 group-hover:scale-110"
            />
            <p className="text-sm font-medium mt-2 text-center">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
