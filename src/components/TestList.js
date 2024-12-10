import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/TestPage.css';

function TestList() {
  const tests = [
    { id: 1, level: 'A1', name: 'Тест для начинающих' },
    { id: 2, level: 'A2', name: 'Тест для элементарного уровня' },
    { id: 3, level: 'B1', name: 'Тест для среднего уровня' },
    { id: 4, level: 'B2', name: 'Тест для продвинутого уровня' },
  ];

  return (
    <div className="test-list">
      <h2>Список тестов</h2>
      <ul>
        {tests.map((test) => (
          <li key={test.id} className="test-item">
            <Link to={`/test/${test.level}`} className="test-link">
              {test.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TestList;
