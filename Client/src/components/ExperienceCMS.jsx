import React from "react";
import axios from "axios";
import {
  TEST_API_BASE_URL,
  PRODUCTION_API_BASE_URL,
} from "../../Utils/GeneralValues";
const ExperienceCMS = () => {
  const UploadHandler = (e) => {
    e.preventDefault();
    // let type = document.getElementById("type").value;
    // let link = document.getElementById("link").value;
    // // let file = event.target.files[0].name;
    // // let filename = document.getElementById("file").value;

    // let formData = new FormData();
    // formData.append("type", type);
    // formData.append("link", link);
    // formData.append("filename", state.filename);
    // formData.append("file", state.selectedFile);

    const ename = document.getElementById("ename").value;
    const etype = document.getElementById("etype").value;
    const etime = document.getElementById("etime").value;
    const ecategory = document.getElementById("ecategory").value;

    // const config = {
    //   headers: { "content-type": "multipart/form-data" },
    // };

    axios
      .post(`${PRODUCTION_API_BASE_URL}` + "experience", {
        etype: etype,
        etime: etime,
        ename: ename,
        ecategory: ecategory,
      })
      .then((res) => {
        if (res.data.status == 200) {
          console.log(res);
          alert("Data Uploaded successfully!!!");
        } else {
          console.log(res);
          alert("Data not uploaded successfully");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="formArea  w-[100vw] p-5 flex flex-col justify-center items-center">
        <form className="w-[96vw] lg:w-[80vmin]  p-[7vmin] border-[2px] flex justify-center items-center flex-col gap-y-[5vmin]">
          <h1 className="text-[5vmin] lg:text-[4vmin] text-[#157186] font-extrabold">
            Add Socials...
          </h1>
          <input
            type="text"
            name="ename"
            id="ename"
            className="p-3 border-[2px] w-[90vw] lg:w-[75vmin]"
            placeholder="Enter employment name..."
          />
          <input
            type="text"
            name="etype"
            id="etype"
            className="p-3 border-[2px] w-[90vw] lg:w-[75vmin]"
            placeholder="Enter employment type..."
          />
          <input
            type="text"
            name="etime"
            id="etime"
            className="p-3 border-[2px] w-[90vw] lg:w-[75vmin]"
            placeholder="Enter employment time..."
          />
          <input
            type="text"
            name="ecategory"
            className="p-3 border-[2px] w-[90vw] lg:w-[75vmin]"
            id="ecategory"
            placeholder="Enter employment category..."
          />
          <button
            type="submit"
            onClick={UploadHandler}
            className="bg-[#157186] text-white p-2"
          >
            Add Socials
          </button>
        </form>
      </div>
    </>
  );
};

export default ExperienceCMS;
