import { experiences } from "../Models/experience.js";
const postExperiences = () => {
  return (req, res) => {
    const { ename, etype, etime, ecategory } = req.body;
    const experiencesObj = new experiences({
      ename: ename,
      etype: etype,
      etime: etime,
      ecategory: ecategory,
    });
    experiencesObj
      .save()
      .then((res) => {
        res.status(200).send({ status: 500 });
      })
      .catch((err) => {
        res.status(200).send({ status: 200 });
      });
  };
};

export { postExperiences };
