import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuizzesDashboard from "./pages/QuizzesDashboard";
import QuizProvider from "./context/QuizContext";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <QuizProvider>
          <Route path="/quiz" element={<QuizzesDashboard />} />
        </QuizProvider>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
