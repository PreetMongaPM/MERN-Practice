import express from "express";

const app = express();

app.use((req, res, next) => {
  console.log("Middleware 1");
  // next();
});
app.use((req, res, next) =>  {
  console.log("Middleware 2");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(3001, () => console.log("Server up and running at 3001"));
