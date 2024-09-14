import { abouts } from "../Models/abouts.js";

const getAbouts = (req, res) => {
  abouts
    .find()
    .then((val) => {
      res.json(val);
    })
    .catch((err) => {
      console.log(err);
    });
};

export { getAbouts };
