import React, { useState } from 'react';
import '../styles/TestPage.css';

function AddTestPage() {
  const [testData, setTestData] = useState({
    level: '',
    name: '',
    questions: [
      {
        question: '',
        options: ['', '', '', ''],
        answer: ''
      }
    ]
  });

  const handleLevelChange = (e) => {
    setTestData({ ...testData, level: e.target.value });
  };

  const handleNameChange = (e) => {
    setTestData({ ...testData, name: e.target.value });
  };

  const handleQuestionChange = (index, value) => {
    const questions = [...testData.questions];
    questions[index].question = value;
    setTestData({ ...testData, questions });
  };

  const handleOptionChange = (qIndex, oIndex, value) => {
    const questions = [...testData.questions];
    questions[qIndex].options[oIndex] = value;
    setTestData({ ...testData, questions });
  };

  const handleAnswerChange = (qIndex, value) => {
    const questions = [...testData.questions];
    questions[qIndex].answer = value;
    setTestData({ ...testData, questions });
  };

  const addQuestion = () => {
    setTestData({
      ...testData,
      questions: [
        ...testData.questions,
        { question: '', options: ['', '', '', ''], answer: '' }
      ]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedTests = JSON.parse(localStorage.getItem('tests')) || [];
    storedTests.push(testData);
    localStorage.setItem('tests', JSON.stringify(storedTests));
    alert('Тест успешно добавлен!');
    setTestData({
      level: '',
      name: '',
      questions: [
        {
          question: '',
          options: ['', '', '', ''],
          answer: ''
        }
      ]
    });
  };

  return (
    <div className="test-page">
      <h2>Добавить тест</h2>
      <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
        <input
          type="text"
          placeholder="Уровень (например, A1, A2, B1, B2)"
          value={testData.level}
          onChange={handleLevelChange}
          required
          style={{ width: '80%', marginBottom: '10px', padding: '10px' }}
        />
        <input
          type="text"
          placeholder="Название теста"
          value={testData.name}
          onChange={handleNameChange}
          required
          style={{ width: '80%', marginBottom: '10px', padding: '10px' }}
        />
        
        {testData.questions.map((q, qIndex) => (
          <div key={qIndex} className="question-block" style={{ marginBottom: '20px' }}>
            <input
              type="text"
              placeholder={`Вопрос #${qIndex + 1}`}
              value={q.question}
              onChange={(e) => handleQuestionChange(qIndex, e.target.value)}
              required
              style={{ width: '80%', marginBottom: '5px', padding: '10px' }}
            />
            {q.options.map((opt, oIndex) => (
              <input
                key={oIndex}
                type="text"
                placeholder={`Вариант ответа #${oIndex + 1}`}
                value={opt}
                onChange={(e) => handleOptionChange(qIndex, oIndex, e.target.value)}
                required
                style={{ width: '80%', marginBottom: '5px', padding: '10px' }}
              />
            ))}
            <input
              type="text"
              placeholder="Правильный ответ"
              value={q.answer}
              onChange={(e) => handleAnswerChange(qIndex, e.target.value)}
              required
              style={{ width: '80%', marginBottom: '5px', padding: '10px' }}
            />
          </div>
        ))}
        
        <button type="button" onClick={addQuestion}>Добавить вопрос</button>
        <button type="submit">Сохранить тест</button>
      </form>
    </div>
  );
}

export default AddTestPage;
