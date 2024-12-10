import React from 'react';
import '../styles/HomePage.css';

function HomePage() {
  return (
    <div className="homepage">
      <h1>Добро пожаловать в интерактивный тест по английскому языку!</h1>
      <p>
        Пройдите тесты, чтобы узнать свой уровень английского языка, и улучшите свои знания.
      </p>
      <img src="/images/welcome.jpg" alt="Welcome" />
    </div>
  );
}

export default HomePage;
