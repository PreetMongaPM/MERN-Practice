import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({ Page: "Home" });
});

app.get("/users", (req, res) => {
  res.send(JSON.stringify({ Page: "users" }));
});

//can use res.json instead of res.send better

app.get("/products", (req, res) => {
  res.send(JSON.stringify({ Page: "products" }));
});

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(3001, () => {
  console.log("Server up and running at 3001");
});
