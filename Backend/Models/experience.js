import mongoose from "mongoose";

const experienceSchema = mongoose.Schema(
  {
    ename: {
      type: String,
      require: true,
    },
    etype: {
      type: String,
      require: true,
    },
    etime: {
      type: String,
      require: true,
    },
    ecategory: {
      type: String,
      require: true,
    },
  },
  {
    Collection: "experiences",
  }
);

const experiences = mongoose.model("experieneces", experienceSchema);
export { experiences };
