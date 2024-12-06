import express from "express";
import { connect } from "mongoose";
import { authRouter } from "./routes/auth.routes.js";
const app = express();

app.use(express.json());
app.use("/auth", authRouter);

app.listen(8080, async () => {
  console.log("Server running on port 8080");
  try {
    await connect("mongodb://localhost:27017/factattackdb");

    console.log("Connected to database");
  } catch (error) {
    console.log(error);
  }
});
