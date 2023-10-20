const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(
      "mongodb+srv://yashinnaran:G5COrwgQnYHinlaP@countiesdb.in16qug.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Mongo db connected");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
