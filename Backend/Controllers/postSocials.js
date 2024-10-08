import { Socials } from "../Models/socials.js";

const postSocials = () => {
  return (req, res) => {
    const { type, link } = req.body;
    const file = req.file.filename;
    const socialsObj = new Socials({
      type: type,
      link: link,
      file: process.env.BASE_URL + file,
    });

    socialsObj.save();
    return res.status(200).send({ status: 200 });
  };
};

export { postSocials };
