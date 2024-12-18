import React from 'react';
import '../styles/HomePage.css';

function HomePage({ user }) {
  return (
    <div className="homepage">
      <h1>Добро пожаловать, {user && user.name}!</h1>
      <p>Пройдите тесты, чтобы узнать свой уровень английского языка, и улучшайте свои знания.</p>
    </div>
  );
}

export default HomePage;
