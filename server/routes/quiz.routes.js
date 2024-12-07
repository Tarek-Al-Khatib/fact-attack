import { Router } from "express";
import { updateAnswers } from "../controllers/quiz.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

export const quizRouter = new Router();

quizRouter.put("/", authMiddleware, updateAnswers);
