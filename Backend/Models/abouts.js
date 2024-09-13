import mongoose from "mongoose";

const aboutSchema = mongoose.Schema(
  {
    image: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    descr: {
      type: String,
      require: true,
    },
    location: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    phone: {
      type: String,
      require: true,
    },
    resumeLink: {
      type: String,
      require: true,
    },
  },
  {
    Collections: "abouts",
  }
);

const abouts = mongoose.model("abouts", aboutSchema);
export { abouts };
