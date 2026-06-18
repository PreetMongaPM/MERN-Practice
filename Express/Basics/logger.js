import express from "express";

const app = express();

app.use((req, res, next) => {
  const date = new Date().toISOString();
  console.log(`${date}:${req.method}:${req.url}`);
  next();
});

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(3001, () => {
  console.log("Server up and running at 3001");
});
