import React from "react";
import React from "react";
import { useState } from "react";
import axios from "axios";
import {
  TEST_API_BASE_URL,
  PRODUCTION_API_BASE_URL,
} from "../../Utils/GeneralValues.js";

const ProjectsCMS = () => {
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
  const fileUploadHandlerAbout = (event) => {
    event.preventDefault();
    let pname = document.getElementById("pname").value;
    let pdetails = document.getElementById("pdetails").value;
    let pLiveLink = document.getElementById("pLiveLink").value;
    let pgitLink = document.getElementById("pgitLink").value;

    // let file = event.target.files[0].name;
    // let filename = document.getElementById("file").value;

    let formData = new FormData();
    formData.append("name", pname);
    formData.append("pdetails", pdetails);
    formData.append("pLiveLink", pLiveLink);
    formData.append("pgitLink", pgitLink);
    formData.append("filename", state.filename);
    formData.append("file", state.selectedFile);

    const config = {
      headers: { "content-type": "multipart/form-data" },
    };

    axios
      .post(`${TEST_API_BASE_URL}` + "projects", formData, config)
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
      <div className="formArea  w-[100vw] p-5 flex flex-col justify-center items-center">
        <form className="w-[96vw] lg:w-[80vmin]  p-[7vmin] border-[2px] flex justify-center items-center flex-col gap-y-[5vmin]">
          <h1 className="text-[5vmin] lg:text-[4vmin] text-[#157186] font-extrabold">
            Add About Data...
          </h1>

          <input
            type="text"
            name="pname"
            id="pname"
            className="p-3 border-[2px] w-[90vw] lg:w-[75vmin]"
            placeholder="Enter your project name..."
          />
          <input
            type="text"
            name="pdetails"
            className="p-3 border-[2px] w-[90vw] lg:w-[75vmin]"
            id="pdetails"
            placeholder="Enter your project details..."
          />
          <input
            type="text"
            name="pLiveLink"
            id="pLiveLink"
            className="p-3 border-[2px] w-[90vw] lg:w-[75vmin]"
            placeholder="Enter your project Live Link..."
          />
          <input
            type="text"
            name="pgitLink"
            id="pgitLink"
            className="p-3 border-[2px] w-[90vw] lg:w-[75vmin]"
            placeholder="Enter your project Github Link..."
          />

          <input
            type="file"
            name="file"
            id="file"
            onChange={fileSelectedHandler}
            className="p-3 border-[2px] w-[90vw] lg:w-[75vmin]"
          />
          <button
            type="submit"
            onClick={fileUploadHandlerAbout}
            className="bg-[#157186] text-white p-2"
          >
            Add Socials
          </button>
        </form>
      </div>
    </>
  );
};

export default ProjectsCMS;
