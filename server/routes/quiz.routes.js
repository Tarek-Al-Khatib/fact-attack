import { Router } from "express";
import { updateAnswers } from "../controllers/quiz.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

export const quizRouter = new Router();

quizRouter.put("/", authMiddleware, updateAnswers);
