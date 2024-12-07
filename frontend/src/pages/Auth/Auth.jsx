import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../css/base/utilities.css";
import "../../css/auth.css";
import { quizContext } from "../../context/QuizContext";

const Auth = () => {
  const { setQuizzes } = useContext(quizContext);
  const [signup, setSignup] = useState(false);
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [loginState, setLoginState] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (signup) {
      setFormState({ ...formState, [name]: value });
    } else {
      setLoginState({ ...loginState, [name]: value });
    }
    setError("");
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (
      !formState.username ||
      !formState.password ||
      !formState.confirmPassword
    ) {
      setError("All fields are required.");
      return;
    }
    if (formState.password !== formState.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (formState.password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/auth/register",
        {
          username: formState.username,
          password: formState.password,
        }
      );

      console.log(response.data);
      setSignup(false);
    } catch (error) {
      setError("Error: Unable to register.");
      console.error(error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!loginState.username || !loginState.password) {
      setError("All fields are required.");
      return;
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/auth/login",
        {
          username: loginState.username,
          password: loginState.password,
        }
      );
      const { token, user } = response.data;
      localStorage.setItem("token", token);
      setQuizzes(user.quizzes);
      navigate("/layout");

      console.log("User logged in:", response.data);
    } catch (error) {
      setError("Error: Unable to log in.");
      console.error(error);
    }
  };

  return (
    <div className="form-container-login">
      <h3>{signup ? "Student Registration" : "Student Login"}</h3>
      {signup ? (
        <form onSubmit={handleRegister}>
          <input
            type="text"
            name="name"
            placeholder="Username"
            value={formState.username}
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formState.password}
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formState.confirmPassword}
            onChange={handleInputChange}
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Register</button>
          <p>
            Already have an account?{" "}
            <span
              className="toggle-link"
              onClick={() => {
                setSignup(false);
                setError("");
              }}
            >
              Login here
            </span>
          </p>
        </form>
      ) : (
        <form onSubmit={handleLogin}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={loginState.username}
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={loginState.password}
            onChange={handleInputChange}
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Login</button>
          <p>
            Don't have an account?{" "}
            <span
              className="toggle-link"
              onClick={() => {
                setSignup(true);
                setError("");
              }}
            >
              Register here
            </span>
          </p>
        </form>
      )}
    </div>
  );
};

export default Auth;
