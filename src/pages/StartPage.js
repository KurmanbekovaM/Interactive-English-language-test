import React from 'react';
import { Link } from 'react-router-dom';

function StartPage() {
  return (
    <div className="auth">
      <form>
        <h2>Добро пожаловать!</h2>
        <p>Пожалуйста, выберите действие:</p>
        <Link to="/auth">
          <button type="button">Войти</button>
        </Link>
        <Link to="/register">
          <button type="button" style={{marginTop: '10px'}}>Регистрация</button>
        </Link>
      </form>
    </div>
  );
}

export default StartPage;
