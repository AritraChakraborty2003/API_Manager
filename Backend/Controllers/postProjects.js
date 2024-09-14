import { projects } from "../Models/projects.js";

const postProjects = () => {
  return (req, res) => {
    const { pname, pdetails, ptechStack, pLiveLink, pgitLink } = req.body;
    const file = req.file.filename;
    const projectObj = new projects({
      pimage: process.env.BASE_URL + file,
      pname: pname,
      pdetails: pdetails,
      ptechStack: ptechStack,
      pLiveLink: pLiveLink,
      pgitLink: pgitLink,
    });

    projectObj.save();
    return res.status(200).send({ status: 200 });
  };
};

export { postProjects };
