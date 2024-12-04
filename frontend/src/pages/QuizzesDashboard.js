import { React, useContext } from "react";
import { useState, useEffect } from "react";
import Quiz from "./Quiz";
import Button from "@mui/material/Button";
import { quizContext } from "../context/QuizContext";

const QuizzesDashboard = () => {
  const { quizzes, incrementScore, setSelectedQuiz, selectedQuiz } =
    useContext(quizContext);

  useEffect(() => {
    console.log(selectedQuiz);
  }, [selectedQuiz]);
  return (
    <div style={{ padding: "20px" }}>
      <h1>Quizzes Dashboard</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {quizzes.map((quiz) => (
          <Button
            key={quiz.id}
            variant="contained"
            onClick={() => {
              setSelectedQuiz(quiz);
            }}
          >
            {quiz.title}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default QuizzesDashboard;
