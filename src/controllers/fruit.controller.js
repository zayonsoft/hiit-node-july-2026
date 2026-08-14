import Fruit from "../models/fruit.models.js";

export function getFruits(req, res) {
  res.json({ message: "Api for all fruits" });
}
