import React from 'react';
import Header from './component/Header';
import Navigation from './component/Navigation';

import ProductsSection from './component/ProductsSection';
import BestSellers from './component/BestSellers';
import Newsletter from './component/Newsletter';
import Footer from './component/Footer';
import ProductCategory from './component/ProductCategory';

import './App.css';
import ProductCard from './component/ProductCard';



const App = () => {
  return (
    <div className="app">
      <Header />
      <Navigation />
     
      <ProductCard/>
      <ProductCategory/>
      <ProductsSection />
      <BestSellers />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;