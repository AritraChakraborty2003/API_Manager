import React from "react";
import Header from "./Header";
import { useLocation } from "react-router-dom";
import SocialsCMS from "./SocialsCMS";
import ExperienceCMS from "./ExperienceCMS";
import SkillsCMS from "./SkillsCMS";
const GeneralCMS = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <div>
        {(location.state?.data === "socials" && <SocialsCMS />) ||
          (location.state?.data === "experience" && <ExperienceCMS />) ||
          (location.state?.data === "skills" && <SkillsCMS />)}
      </div>
    </>
  );
};

export default GeneralCMS;
