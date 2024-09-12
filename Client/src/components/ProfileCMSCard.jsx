import React from "react";
import { useNavigate } from "react-router-dom";

const ProfileCMSCard = (props) => {
  const navigate = useNavigate();
  const goToPage = (...args) => {
    console.log("button Clicked");
    const title = args[0].title;
    const link = args[0].link;
    navigate(link, { state: { data: title } });
  };
  return (
    <>
      {props.data.map((val) => (
        <div className="p-5 cardHolder border-[#c5c5c5] border-[1px] w-[40vmin] h-[50vmin] md:w-[40vmin] md:h-[40vmin] flex  flex-col justify-center items-center ">
          <div className="iconHolder h-[24vmin] w-[24vmin]">
            {(val.title === "Socials" && (
              <img src={require(`../assets/social.svg`)} alt="icon"></img>
            )) ||
              (val.title === "About" && (
                <img src={require(`../assets/about.png`)} alt="icon"></img>
              )) ||
              (val.title === "Skills" && (
                <img src={require(`../assets/skills.png`)} alt="icon"></img>
              )) ||
              (val.title === "Edu" && (
                <img src={require(`../assets/education.png`)} alt="icon"></img>
              )) ||
              (val.title === "Projects" && (
                <img src={require(`../assets/projects.png`)} alt="icon"></img>
              )) ||
              (val.title === "Workex" && (
                <img src={require(`../assets/workex.png`)} alt="icon"></img>
              ))}
          </div>

          <button
            className="btn bg-[#206ebb] p-2 text-white mt-6 text-[3.35vmin] lg:text-[2.45vmin]"
            onClick={() => {
              goToPage(val);
            }}
          >
            Add {val.title}
          </button>
        </div>
      ))}
    </>
  );
};

export default ProfileCMSCard;
