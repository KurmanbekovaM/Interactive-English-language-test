import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AuthPage({ onLogin }) {
  const [formData, setFormData] = useState({ email: '', password: '', name: '', age: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.email && formData.name && formData.age) {
      onLogin({ email: formData.email, name: formData.name, age: formData.age });
      navigate('/profile'); 
    } else {
      alert('Пожалуйста, заполните все поля');
    }
  };

  return (
    <div className="auth">
      <form onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Пароль"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Имя"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Возраст"
          value={formData.age}
          onChange={handleChange}
          required
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default AuthPage;
