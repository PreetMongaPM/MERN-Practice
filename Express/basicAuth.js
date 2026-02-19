import express from "express";

const app = express();

const auth = (req, res, next) => {
  const token = req.query.authorisation;
  if (token !== "mysecrettoken") {
    res.status(401).json({ error: "access denied" });
  }
  next();
};

//route // middleware // route handler
app.get("/profile", auth, (req, res) => {
  res.send("Login successful");
});

app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.listen(3001, () => {
  console.log("Server up and running at 3001");
});
