import { Router } from "express";
import { authHandler } from "../middlewares/authHandler.js";

const router = Router();

router.post("/login", authHandler, (req, res) => {
  res.send("User logged in!\n");
});

export default router;
