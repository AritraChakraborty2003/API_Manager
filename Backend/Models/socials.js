import mongoose from "mongoose";

const socialsSchema = mongoose.schema(
  {
    link: {
      type: String,
      require: true,
    },
    icons: {
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
