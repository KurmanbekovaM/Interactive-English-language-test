import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import ProfilePage from './pages/ProfilePage';
import TestList from './components/TestList';
import TestPage from './components/TestPage';
import Header from './components/Header';
import RegisterPage from './pages/RegisterPage';  // Страница регистрации

// Компонент для защиты страниц, требующих авторизации
function RequireAuth({ user, children }) {
  const location = useLocation();

  if (!user) {
    // Если пользователь не авторизован, перенаправляем на страницу авторизации
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  return children;
}

function App() {
  const [user, setUser] = useState(null); // Данные пользователя
  const [level, setLevel] = useState('A1'); // Уровень пользователя

  // Логика авторизации
  const handleLogin = (userData) => {
    setUser(userData); // Устанавливаем пользователя после авторизации
  };

  // Логика регистрации
  const handleRegister = (userData) => {
    setUser(userData); // Устанавливаем пользователя после регистрации
  };

  // Логика выхода
  const handleLogout = () => {
    setUser(null); // Очистка данных пользователя при выходе
  };

  // Обновление уровня пользователя
  const updateLevel = (newLevel) => {
    setLevel(newLevel); // Обновление уровня
  };

  return (
    <Router>
      <Header onLogout={handleLogout} user={user} /> {/* Передаем данные для выхода и пользователя */}
      <Routes>
        {/* Общедоступные страницы */}
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage onLogin={handleLogin} />} />
        <Route path="/register" element={<RegisterPage onRegister={handleRegister} />} /> {/* Страница регистрации */}

        {/* Требуется авторизация */}
        <Route
          path="/tests"
          element={
            <RequireAuth user={user}>
              <TestList />
            </RequireAuth>
          }
        />
        <Route
          path="/test/:level"
          element={
            <RequireAuth user={user}>
              <TestPage />
            </RequireAuth>
          }
        />
        <Route
          path="/profile"
          element={
            <RequireAuth user={user}>
              <ProfilePage user={user} level={level} updateLevel={updateLevel} />
            </RequireAuth>
          }
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
