import React from "react";
import { useState } from "react";
import axios from "axios";
import {
  TEST_API_BASE_URL,
  PRODUCTION_API_BASE_URL,
} from "../../Utils/GeneralValues.js";
const AboutCMS = () => {
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
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let description = document.getElementById("description").value;
    let designation = document.getElementById("designation").value;
    let location = document.getElementById("location").value;
    let phone = document.getElementById("phone").value;
    let resumeLink = document.getElementById("resumeLink").value;

    // let file = event.target.files[0].name;
    // let filename = document.getElementById("file").value;

    let formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("description", description);
    formData.append("designation", designation);
    formData.append("location", location);
    formData.append("phone", phone);
    formData.append("resumeLink", resumeLink);
    formData.append("filename", state.filename);
    formData.append("file", state.selectedFile);

    const config = {
      headers: { "content-type": "multipart/form-data" },
    };

    axios
      .post(`${PRODUCTION_API_BASE_URL}` + "about", formData, config)
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
            name="name"
            id="name"
            className="p-3 border-[2px] w-[90vw] lg:w-[75vmin]"
            placeholder="Enter your name..."
          />
          <input
            type="email"
            name="email"
            className="p-3 border-[2px] w-[90vw] lg:w-[75vmin]"
            id="email"
            placeholder="Enter your email..."
          />
          <input
            type="text"
            name="designation"
            id="designation"
            className="p-3 border-[2px] w-[90vw] lg:w-[75vmin]"
            placeholder="Enter your deignation..."
          />
          <input
            type="text"
            name="phon"
            id="phone"
            className="p-3 border-[2px] w-[90vw] lg:w-[75vmin]"
            placeholder="Enter your name..."
          />
          <input
            type="text"
            name="description"
            id="description"
            className="p-3 border-[2px] w-[90vw] lg:w-[75vmin]"
            placeholder="Enter your description..."
          />
          <input
            type="text"
            name="location"
            className="p-3 border-[2px] w-[90vw] lg:w-[75vmin]"
            id="location"
            placeholder="Enter your location..."
          />
          <input
            type="text"
            name="resumeLink"
            className="p-3 border-[2px] w-[90vw] lg:w-[75vmin]"
            id="resumeLink"
            placeholder="Enter your resumeLink..."
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

export default AboutCMS;
