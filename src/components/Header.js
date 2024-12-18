import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header({ user, onLogout }) {
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
          {user && user.role === 'teacher' && (
            <li>
              <Link to="/add-test">Добавить тест</Link>
            </li>
          )}
          <li>
            <Link to="/profile">Профиль</Link>
          </li>
          <li>
            <button style={{background:'white', color:'#007bff', border:'none', borderRadius:'5px', padding:'5px 10px'}} onClick={onLogout}>Выйти</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
