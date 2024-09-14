import { skills } from "../Models/skills.js";

const getSkills = (req, res) => {
  skills
    .find()
    .then((val) => {
      res.json(val);
    })
    .catch((err) => {
      console.log(err);
    });
};
export { getSkills };
