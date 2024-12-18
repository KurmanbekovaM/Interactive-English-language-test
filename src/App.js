import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import StartPage from './pages/StartPage';
import RegisterPage from './pages/RegisterPage';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import TestList from './components/TestList';
import TestPage from './components/TestPage';
import AddTestPage from './pages/AddTestPage';
import Header from './components/Header';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('currentUser'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('currentUser', JSON.stringify(userData));
  };

  const handleRegister = (userData) => {
    setUser(userData);
    localStorage.setItem('currentUser', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('currentUser');
  };

  return (
    <Router>
      {user && <Header user={user} onLogout={handleLogout} />}
      <Routes>
        {!user && (
          <>
            <Route path="/" element={<StartPage />} />
            <Route path="/register" element={<RegisterPage onRegister={handleRegister} />} />
            <Route path="/auth" element={<AuthPage onLogin={handleLogin} />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}

        {user && user.role === 'student' && (
          <>
            <Route path="/" element={<HomePage user={user} />} />
            <Route path="/tests" element={<TestList />} />
            <Route path="/test/:level" element={<TestPage />} />
            <Route path="/profile" element={<ProfilePage user={user} />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}

        {user && user.role === 'teacher' && (
          <>
            <Route path="/" element={<HomePage user={user} />} />
            <Route path="/tests" element={<TestList />} />
            <Route path="/test/:level" element={<TestPage />} />
            <Route path="/profile" element={<ProfilePage user={user} />} />
            <Route path="/add-test" element={<AddTestPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
