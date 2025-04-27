import React from 'react';
import './ProductCard.css';

const ProductCard = ({ name, description, price, oldPrice }) => {
  return (
    <div className="product-card">
      <h4>{name}</h4>
      {description && <p className="product-description">{description}</p>}
      <p className={`price ${oldPrice ? 'discount' : ''}`}>
        {oldPrice && <span className="old-price">{oldPrice}</span>}
        {price}
      </p>
    </div>
  );
};

export default ProductCard;