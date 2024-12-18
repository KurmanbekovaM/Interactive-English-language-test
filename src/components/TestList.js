import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/TestPage.css';

function TestList({ user }) {
  const tests = JSON.parse(localStorage.getItem('tests')) || [];

  return (
    <div className="test-list">
      <h2>Список тестов</h2>
      <ul>
        {tests.length === 0 ? (
          <p>Тесты не добавлены.</p>
        ) : (
          tests.map((test, index) => (
            <li key={index} className="test-item">
              {user && user.role === 'teacher' ? (
                <Link to={`/edit-test/${test.level}`} className="test-link">
                  Редактировать: {test.name} (Уровень: {test.level})
                </Link>
              ) : (
                <Link to={`/test/${test.level}`} className="test-link">
                  {test.name} (Уровень: {test.level})
                </Link>
              )}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default TestList;
