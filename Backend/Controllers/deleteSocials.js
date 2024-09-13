import { socials } from "../Models/socials.js";
const deleteSocials = () => {
  return (req, res) => {
    const type = req.query.type;
    socials
      .deleteOne({ type: type })
      .then((val) => {
        return res.status(200).send({ status: 200 });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export { deleteSocials };
