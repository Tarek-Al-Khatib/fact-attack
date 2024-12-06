import { Router } from "express";
import { login, register } from "../controllers/auth.controller.js";

export const authRouter = new Router();

authRouter.post("/login", login);
authRouter.post("/register", register);
