const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "Great article!",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: "I agree with you!",
    user_id: 2,
    post_id: 1,
  },
  {
    comment_text: "Why do you think that?",
    user_id: 3,
    post_id: 1,
  },
  {
    comment_text: "Are you sure about that?",
    user_id: 4,
    post_id: 1,
  },
  {
    comment_text: "What do you mean?",
    user_id: 5,
    post_id: 1,
  },
  {
    comment_text: "Please explain!",
    user_id: 1,
    post_id: 2,
  },
  {
    comment_text: "How do you know?",
    user_id: 2,
    post_id: 2,
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
