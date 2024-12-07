import express from "express";
import { connect } from "mongoose";
import cors from "cors";
import { authRouter } from "./routes/auth.routes.js";
import { quizRouter } from "./routes/quiz.routes.js";
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use("/auth", authRouter);
app.use("/quiz", quizRouter);

app.listen(8080, async () => {
  console.log("Server running on port 8080");
  try {
    await connect("mongodb://localhost:27017/factattackdb");

    console.log("Connected to database");
  } catch (error) {
    console.log(error);
  }
});
