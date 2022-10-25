const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const courses = require("./data/course-category.json");
app.use(cors());

app.get("/", (req, res) => {
  res.send("You are in the LEARN SHINE server.");
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.listen(port, () => {
  console.log(`The LEARN SHINE server is running on default port ${port}`);
});
