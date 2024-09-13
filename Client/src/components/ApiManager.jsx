import React from "react";
import ProfileCMSCard from "./ProfileCMSCard";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
const ApiManager = () => {
  const navigate = useNavigate();
  const iconsHolder = [
    {
      title: "Socials",
      value: "socials",
      link: "/socialsCMSAdd",
      icon: "social.svg",
    },
    {
      title: "About",
      value: "abouts",
      link: "/aboutAdd",
      icon: "about.png",
    },
    {
      title: "Skills",
      value: "skills",
      link: "/skillsAdd",
      icon: "skills.png",
    },
    {
      title: "Edu",
      value: "education",
      link: "/EducationAdd",
      icon: "education.png",
    },
    {
      title: "Projects",
      value: "projects",
      link: "/projectsAdd",
      icon: "projects.png",
    },
    {
      title: "Workex",
      value: "experience",
      link: "/WorkexAdd",
      icon: "workex.png",
    },
  ];
  return (
    <>
      {(localStorage.getItem("isLoggedIn") === "true" && (
        <>
          <Header />
          <div className="pt-5 pb-5">
            <div className="textHolder">
              <p className="font-extrabold text-[7.35vmin] text-center text-[#128496]">
                Welcome to API Manager
              </p>

              <p className="text-center text-[3.5vmin] font-bold text-[#128496]">
                (Dashboard to manage all your APIs...)
              </p>
            </div>
            <div className="mt-8 iconHolder flex w-[100vw] justify-center items-center flex-wrap gap-x-10 gap-y-5">
              <ProfileCMSCard data={iconsHolder} />
            </div>
          </div>
        </>
      )) ||
        (window.location.href = "/")}
    </>
  );
};

<></>;
export default ApiManager;
