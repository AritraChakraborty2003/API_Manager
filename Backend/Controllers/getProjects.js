import { projects } from "../Models/projects.js";
const getProjects = async (req, res) => {
  try {
    const data = await projects.find();
    res.json(data);
  } catch {
    console.log(new Error("500 Internal Server Error"));
  }
};
export { getProjects };
