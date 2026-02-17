import express from "express";

const app = express();

app.listen(3001, (req, res, next) => {
  console.log("server up and running at 3001");
  app.use((req, res, next) => {
    console.log("Middleware 1");
    next();
  });
  app.use((req, res, next) => {
    console.log("Middleware 2");
    next();
  });

  app.get("/", () => {
    res.send("Hello");
  });
});
