import React from 'react';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#home">Accueil</a></li>
        <li><a href="#travelling">Travelling & Trépied</a></li>
        <li><a href="#lighting">Éclairage & Studio</a></li>
        <li><a href="#audio">Audio</a></li>
        <li><a href="#acoustic">Traitement acoustique</a></li>
        <li><a href="#accessories">Accessoires</a></li>
        <li><a href="#tv-support">Support TV</a></li>
        <li><a href="#photo-video">Photo & vidéo</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;