import { experiences } from "../Models/experience.js";

const getExperiences = (req, res) => {
  experiences
    .find()
    .then((val) => {
      res.json(val);
    })
    .catch((err) => {
      console.log(err);
    });
};

export { getExperiences };
