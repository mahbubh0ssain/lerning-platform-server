const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const courseCategory = require("./data/course-category.json");
const courses = require("./data/courses.json");
app.use(cors());

app.get("/", (req, res) => {
  res.send("You are in the LEARN SHINE server.");
});

app.get("/course-category", (req, res) => {
  res.send(courseCategory);
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  const course = courses.find((info) => info.id === id);
  res.send(course);
});

app.listen(port, () => {
  console.log(`The LEARN SHINE server is running on default port ${port}`);
});
