const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

let id = 2;

const diaryList = [
  {
    id: 1,
    title: "오늘은 리엑트 세션",
    content: "열심히 배워보자",
    date: "2022년 11월 23일",
  },
];

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/api/diary", function (req, res) {
  res.json(diaryList);
});

app.post("/api/diary", (req, res) => {
  const { title, content, date } = req.body;
  diaryList.push({
    id: id++,
    title,
    content,
    date,
  });
  return res.send("success");
});

app.listen(4000, () => {
  console.log("server start!");
});
