import React from 'react';
import ProductCard from './ProductCard';
import './ProductCategory.css';

const ProductCategory = ({ title, products }) => {
  return (
    <div className="product-category">
      <h3>{title}</h3>
      <div className="product-list">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;