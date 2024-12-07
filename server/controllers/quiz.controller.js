import { User } from "../models/user.model.js";

export const updateAnswers = async (req, res) => {
  try {
    const userId = req.user._id;
    const { quizzes } = req.body;

    if (!quizzes || !Array.isArray(quizzes)) {
      return res
        .status(400)
        .send({ message: "Quizzes data must be an array and is required." });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    let overallScore = 0;

    quizzes.forEach((quizUpdate) => {
      const quiz = user.quizzes.find(
        (existingQuiz) => existingQuiz._id.toString() === quizUpdate.quizId
      );

      if (!quiz) {
        throw new Error(`Quiz with ID ${quizUpdate.quizId} not found.`);
      }

      let quizScore = 0;

      quizUpdate.questions.forEach((questionUpdate) => {
        const question = quiz.questions.find(
          (existingQuestion) =>
            existingQuestion._id.toString() === questionUpdate.questionId
        );

        if (question) {
          question.answer = questionUpdate.answer;

          if (question.answer === question.solution) {
            quizScore += 10;
          }
        }
      });

      quiz.score = quizScore;
      overallScore += quizScore;
    });

    await user.save();

    return res.status(200).send({
      message: "All quizzes updated successfully",
      score: overallScore,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send({ message: "Internal server error", error: error.message });
  }
};
