import { Router } from "express";
import { signup, getUsers } from "../controllers/user.controller.js";
const router = Router();

router.post("/signup", signup);
router.get("/", getUsers);

export default router;
