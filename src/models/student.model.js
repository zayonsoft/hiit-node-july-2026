import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
    required: true,
  },
  lastName: {
    type: String,
    trim: true,
    required: true,
  },
  phoneNumber: {
    type: String,
    trim: true,
    required: true,
  },
  fruits: [
    {
      type: {
        name: String,
      },
    },
  ],
});

export default mongoose.model("Student", studentSchema);
