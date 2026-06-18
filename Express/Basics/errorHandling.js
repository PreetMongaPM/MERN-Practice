import express from "express";

const app = express();
const PORT = 3001;

app.get("/success", (req, res) => {
  console.log("Everything working fine!");
  res.send("Success");
});

app.get("/sync-error", (req, res) => {
  throw new Error("Synchronous error occured");
});

app.get("/async-error", async (req, res, next) => {
  try {
    throw new Error("Async error occured");
  } catch (err) {
    next(err);
  }
});

app.use((err, req, res) => {
  console.error("Error:", err.message);

  res.status(500).json({
    success: false,
    message: err.message,
  });
});

app.listen(PORT, () => {
  console.log("Server up and running on 3001");
});
