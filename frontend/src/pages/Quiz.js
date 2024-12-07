import React, { useContext, useState, useEffect } from "react";
import { quizContext } from "../context/QuizContext";
import axios from "axios";
import Button from "@mui/material/Button";

const Quiz = () => {
  const { quizzes, setSelectedQuiz, selectedQuiz, setAnswer, setQuizzes } =
    useContext(quizContext);

  const calculateScore = (totalScore) => {
    setSelectedQuiz((prev) => ({
      ...prev,
      score: totalScore,
    }));

    setQuizzes((prevQuizzes) =>
      prevQuizzes.map((quiz) =>
        quiz._id === selectedQuiz._id ? { ...quiz, score: totalScore } : quiz
      )
    );
  };

  const handleAnswerChange = (questionId, value) => {
    setAnswer(selectedQuiz._id, questionId, value);
  };

  const handleSubmit = async () => {
    const allAnswered = selectedQuiz.questions.every(
      (question) => question.answer !== ""
    );

    if (allAnswered) {
      const response = await axios.put(
        "http://localhost:8080/quiz/",
        {
          quizzes: quizzes,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const totalScore = response.data.score;
      console.log(totalScore);
      calculateScore(totalScore);
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
          <div key={question._id} style={{ marginBottom: "12px" }}>
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
                        name={`question-${question._id}`}
                        value={option}
                        checked={question.answer === option}
                        onChange={() =>
                          handleAnswerChange(question._id, option)
                        }
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
                  handleAnswerChange(question._id, e.target.value)
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
