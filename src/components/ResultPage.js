import React from 'react';

const ResultPage = ({ score, total }) => {
  return (
    <div className="result-page">
      <h2>Результаты теста</h2>
      <p>Вы ответили правильно на {score} из {total} вопросов.</p>
      <a href="/tests">Пройти ещё тест</a>
    </div>
  );
};

export default ResultPage;
