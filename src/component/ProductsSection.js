import React from 'react';
import ProductCategory from './ProductCategory'; 
import './ProductsSection.css';
const ProductsSection = () => {
    
    const flashProducts = [
      { name: "Flash Voeloon 331EX", description: "FILMS/MASTER/SAFE", price: "370,00 TND", oldPrice: "540,00 TND" },
      { name: "Filtre UV 67mm", description: "TTL/HSX/MASTER/SLAVER", price: "28,00 TND", oldPrice: "35,00 TND"},
      { name: "Clamp Super Pince jy0012", description: "FILMS/MASTER/SAFE", price: "22,00 TND", oldPrice: "30,00 TND" },
      { name: "Clamp Super Pince XJY", description: "TTL/HS57.2.4G SLAVER", price: "20,00 TND" ,oldPrice: "28,00 TND"},
      { name: "Flash Voeloon FJ40 II", price: "479,00 TND" }
    ];
  
    const acousticProducts = [
      { name: "Mousse Acoustique Phonique", price: "9,80 TND" },
      { name: "Mousse Acoustique Phonique", price: "12,495 TND" },
      { name: "Mousse Acoustique Phonique", price: "12,852 TND" },
      { name: "Mousse Acoustique Triangulaire", price: "11,00 TND" },
      { name: "Mousse Acoustique Pyramidale", price: "12,138 TND" },
      { name: "Panneaux Acoustique Muraux", price: "9.52 TND" },
      { name: "Panneau En Mousse Pyramidale", price: "9,758 TND" },
      { name: "Mousse Acoustique Forme T", price: "65,45 TND" }
    ];
  
    const cinemaProducts = [
      { name: "Clap Cinéma Petit Modèle", price: "25,00 TND" },
      { name: "Clap Cinéma Grand Modèle", price: "29,00 TND" }
    ];
  
    return (
      <section className="products">
        <h2>NOUVEAUX PRODUITS</h2>
        
        <div className="product-grid">
          <ProductCategory title="Flashs Voeloon" products={flashProducts} />
          <ProductCategory title="Traitement Acoustique" products={acousticProducts} />
          <ProductCategory title="Cinéma" products={cinemaProducts} />
        </div>
  
        <div className="view-all">
          <a href="#all-products">Tous les produits &gt;</a>
        </div>
      </section>
    );
  };
  export default ProductsSection; 