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
    Collection: "socials",
  }
);

const socials = mongoose.model("socials", socialsSchema);
export { socials };
