import { projects } from "../Models/projects.js";

const postProjects = () => {
  return (req, res) => {
    const { pname, pdetails, pLiveLink, pgitLink } = req.body;
    const file = req.file.filename;
    const projectObj = new projects({
      pimage: file,
      pname: pname,
      pdetails: pdetails,
      pLiveLink: pLiveLink,
      pgitLink: pgitLink,
    });

    projectObj.save();
    return res.status(200).send({ status: 200 });
  };
};

export { postProjects };
