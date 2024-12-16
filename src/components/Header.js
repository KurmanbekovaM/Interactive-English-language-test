import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserPlus } from 'react-icons/fa'; 
import '../styles/Header.css';

function Header({ onLogout, user }) {
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

          {!user && (
            <li>
              <Link to="/auth">
                <FaUserPlus /> 
              </Link>
            </li>
          )}

          {user && (
            <li>
              <Link to="/" onClick={onLogout}>
                Выйти
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;

