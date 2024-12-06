import { Schema, model } from "mongoose";

const quizSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  questions: [
    {
      question: { type: String, required: true },
      type: { type: String, enum: ["options", "input"], required: true },
      options: [String],
      answer: { type: String, default: "" },
      solution: { type: String, required: true },
    },
  ],
  score: { type: Number, default: 0 },
});

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  quizzes: { type: [quizSchema], default: [] },
});

export const User = model("User", userSchema);
