import React from "react";
import Header from "./Header";
import { useLocation } from "react-router-dom";
import SocialsCMS from "./SocialsCMS";
import ExperienceCMS from "./ExperienceCMS";
import SkillsCMS from "./SkillsCMS";
import AboutCMS from "./AboutCMS";
import ProjectsCMS from "./ProjectsCMS";
import EducationCMS from "./EducationCMS";
const GeneralCMS = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <div>
        {(location.state?.data === "socials" && <SocialsCMS />) ||
          (location.state?.data === "experience" && <ExperienceCMS />) ||
          (location.state?.data === "skills" && <SkillsCMS />) ||
          (location.state?.data === "abouts" && <AboutCMS />) ||
          (location.state?.data === "education" && <EducationCMS />) ||
          (location.state?.data === "projects" && <ProjectsCMS />)}
      </div>
    </>
  );
};

export default GeneralCMS;
