import express from "express";
import fs from "fs";
import fsAsync from "fs/promises";

const app = express();

app.use(express.json());

app.get("/file", (req, res) => {
  fs.readFile("/file1.txt", (err, data) => {
    if (err) {
      res.sendStatus(404);
    }
  });
});

app.get("/file1", (req, res) => {
  // 잘못된 방법 (에러가 발생해도 어떤 에러인지 모르며 맨 아래 통합 에러 코드를 작성해도 가시성이 좋지 않음)
  // const data = fs.readFileSync("/file1.txt");
  // res.send(data);

  try {
    const data = fs.readFileSync("/file1.txt");
    res.send(data);
  } catch (error) {
    res.sendStatus(404);
  }
});

app.get("/file2", (req, res) => {
  // 프로미스에서 에러처리를 해주지 않으면 node 서버가 중지될 수 있음
  fsAsync
    .readFile("/file2.txt")
    .then((data) => res.send(data))
    .catch((error) => res.sendStatus(404));
});

app.get("/file3", async (req, res) => {
  try {
    const data = await fsAsync.readFile("/file2.txt");
    res.send(data);
  } catch (error) {
    res.sendStatus(404);
  }
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ message: "Somthing went wrong" });
});
