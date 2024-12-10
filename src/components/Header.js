import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Интерактивный Тест</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/tests">Тесты</Link>
          </li>
          <li>
            <Link to="/profile">Профиль</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
