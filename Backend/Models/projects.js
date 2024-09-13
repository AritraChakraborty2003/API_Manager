import mongoose from "mongoose";

const projectsSchema = mongoose.Schema(
  {
    pimage: {
      type: String,
      require: true,
    },
    pname: {
      type: String,
      require: true,
    },
    pdetails: {
      type: String,
      require: true,
    },
    pLiveLink: {
      type: String,
      require: true,
    },
    pgitLink: {
      type: String,
      require: true,
    },
  },
  {
    Collections: "projects",
  }
);

const projects = mongoose.model("projects", projectsSchema);
export { projects };
