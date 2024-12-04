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
        },
        {
          id: 3,
          question:
            "What hook is used to consume a Context in functional components?",
          options: ["useState", "useEffect", "useContext", "useReducer"],
          type: "options",
          answer: "",
        },
        {
          id: 4,
          question:
            "Explain how you would provide a Context to a tree of components.",
          type: "input",
          answer: "",
        },
        {
          id: 5,
          question: "What is the difference between Context API and Redux?",
          type: "input",
          answer: "",
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
          answer: "",
        },
        {
          id: 3,
          question: "What is the role of the `.env` file in Laravel?",
          type: "input",
          answer: "",
        },
        {
          id: 4,
          question: "Name the function used to define a route in Laravel.",
          type: "input",
          answer: "",
        },
        {
          id: 5,
          question: "What is Eloquent in Laravel?",
          type: "input",
          answer: "",
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
        },
        {
          id: 2,
          question: "Which SQL clause is used to filter records?",
          options: ["WHERE", "SELECT", "ORDER BY", "GROUP BY"],
          type: "options",
          answer: "",
        },
        {
          id: 3,
          question:
            "What is the difference between `INNER JOIN` and `LEFT JOIN`?",
          type: "input",
          answer: "",
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
          answer: "",
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
  };

  const setAnswer = (quizId, questionId, userAnswer) => {
    setQuizzes((prevQuizzes) =>
      prevQuizzes.map((quiz) => {
        if (quiz.id === quizId) {
          const updatedQuestions = quiz.questions.map((question) =>
            question.id === questionId
              ? { ...question, answer: userAnswer }
              : question
          );
          return { ...quiz, questions: updatedQuestions };
        }
        return quiz;
      })
    );

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
      }}
    >
      {children}
    </quizContext.Provider>
  );
};

export default QuizProvider;
