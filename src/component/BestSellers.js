import React from 'react';
import ProductCard from './ProductCard';
import './BestSellers.css';

const BestSellers = () => {
    const bestSellers = [
        { name: "Mousse Acoustique", price: "   8,758 TND" },
        { name: "Mousse Acoustique Triangulaire", price: "  11.00 TND" },
        { name: "Mousse Acoustique Pyramidale", price: "  12.138TND" },
        { name: "Mousse Acoustique Phonique", price: "  9.8TND" },
        { name: "Mousse Acoustique Phonique", price: "  12.495TND" },
        { name: "Panneau Mousse Pyramidale", price: "  9.758TND" },
        { name: "Clap Cinéma Grand Modèle", price: "25,00 TND" },
        { name: "Panneaux Acoustique Muraux", price: "  9.52TND" },
        { name: "Mousse Acoustique Forme T", price: " 65.45TND" },
      { name: "Clap Cinéma Petit Modèle", price: "29,00 TND" },
     
    ];
  
    return (
      <section className="best-sellers">
        <h2>MEILLEURES VENTES</h2>
        <div className="product-list">
          {bestSellers.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
        <div className="view-all">
          <a href="#best-sellers">Toutes les meilleures ventes &gt;</a>
        </div>
      </section>
    );
  };
  export default BestSellers; 