import mongoose from "mongoose";

const eduSchema = mongoose.Schema(
  {
    image: {
      type: String,
      require: true,
    },
    dname: {
      type: String,
      require: true,
    },
    instname: {
      type: String,
      require: true,
    },
    board: {
      type: String,
      require: true,
    },
    date: {
      type: String,
      require: true,
    },
    marks: {
      type: String,
      require: true,
    },
  },
  {
    Collections: "educations",
  }
);

const educations = mongoose.model("educations", eduSchema);
export { educations };
