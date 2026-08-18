import { Router } from "express";

import {
  getFruits,
  addFruits,
  getFruit,
} from "../controllers/fruit.controller.js";

const router = Router();

router.get("/", getFruits);
router.get("/:id/", getFruit);
router.post("/", addFruits);

export default router;
