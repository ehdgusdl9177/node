import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: ["http://127.0.0.1:5000"],
    optionsSuccessStatus: 200,
    credentials: true, // Access-Control-Allow-Credntials: true
  })
);

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.listen(8000);
