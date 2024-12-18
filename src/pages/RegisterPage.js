import React, { useState } from 'react';
import '../styles/Auth.css';

function RegisterPage({ onRegister }) {
  const [formData, setFormData] = useState({ name: '', email: '', age: '', password: '', role: 'student' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some((u) => u.email === formData.email);
    if (userExists) {
      alert('Пользователь с таким email уже существует!');
      return;
    }

    const newUser = { ...formData };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Регистрация успешно завершена!');
    onRegister(newUser);
  };

  return (
    <div className="auth">
      <form onSubmit={handleRegister}>
        <h2>Регистрация</h2>
        <input
          type="text"
          name="name"
          placeholder="Имя"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
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
        <input
          type="password"
          name="password"
          placeholder="Пароль"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <select name="role" value={formData.role} onChange={handleChange}>
          <option value="student">Ученик</option>
          <option value="teacher">Учитель</option>
        </select>
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
}

export default RegisterPage;
