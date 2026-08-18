import Fruit from "../models/fruit.models.js";

export async function getFruits(req, res) {
  try {
    const fruits = await Fruit.find();
    res.json({ fruits });
  } catch (e) {
    res.json({ error: "An error occured" });
  }
}

export async function addFruits(req, res) {
  const body = req.body;

  const fruit = new Fruit(body);
  try {
    await fruit.save();
    res.send(fruit);
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
}

export async function getFruit(req, res) {
  const id = req.params.id;
  console.log(id);
  res.status(200);
  res.end();
}
