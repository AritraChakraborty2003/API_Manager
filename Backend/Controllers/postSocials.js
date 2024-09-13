import { socials } from "../Models/socials.js";
const postSocials = () => {
  return (req, res) => {
    const { type, link, icons } = req.body;
    const socialsObj = new socials({
      link: link,
      icons: icons,
    });
    socialsObj.save();
    return res.status(200).send({ status: 200 });
  };
};

export { postSocials };
