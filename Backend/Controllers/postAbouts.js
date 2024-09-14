import { abouts } from "../Models/abouts.js";
const postAbouts = () => {
  return (req, res) => {
    const {
      name,
      designation,
      description,
      location,
      email,
      phone,
      resumeLink,
    } = req.body;

    const file = req.file.filename;
    const aboutsObj = new abouts({
      image: process.env.BASE_URL + file,
      name: name,
      designation: designation,
      description: description,
      location: location,
      email: email,
      phone: phone,
      resumeLink: resumeLink,
    });

    aboutsObj.save();
    return res.status(200).send({ status: 200 });
  };
};

export { postAbouts };
