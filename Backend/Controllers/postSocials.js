import { socials } from "../Models/socials.js";
const postSocials = () => {
  return (req, res) => {
    const { type, link } = req.body;
    const file = req.file.filename;
    const socialsObj = new socials({
      type: type,
      link: link,
      file: file,
    });

    socialsObj.save();
    return res.status(200).send({ status: 200 });
  };
};

export { postSocials };
