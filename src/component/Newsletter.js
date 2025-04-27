import React, { useState } from 'react';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Merci pour votre abonnement avec l'email: ${email}`);
    setEmail('');
  };

  return (
    <section className="newsletter">
      <h3>Recevez nos offres spéciales</h3>
      <form onSubmit={handleSubscribe}>
        <input
          type="email"
          placeholder="Votre adresse e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">S'ABONNER</button>
      </form>
      <p className="disclaimer">
        Vous pouvez vous désinscrire à tout moment. Vous trouverez pour cela nos informations de contact dans les conditions d'utilisation du site.
      </p>
    </section>
  );
};

export default Newsletter;