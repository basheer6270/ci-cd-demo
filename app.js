import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "CI/CD Demo Working!" });
});

export default app;
