import React from 'react';
import '../styles/Profile.css';

function ProfilePage({ user }) {
  return (
    <div className="profile">
      <h2>Профиль пользователя</h2>
      <p><strong>Имя:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Возраст:</strong> {user.age}</p>
      <p><strong>Роль:</strong> {user.role === 'teacher' ? 'Учитель' : 'Ученик'}</p>
    </div>
  );
}

export default ProfilePage;
