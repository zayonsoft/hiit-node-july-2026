import { Router } from "express";
import fruitRouter from "./fruit.routes.js";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Welcome to my API" });
});

router.use("/fruits", fruitRouter);

export default router;
