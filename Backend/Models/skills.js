import mongoose from "mongoose";
const skillsSchema = mongoose.Schema(
  {
    file: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      reuire: true,
    },
  },
  {
    Collections: "Skills",
  }
);

const skills = mongoose.model("Skills", skillsSchema);
export { skills };
