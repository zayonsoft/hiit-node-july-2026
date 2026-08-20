import { Router } from "express";
import fruitRouter from "./fruit.routes.js";
import studentRouter from "./student.routes.js";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Welcome to my API" });
});

router.use("/fruits", fruitRouter);
router.use("/students", studentRouter);

export default router;
