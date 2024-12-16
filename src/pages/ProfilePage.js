import React from 'react';
import '../styles/Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function ProfilePage({ user, level }) {
  return (
    <div className="profile">
  
      <h2>Профиль пользователя</h2>
          
          <div className="profile-icon" style={{ textAlign: 'center', marginBottom: '70px' }}>
        <FontAwesomeIcon icon={faUser} size="4x" style={{ color: '#4A90E2' }} />
      </div>
      <p><strong>Имя:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Возраст:</strong> {user.age}</p>
      <p><strong>Текущий уровень:</strong> {level}</p>
    </div>
  );
}

export default ProfilePage;
