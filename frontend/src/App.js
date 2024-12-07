import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuizzesDashboard from "./pages/QuizzesDashboard";
import QuizProvider from "./context/QuizContext";
import Auth from "./pages/Auth/Auth";

function App() {
  return (
    <QuizProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/quiz" element={<QuizzesDashboard />} />
        </Routes>
      </BrowserRouter>
    </QuizProvider>
  );
}

export default App;
