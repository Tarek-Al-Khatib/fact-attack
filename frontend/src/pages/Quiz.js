import React, { useContext } from "react";
import { quizContext } from "../context/QuizContext";
import Button from "@mui/material/Button";

const Quiz = () => {
  const { incrementScore, setSelectedQuiz, selectedQuiz } =
    useContext(quizContext);

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
                    {option}
                  </li>
                ))}
              </ul>
            ) : (
              <p
                style={{
                  padding: "4px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  marginTop: "6px",
                  backgroundColor: "#f9f9f9",
                }}
              >
                [User Input]
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
