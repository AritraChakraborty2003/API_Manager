import { Socials } from "../Models/socials.js";
const updateSocials = () => {
  return (req, res) => {
    const { type, link } = req.body;
    Socials.find({ type: type })
      .then((doc) => {
        doc.link = link;
        doc.save();
      })
      .catch((err) => {
        console.log(err);
      });

    return res.status(200).send({ status: 200 });
  };
};

export { updateSocials };
