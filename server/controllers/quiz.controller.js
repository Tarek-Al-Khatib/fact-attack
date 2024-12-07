import { User } from "../models/user.model.js";

export const updateAnswers = async (req, res) => {
  try {
    const user = req.user;
    const { quizzes } = req.body;
    console.log(quizzes[0].questions);

    if (!quizzes || !Array.isArray(quizzes)) {
      return res
        .status(400)
        .send({ message: "Quizzes data must be an array and is required." });
    }

    const updatedUser = await User.findByIdAndUpdate(
      user._id,
      {
        quizzes: quizzes,
      },
      {
        new: true,
      }
    );

    return res.status(200).send({
      message: "All quizzes updated successfully",
      quizzes: updatedUser.quizzes,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send({ message: "Internal server error", error: error.message });
  }
};
