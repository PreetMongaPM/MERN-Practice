import { Router } from "express";
import { authHandler } from "../middlewares/authHandler.js";
import { createUser } from "../controllers/createUser.controller.js";

const router = Router();

router.post("/login", authHandler, createUser);

export default router;
