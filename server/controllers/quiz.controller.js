import { User } from "../models/user.model.js";

export const updateAnswers = async (req, res) => {
  try {
    const userId = req.user._id;
    const { quizId, answers } = req.body;

    if (!quizId || !answers) {
      return res
        .status(400)
        .send({ message: "Quiz ID and answers are required" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    const quiz = user.quizzes.find((quiz) => quiz._id.toString() == quizId);
    if (!quiz) {
      return res.status(404).send({ message: "Quiz not found" });
    }

    let totalScore = 0;

    quiz.questions.forEach((question) => {
      const userAnswer = answers[question._id];
      question.answer = userAnswer;

      if (userAnswer === question.solution) {
        totalScore += 10;
      }
    });

    quiz.score = totalScore;

    await user.save();

    return res.status(200).send({
      message: "Quiz updated successfully",
      score: totalScore,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Internal server error" });
  }
};
