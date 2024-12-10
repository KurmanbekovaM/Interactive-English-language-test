import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import ProfilePage from './pages/ProfilePage';
import TestList from './components/TestList';
import TestPage from './components/TestPage';
import Header from './components/Header';

function App() {
  const [user, setUser] = useState(null); // User данные (по умолчанию null)
  const [level, setLevel] = useState('A1'); // Уровень пользователя

  const handleLogin = (userData) => {
    setUser(userData); // Установка пользователя после авторизации
  };

  return (
    <Router>
      <Routes>
        {/* Авторизация для неавторизованных пользователей */}
        {!user && (
          <>
            <Route path="/auth" element={<AuthPage onLogin={handleLogin} />} />
            <Route path="*" element={<Navigate to="/auth" />} />
          </>
        )}

        {/* Страницы для авторизованных пользователей */}
        {user && (
          <>
            <Route path="/" element={<><Header /><HomePage /></>} />
            <Route path="/tests" element={<><Header /><TestList /></>} />
            <Route path="/test/:level" element={<><Header /><TestPage /></>} />
            <Route path="/profile" element={<><Header /><ProfilePage user={user} level={level} /></>} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
