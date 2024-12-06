import express from "express";
import { connect } from "mongoose";

const app = express();

app.use(express.json());

app.listen(8080, async () => {
  console.log("Server running on port 8080");
  try {
    await connect("mongodb://localhost:27017/factattackdb");

    console.log("Connected to database");
  } catch (error) {
    console.log(error);
  }
});
