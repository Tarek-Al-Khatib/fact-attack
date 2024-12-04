import { React, useState } from "react";
import { createContext } from "react";

export const quizContext = createContext();
const QuizProvider = ({ children }) => {
  const [quizzes, setQuizzes] = useState([
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
          answer: "",
          solution: "State management",
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
          answer: "",
          solution: "createContext()",
        },
        {
          id: 3,
          question:
            "What hook is used to consume a Context in functional components?",
          options: ["useState", "useEffect", "useContext", "useReducer"],
          type: "options",
          answer: "",
          solution: "useContext",
        },
        {
          id: 4,
          question:
            "Explain how you would provide a Context to a tree of components.",
          type: "input",
          answer: "",
          solution:
            "You use the Context.Provider component to wrap the components you want to share the context with, passing the value as a prop.",
        },
        {
          id: 5,
          question: "What is the difference between Context API and Redux?",
          type: "input",
          answer: "",
          solution:
            "The Context API is primarily for passing data through a component tree without props, while Redux is a state management library with a more complex and feature-rich ecosystem for managing global state.",
        },
      ],

      score: 0,
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
          answer: "",
          solution: "Blade",
        },
        {
          id: 2,
          question: "Which command is used to create a new Laravel project?",
          options: [
            "laravel create",
            "laravel new",
            "composer create-project laravel/laravel",
            "artisan init",
          ],
          type: "options",
          answer: "",
          solution: "composer create-project laravel/laravel",
        },
        {
          id: 3,
          question: "What is the role of the `.env` file in Laravel?",
          type: "input",
          answer: "",
          solution:
            "The `.env` file is used to store environment-specific variables such as database credentials, API keys, and other configuration settings.",
        },
        {
          id: 4,
          question: "Name the function used to define a route in Laravel.",
          type: "input",
          answer: "",
          solution:
            "The `Route::get()` function is commonly used to define routes in Laravel. Other methods like `Route::post()`, `Route::put()`, etc., are also used for different HTTP methods.",
        },
        {
          id: 5,
          question: "What is Eloquent in Laravel?",
          type: "input",
          answer: "",
          solution:
            "Eloquent is Laravel's built-in ORM (Object-Relational Mapping) tool that provides an elegant way to interact with databases, making it easier to query and manipulate data.",
        },
      ],

      score: 0,
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
          answer: "",
          solution: "CREATE TABLE",
        },
        {
          id: 2,
          question: "Which SQL clause is used to filter records?",
          options: ["WHERE", "SELECT", "ORDER BY", "GROUP BY"],
          type: "options",
          answer: "",
          solution: "WHERE",
        },
        {
          id: 3,
          question:
            "What is the difference between `INNER JOIN` and `LEFT JOIN`?",
          type: "input",
          answer: "",
          solution:
            "`INNER JOIN` returns only the rows that have matching values in both tables, while `LEFT JOIN` returns all rows from the left table and matched rows from the right table, and NULL for unmatched rows.",
        },
        {
          id: 4,
          question:
            "Write an SQL query to find all users whose age is greater than 30.",
          type: "input",
          answer: "",
          solution: "SELECT * FROM users WHERE age > 30;",
        },
        {
          id: 5,
          question: "What does the `GROUP BY` clause do in SQL?",
          type: "input",
          answer: "",
          solution:
            "The `GROUP BY` clause groups rows that have the same values into summary rows, often used with aggregate functions like `COUNT()`, `SUM()`, `AVG()`, etc.",
        },
      ],

      score: 0,
    },
  ]);

  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const incrementScore = (quizId, points) => {
    setQuizzes((prevQuizzes) =>
      prevQuizzes.map((quiz) =>
        quiz.id === quizId ? { ...quiz, score: quiz.score + points } : quiz
      )
    );

    if (selectedQuiz?.id === quizId) {
      setSelectedQuiz((prev) => ({
        ...prev,
        score: prev.score + points,
      }));
    }
  };

  const setAnswer = (quizId, questionId, userAnswer) => {
    if (selectedQuiz?.id === quizId) {
      setSelectedQuiz((prev) => ({
        ...prev,
        questions: prev.questions.map((question) =>
          question.id === questionId
            ? { ...question, answer: userAnswer }
            : question
        ),
      }));
    }
  };

  return (
    <quizContext.Provider
      value={{
        quizzes,
        incrementScore,
        setSelectedQuiz,
        selectedQuiz,
        setAnswer,
        setQuizzes,
      }}
    >
      {children}
    </quizContext.Provider>
  );
};

export default QuizProvider;
