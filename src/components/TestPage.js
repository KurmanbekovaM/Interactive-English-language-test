import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/TestPage.css';

function TestPage() {
  const { level } = useParams(); // Получаем уровень из URL
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  // Вопросы для каждого уровня
  const questionsByLevel = {
    A1: [
      {
        question: 'What is the capital of England?',
        options: ['Paris', 'London', 'Berlin', 'Madrid'],
        answer: 'London',
      },
      {
        question: 'Choose the correct article: ___ apple is red.',
        options: ['A', 'An', 'The', 'None'],
        answer: 'An',
      },
    ],
    A2: [
      {
        question: 'Which sentence is correct?',
        options: [
          'She don’t like coffee.',
          'She doesn’t like coffee.',
          'She doesn’t likes coffee.',
          'She don’t likes coffee.',
        ],
        answer: 'She doesn’t like coffee.',
      },
      {
        question: 'Complete the sentence: I have been living here ___ 2010.',
        options: ['since', 'for', 'in', 'on'],
        answer: 'since',
      },
    ],
    B1: [
      {
        question: 'Find the synonym for "happy":',
        options: ['Angry', 'Sad', 'Joyful', 'Hungry'],
        answer: 'Joyful',
      },
      {
        question: 'Complete the sentence: If I ___ you, I would take the job.',
        options: ['was', 'am', 'were', 'be'],
        answer: 'were',
      },
    ],
    B2: [
      {
        question: 'Which sentence uses the correct conditional tense?',
        options: [
          'If she studied, she would pass the exam.',
          'If she had studied, she passes the exam.',
          'If she studies, she will passed the exam.',
          'If she studying, she would have passed the exam.',
        ],
        answer: 'If she studied, she would pass the exam.',
      },
      {
        question: 'What is the meaning of the idiom "to beat around the bush"?',
        options: [
          'To avoid the main topic.',
          'To argue directly.',
          'To walk in the park.',
          'To get lost.',
        ],
        answer: 'To avoid the main topic.',
      },
    ],
  };

  const questions = questionsByLevel[level] || [];

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

  if (!questions.length) {
    return <h2>Уровень "{level}" не найден.</h2>;
  }

  return (
    <div className={`test-page test-${level.toLowerCase()}`}>
      <h2>Тест уровня {level}</h2>
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
