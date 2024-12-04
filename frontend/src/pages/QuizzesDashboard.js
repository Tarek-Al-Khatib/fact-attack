import { React, useContext } from "react";
import { useState, useEffect } from "react";
import Quiz from "./Quiz";
import Button from "@mui/material/Button";
import { quizContext } from "../context/QuizContext";

const QuizzesDashboard = () => {
  const { quizzes, setSelectedQuiz, selectedQuiz } = useContext(quizContext);
  const [totalScore, setTotalScore] = useState(0);
  useEffect(() => {
    let newTotalScore = 0;
    quizzes.forEach((quiz) => {
      newTotalScore += quiz.score;
    });
    setTotalScore(newTotalScore);
  }, [quizzes]);
  return (
    <div style={{ padding: "20px" }}>
      {!selectedQuiz && (
        <div>
          <h1>Quizzes Dashboard</h1>
          <div>
            <h3>Aquired Score: {totalScore}</h3>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            {quizzes.map((quiz) => (
              <Button
                key={quiz.id}
                variant="contained"
                disabled={quiz.score != 0}
                onClick={() => {
                  setSelectedQuiz(quiz);
                }}
              >
                {quiz.title}
              </Button>
            ))}
          </div>
        </div>
      )}{" "}
      {selectedQuiz && <Quiz />}
    </div>
  );
};

export default QuizzesDashboard;
