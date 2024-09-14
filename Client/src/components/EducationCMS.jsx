import React from "react";
import React from "react";
import { useState } from "react";
import axios from "axios";
import {
  TEST_API_BASE_URL,
  PRODUCTION_API_BASE_URL,
} from "../../Utils/GeneralValues.js";
const EducationCMS = () => {
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
    let dname = document.getElementById("dname").value;
    let instname = document.getElementById("instname").value;
    let board = document.getElementById("board").value;
    let date = document.getElementById("date").value;
    let marks = document.getElementById("marks").value;

    // let file = event.target.files[0].name;
    // let filename = document.getElementById("file").value;

    let formData = new FormData();
    formData.append("dname", dname);
    formData.append("instname", instname);
    formData.append("board", board);
    formData.append("date", date);
    formData.append("marks", marks);
    formData.append("filename", state.filename);
    formData.append("file", state.selectedFile);

    const config = {
      headers: { "content-type": "multipart/form-data" },
    };

    axios
      .post(`${TEST_API_BASE_URL}` + "education", formData, config)
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
            Add Education Data...
          </h1>

          <input
            type="text"
            name="dname"
            id="dname"
            className="p-3 border-[2px] w-[90vw] lg:w-[75vmin]"
            placeholder="Enter your degree name..."
          />
          <input
            type="test"
            name="instname"
            className="p-3 border-[2px] w-[90vw] lg:w-[75vmin]"
            id="instname"
            placeholder="Enter your instiute name..."
          />
          <input
            type="text"
            name="board"
            id="board"
            className="p-3 border-[2px] w-[90vw] lg:w-[75vmin]"
            placeholder="Enter your board..."
          />
          <input
            type="text"
            name="date"
            id="date"
            className="p-3 border-[2px] w-[90vw] lg:w-[75vmin]"
            placeholder="Enter the date of degree..."
          />
          <input
            type="text"
            name="marks"
            id="marks"
            placeholder="Enter marks in the degree..."
            className="p-3 border-[2px] w-[90vw] lg:w-[75vmin]"
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

export default EducationCMS;
