import { React, useState } from "react";
import { createContext } from "react";

export const quizContext = createContext();
const QuizProvider = ({ children }) => {
  const [quizzes, setQuizzes] = useState(null);

  const [selectedQuiz, setSelectedQuiz] = useState(null);

  const setAnswer = (quizId, questionId, userAnswer) => {
    if (selectedQuiz?._id === quizId) {
      setSelectedQuiz((prev) => ({
        ...prev,
        questions: prev.questions.map((question) =>
          question._id === questionId
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
