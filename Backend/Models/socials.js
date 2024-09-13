import mongoose from "mongoose";

const socialsSchema = mongoose.Schema(
  {
    type: {
      type: String,
      require: true,
    },
    link: {
      type: String,
      require: true,
    },
    file: {
      type: String,
      require: true,
    },
  },
  {
    Collection: "Socials",
  }
);

const Socials = mongoose.model("Socials", socialsSchema);
export { Socials };
