import { Router } from "express";

import { getFruits } from "../controllers/fruit.controller.js";

const router = Router();

router.get("/", getFruits);

export default router;
