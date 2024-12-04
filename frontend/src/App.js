import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/quiz" element={<div>Hello world</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
