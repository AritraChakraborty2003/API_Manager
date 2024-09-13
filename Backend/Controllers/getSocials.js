import { Socials } from "../Models/socials.js";

const getSocials = (req, res) => {
  Socials.find()
    .then((val) => {
      res.json(val);
    })
    .catch((err) => {
      console.log(err);
    });
};

export { getSocials };
