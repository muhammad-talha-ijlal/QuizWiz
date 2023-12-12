require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoute");
const classRoutes = require("./routes/classRoute");
const quizRoutes = require("./routes/quizRoute");
const questionRoutes = require("./routes/questionRoute");
require("./utils/db");

const app = express();
const PORT = 3005;
var cors = require("cors");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", userRoutes);
app.use("/api", classRoutes);
app.use("/api", quizRoutes);
app.use("/api", questionRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
