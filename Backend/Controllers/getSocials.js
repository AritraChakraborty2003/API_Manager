import { socials } from "../Models/socials.js";

const getSocials = (req, res) => {
  socials
    .find()
    .then((val) => {
      res.json(val);
    })
    .catch((err) => {
      console.log(err);
    });
};

export { getSocials };
