const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/plantPosts");

const postSeed = [
  {
    username: "Helloman",
    plantName: "Rose",
    location: "Austin",
    cost: "45",
    description: "very fine roses",
    date: new Date(Date.now())
  },
  {
    username: "Heo",
    plantName: "Bluebonnets",
    location: "Austin",
    cost: "45",
    description: "i have so many for sell",
    date: new Date(Date.now())
  },
  {
    username: "Devan",
    plantName: "Fern",
    location: "Round Rock",
    cost: "45",
    description: "Dense Ferns",
    date: new Date(Date.now())
  },
  
];

db.Post.remove({})
  .then(() => db.Post.collection.insertMany(postSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
