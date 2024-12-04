import { React } from "react";
import { useState, useEffect } from "react";
import Quiz from "./Quiz";

const QuizzesDashboard = () => {
  const mockQuizzes = [
    {
      id: 1,
      title: "React Context Quiz",
      description: "Test your knowledge about React's Context API.",
      questions: [
        {
          id: 1,
          question: "What is the React Context API used for?",
          options: ["State management", "Styling", "Testing", "Building APIs"],
          type: "options",
        },
        {
          id: 2,
          question: "What method is used to create a Context?",
          options: [
            "createContext()",
            "useContext()",
            "ContextAPI()",
            "newContext()",
          ],
          type: "options",
        },
        {
          id: 3,
          question:
            "What hook is used to consume a Context in functional components?",
          options: ["useState", "useEffect", "useContext", "useReducer"],
          type: "options",
        },
        {
          id: 4,
          question:
            "Explain how you would provide a Context to a tree of components.",
          type: "input",
        },
        {
          id: 5,
          question: "What is the difference between Context API and Redux?",
          type: "input",
        },
      ],
    },
    {
      id: 2,
      title: "Laravel General Quiz",
      description: "A quiz on Laravel basics and features.",
      questions: [
        {
          id: 1,
          question: "What is the default templating engine in Laravel?",
          options: ["Twig", "Blade", "Handlebars", "EJS"],
          type: "options",
        },
        {
          id: 2,
          question: "Which command is used to create a new Laravel project?",
          options: [
            "laravel create",
            "laravel new",
            "composer create-project",
            "artisan init",
          ],
          type: "options",
        },
        {
          id: 3,
          question: "What is the role of the `.env` file in Laravel?",
          type: "input",
        },
        {
          id: 4,
          question: "Name the function used to define a route in Laravel.",
          type: "input",
        },
        { id: 5, question: "What is Eloquent in Laravel?", type: "input" },
      ],
    },
    {
      id: 3,
      title: "SQL Quiz",
      description: "Assess your knowledge on SQL queries and databases.",
      questions: [
        {
          id: 1,
          question: "Which command is used to create a new table?",
          options: ["CREATE TABLE", "ADD TABLE", "NEW TABLE", "INSERT TABLE"],
          type: "options",
        },
        {
          id: 2,
          question: "Which SQL clause is used to filter records?",
          options: ["WHERE", "SELECT", "ORDER BY", "GROUP BY"],
          type: "options",
        },
        {
          id: 3,
          question:
            "What is the difference between `INNER JOIN` and `LEFT JOIN`?",
          type: "input",
        },
        {
          id: 4,
          question:
            "Write an SQL query to find all users whose age is greater than 30.",
          type: "input",
        },
        {
          id: 5,
          question: "What does the `GROUP BY` clause do in SQL?",
          type: "input",
        },
      ],
    },
  ];
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
