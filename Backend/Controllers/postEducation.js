import { educations } from "../Models/education.js";
const postEducation = () => {
  return (req, res) => {
    const { dname, instname, board, date, marks } = req.body;
    const file = req.file.filename;
    const educationObj = new educations({
      dimage: file,
      dname: dname,
      instname: instname,
      board: board,
      date: date,
      marks: marks,
    });

    educationObj.save();
    return res.status(200).send({ status: 200 });
  };
};

export { postEducation };
