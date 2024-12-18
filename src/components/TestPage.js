import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/TestPage.css';

function TestPage() {
  const { level } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const tests = JSON.parse(localStorage.getItem('tests')) || [];
  const currentTest = tests.find((t) => t.level === level);

  if (!currentTest) {
    return <h2 style={{ textAlign: 'center' }}>Уровень "{level}" не найден.</h2>;
  }

  const questions = currentTest.questions;

  const handleAnswer = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setSubmitted(true);
    }
  };

  const resetTest = () => {
    setScore(0);
    setCurrentQuestion(0);
    setSubmitted(false);
  };

  return (
    <div className={`test-page test-${level.toLowerCase()}`}>
      <h2>Тест уровня {level}: {currentTest.name}</h2>
      {!submitted ? (
        <div className="question">
          <p>{questions[currentQuestion].question}</p>
          {questions[currentQuestion].options.map((option, index) => (
            <button key={index} onClick={() => handleAnswer(option)}>
              {option}
            </button>
          ))}
        </div>
      ) : (
        <div className="result">
          <h3>Результаты</h3>
          <p>Вы ответили правильно на {score} из {questions.length} вопросов.</p>
          <button onClick={resetTest}>Пройти снова</button>
        </div>
      )}
    </div>
  );
}

export default TestPage;
