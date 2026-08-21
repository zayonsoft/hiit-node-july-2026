import User from "../models/user.models.js";
import bcrypt from "bcrypt";

export async function signup(req, res) {
  const body = req.body;
  if (!body) {
    return res.status(400).json({ detail: "Request body is required" });
  }

  const { username, password, email } = body;

  if (!(username && password && email)) {
    return res.status(400).json({
      detail: "All fields are required",
      fields: ["username", "email", "password"],
    });
  }

  //   Checking if email exists
  const emailExistsUser = await User.findOne({ email: email });

  if (emailExistsUser) {
    return res.status(409).json({ detail: "Email already exists" });
  }
  //   Checking if username exists
  const usernameExistsUser = await User.findOne({ username: username });
  if (usernameExistsUser) {
    return res.status(409).json({ detail: "Username already exists" });
  }
  try {
    const passwordHash = await bcrypt.hash(password, 12);

    const user = await User.create({
      username,
      email,
      password: passwordHash,
    });

    const { password: removedPassword, ...modifiedUser } = user.toObject();

    res.send({ detail: "Account Created successfully", user: modifiedUser });
  } catch (e) {
    console.log(e);
    res.status(500).send({ detail: "Something went wrong!!" });
  }
}

export async function getUsers(req, res) {
  try {
    const users = await User.find();
    return res.json({ users });
  } catch (e) {
    return res.status(500).json({ detail: "Something went wrong!" });
  }
}

export async function signin(req, res) {
  const body = req.body;
  const { password, usernameOrEmail } = body;
}
