import { Router } from "express";

import {
  getFruits,
  addFruits,
  getFruit,
  editFruit,
  deleteFruit,
  replaceFruit,
} from "../controllers/fruit.controller.js";

const router = Router();

router.post("/", addFruits);
router.get("/", getFruits);
router.get("/:id/", getFruit);
router.patch("/:id/", editFruit);
router.put("/:id/", replaceFruit);
router.delete("/:id/", deleteFruit);

export default router;
