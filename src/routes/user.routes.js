import { Router } from "express";
import {
  signup,
  getUsers,
  signin,
  getProfile,
} from "../controllers/user.controller.js";
import { authenticate } from "../middlewares/user.middleware.js";

const router = Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/", [authenticate], getUsers);
router.get("/profile", [authenticate], getProfile);

export default router;
