import React from "react";
import Header from "./Header";
import { useLocation } from "react-router-dom";
import SocialsCMS from "./SocialsCMS";
import ExperienceCMS from "./ExperienceCMS";
import SkillsCMS from "./SkillsCMS";
import AboutCMS from "./AboutCMS";
const GeneralCMS = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <div>
        {(location.state?.data === "socials" && <SocialsCMS />) ||
          (location.state?.data === "experience" && <ExperienceCMS />) ||
          (location.state?.data === "skills" && <SkillsCMS />) ||
          (location.state?.data === "abouts" && <AboutCMS />)}
      </div>
    </>
  );
};

export default GeneralCMS;
