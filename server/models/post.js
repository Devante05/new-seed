const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  username: { type: String, required: true },
  plantName: { type: String, required: true },
  location: { type: String, required: true },
  cost: { type: String, required: true },
  description: { type: String, required: true},
  image: {type: String},
  date: { type: Date, default: Date.now }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
