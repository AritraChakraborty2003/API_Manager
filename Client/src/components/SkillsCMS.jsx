import React from "react";
import { useState } from "react";
import axios from "axios";
import {
  TEST_API_BASE_URL,
  PRODUCTION_API_BASE_URL,
} from "../../Utils/GeneralValues.js";
const SkillsCMS = () => {
  const [state, setState] = useState({
    selectedFile: null,
    filename: null,
  });
  const fileSelectedHandler = (event) => {
    let file = event.target.files[0].name;
    setState({
      selectedFile: event.target.files[0],
      filename: document.getElementById("file").value,
    });
  };
  const fileUploadHandlerSocials = (event) => {
    event.preventDefault();
    let type = document.getElementById("name").value;

    // let file = event.target.files[0].name;
    // let filename = document.getElementById("file").value;

    let formData = new FormData();
    formData.append("name", type);
    formData.append("filename", state.filename);
    formData.append("file", state.selectedFile);

    const config = {
      headers: { "content-type": "multipart/form-data" },
    };

    axios
      .post(`${TEST_API_BASE_URL}` + "skills", formData, config)
      .then((res) => {
        if (res.data.status == 200) {
          alert("Data Uploaded successfully!!!");
        } else {
          alert("Data not uploaded successfully");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="formArea  w-[100vw] h-[90vh] lg:h-[90vh] flex flex-col justify-center items-center">
        <form className="w-[96vw] h-[90vmin] lg:w-[80vmin] lg:h-[55vmin] p-[7vmin] border-[2px] flex justify-center items-center flex-col gap-y-[5vmin]">
          <h1 className="text-[5vmin] lg:text-[4vmin] text-[#157186] font-extrabold">
            Add Skills...
          </h1>
          <input
            type="text"
            id="name"
            placeholder="Enter Skills Name..."
            className="p-3 border-[2px] w-[90vw] lg:w-[75vmin]"
          />

          <input
            type="file"
            name="file"
            id="file"
            placeholder="Upload your file"
            onChange={fileSelectedHandler}
          />
          <button
            type="submit"
            onClick={fileUploadHandlerSocials}
            className="bg-[#157186] text-white p-2"
          >
            Add Socials
          </button>
        </form>
      </div>
    </>
  );
};

export default SkillsCMS;
