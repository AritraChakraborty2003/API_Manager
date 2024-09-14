import { skills } from "../Models/skills.js";

const postSkills = () => {
  return (req, res) => {
    const { name } = req.body;
    const file = req.file.filename;
    const skillsObj = new skills({
      file: process.env.BASE_URL + file,
      name: name,
    });

    skillsObj.save();
    return res.status(200).json({ status: 200 });
  };
};

export { postSkills };
