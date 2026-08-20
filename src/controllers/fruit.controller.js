import Fruit from "../models/fruit.models.js";

export async function getFruits(req, res) {
  try {
    const fruits = await Fruit.find();
    const search = req.query.search;

    let filteredData = fruits;
    if (search) {
      filteredData = fruits.filter((fruit) => {
        if (
          fruit.name.toLowerCase().includes(search.toLowerCase()) ||
          fruit.description.toLowerCase().includes(search.toLowerCase())
        ) {
          return fruit;
        }
      });
    }
    res.json({ fruits: filteredData });
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

  try {
    const fruit = await Fruit.findById(id);
    if (!fruit) {
      res.status(404).send({ detail: "Fruit Not Found" });
      return;
    }
    res.send(fruit);
  } catch (e) {
    res.status(500).send({ error: "An error occured" });
  }
}

export async function editFruit(req, res) {
  const id = req.params.id;
  try {
    const fruit = await Fruit.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    if (!fruit) {
      res.status(404).send({ detail: "Fruit Not found" });
    }
    res.send(fruit);
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
}

export async function replaceFruit(req, res) {
  const id = req.params.id;

  try {
    const fruit = await Fruit.findOneAndReplace({ _id: id }, req.body, {
      returnDocument: "after",
      runValidators: true,
    });
    if (!fruit) {
      res.status(404).send({ detail: "Fruit Not found" });
      return;
    }

    res.send(fruit);
  } catch (e) {
    res.status(500).send({ detail: e.message });
  }
}

export async function deleteFruit(req, res) {
  const id = req.params.id;

  try {
    const fruit = await Fruit.findByIdAndDelete(id);
    if (!fruit) {
      res.status(404).send({ detail: "Fruit not found" });
      return;
    }
    res.status(204).end();
  } catch {
    res.status(500).send({ detail: "An error occured" });
  }
}
