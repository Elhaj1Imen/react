import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-sections">
        <div className="footer-section">
          <h4>INFORMATIONS</h4>
          <address>
            NABEGH DNS<br />
            14 Rue d'Athènes 1ère étage<br />
            1001 Tunis<br />
            Tunisia<br />
            Appelez-nous : 00 216 55 33 03 35<br />
            écrivez-nous : <a href="mailto:commercial@nabegh-dns.tn">commercial@nabegh-dns.tn</a>
          </address>
        </div>

        <div className="footer-section">
          <h4>PRODUITS</h4>
          <ul>
            <li><a href="#promotions">Promotions</a></li>
            <li><a href="#new-products">Nouveaux produits</a></li>
            <li><a href="#best-sellers">Meilleures ventes</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>VOTRE COMPTE</h4>
          <ul>
            <li><a href="#personal-info">Informations personnelles</a></li>
            <li><a href="#orders">Commandes</a></li>
            <li><a href="#credits">Avoirs</a></li>
            <li><a href="#addresses">Adresses</a></li>
            <li><a href="#discounts">Bons de réduction</a></li>
            <li><a href="#alerts">Mes alertes</a></li>
          </ul>
        </div>
      </div>

      <div className="copyright">
        <p>© 2025 - Nabegh DNS™ - Distributeur Matériel Audiovisuel Pro & Broadcast.</p>
      </div>
    </footer>
  );
};

export default Footer;