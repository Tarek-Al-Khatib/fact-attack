import { React } from "react";
import { useState, useEffect } from "react";
import Quiz from "./Quiz";

const QuizzesDashboard = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Quizzes Dashboard</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {mockQuizzes.map((quiz) => (
          <Quiz key={quiz.id} />
        ))}
      </div>
    </div>
  );
};

export default QuizzesDashboard;
