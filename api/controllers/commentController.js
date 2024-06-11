import { errorHandler } from "../utils/error.js";
import Comment from "../models/commentModel.js";

export const createComment = async (req, res, next) => {
  const { content, postId, userId } = req.body;
  try {
    if (userId !== req.user.id) {
      return next(errorHandler(401, "You are not allowed to create a comment"));
    }
    const newComment = new Comment({
      content,
      userId,
      postId,
    });
    await newComment.save();
    res.status(200).json(newComment);
  } catch (error) {
    next(error);
  }
};

export const getPostComments = async (req, res, next) => {
  try {
    const comment = await Comment.find({ postId: req.params.postId }).sort({
      createdAt: -1,
    });
    res.status(200).json(comment);
  } catch (error) {
    next(error);
  }
};
