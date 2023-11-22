const mongoose = require("mongoose");

mongoose.set("strictQuery", true); // or true

mongoose.connect("mongodb://127.0.0.1:27017/quizwizuserdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("error", (err) => {
  console.log("Failed to connect with db");
});

db.once("open", () => {
  console.log("Connected with db");
});
