import React, { useContext, useState, useEffect } from "react";
import { quizContext } from "../context/QuizContext";
import Button from "@mui/material/Button";

const Quiz = () => {
  const { setSelectedQuiz, selectedQuiz, setAnswer, setQuizzes } =
    useContext(quizContext);

  const calculateScore = () => {
    let totalScore = 0;

    selectedQuiz.questions.forEach((question) => {
      if (question.answer === question.solution) {
        totalScore += 10;
      }
    });

    setSelectedQuiz((prev) => ({
      ...prev,
      score: totalScore,
    }));

    setQuizzes((prevQuizzes) =>
      prevQuizzes.map((quiz) =>
        quiz.id === selectedQuiz.id ? { ...quiz, score: totalScore } : quiz
      )
    );
  };

  const handleAnswerChange = (questionId, value) => {
    setAnswer(selectedQuiz.id, questionId, value);
  };

  const handleSubmit = () => {
    const allAnswered = selectedQuiz.questions.every(
      (question) => question.answer !== ""
    );

    if (allAnswered) {
      calculateScore();
    } else {
      alert("Please answer all questions before submitting.");
    }
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Button
        variant="outlined"
        color="primary"
        onClick={() => setSelectedQuiz(null)}
        style={{ marginBottom: "16px" }}
      >
        Back
      </Button>

      <h2 style={{ margin: "0 0 10px" }}>{selectedQuiz.title}</h2>
      <p style={{ margin: "0 0 16px" }}>{selectedQuiz.description}</p>

      <div>
        {selectedQuiz.questions.map((question, index) => (
          <div key={question.id} style={{ marginBottom: "12px" }}>
            <strong>Question {index + 1}:</strong> {question.question}
            {question.type === "options" ? (
              <ul style={{ listStyleType: "none", padding: "8px 0" }}>
                {question.options.map((option, idx) => (
                  <li
                    key={idx}
                    style={{
                      padding: "4px 0",
                      border: "1px solid #ddd",
                      borderRadius: "4px",
                      marginBottom: "6px",
                      paddingLeft: "8px",
                    }}
                  >
                    <label>
                      <input
                        type="radio"
                        name={`question-${question.id}`}
                        value={option}
                        checked={question.answer === option}
                        onChange={() => handleAnswerChange(question.id, option)}
                      />
                      {option}
                    </label>
                  </li>
                ))}
              </ul>
            ) : (
              <textarea
                style={{
                  width: "100%",
                  padding: "8px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  marginTop: "6px",
                }}
                placeholder="Type your answer here..."
                value={question.answer}
                onChange={(e) =>
                  handleAnswerChange(question.id, e.target.value)
                }
              ></textarea>
            )}
          </div>
        ))}
      </div>

      <div>
        <h3>Current Score: {selectedQuiz.score}</h3>
      </div>

      <Button
        variant="contained"
        color="secondary"
        onClick={handleSubmit}
        style={{ marginTop: "16px" }}
      >
        Submit
      </Button>
    </div>
  );
};

export default Quiz;
