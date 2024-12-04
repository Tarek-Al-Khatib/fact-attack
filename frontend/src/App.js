import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuizzesDashboard from "./pages/QuizzesDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/quiz" element={<QuizzesDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
