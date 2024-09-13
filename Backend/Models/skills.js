import mongoose from "mongoose";
const skillsSchema = mongoose.Schema(
  {
    image: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      reuire: true,
    },
  },
  {
    Collections: "skills",
  }
);

const skills = mongoose.model("skills", skillsSchema);
export { skills };
