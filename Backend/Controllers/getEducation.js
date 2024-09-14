import { educations } from "../Models/education.js";
const getEducation = async (req, res) => {
  try {
    const data = await educations.find();
    res.json(data);
  } catch (err) {
    console.log(err);
  }
};

export { getEducation };
