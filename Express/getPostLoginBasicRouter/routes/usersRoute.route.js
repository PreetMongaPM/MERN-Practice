import { Router } from "express";
import { createUser } from "../controllers/createUser.controller.js";
import { getUser } from "../controllers/getUser.controller.js";

const router = new Router();

router.get('/',getUser);

router.post('/', createUser);

export default router;