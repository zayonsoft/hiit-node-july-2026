import Student from "../models/student.model.js";

export async function getStudents(req, res) {
  const search = req.query.search;

  let query = {};

  if (search) {
    query = {
      $or: [
        { firstName: { $regex: search, $options: "i" } },
        { lastName: { $regex: search, $options: "i" } },
        { phoneNumber: { $regex: search, $options: "i" } },
      ],
    };
  }

  try {
    const students = await Student.find(query);
    return res.json({ students });
  } catch {
    return res.status(500).json({ error: "An error occured" });
  }
}

export async function addStudents(req, res) {
  try {
    const student = await Student.create(req.body);
    return res.json({ student });
  } catch (e) {
    return res
      .status(400)
      .json({ detail: "Something went wrong", error: e.message });
  }
}

export async function getStudent(req, res) {
  try {
    const id = req.params.id;
    const student = await Student.findById(id);
    if (!student) {
      return res.status(404).json({ detail: "Student not found" });
    }

    res.json({ student });
  } catch (e) {
    return res.status(500).json({ detail: "Something went wrong" });
  }
}

export async function deleteStudent(req, res) {
  const id = req.params.id;
  try {
    const student = await Student.findByIdAndDelete(id);
    if (!student) {
      return res.status(404).json({ detail: "Student not found" });
    }
    return res.json({ detail: "Student deleted" });
  } catch {
    return res.status(500).json({ detail: "An error occured" });
  }
}

export async function updateStudent(req, res) {
  const id = req.params.id;
  try {
    const student = await Student.findOneAndUpdate({ _id: id }, req.body, {
      returnDocument: "after",
    });
    if (!student) {
      return res.status(404).json({ detail: "Not Found" });
    }
    return res.json({ student });
  } catch {
    return res
      .status(500)
      .json({ detail: "Something went horribly wrong!!!!!!" });
  }
}
