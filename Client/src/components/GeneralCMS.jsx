import React from "react";
import Header from "./Header";
import { useLocation } from "react-router-dom";
import SocialsCMS from "./SocialsCMS";
import ExperienceCMS from "./ExperienceCMS";
const GeneralCMS = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <div>
        {(location.state?.data === "socials" && <SocialsCMS />) ||
          (location.state?.data === "experience" && <ExperienceCMS />)}
      </div>
    </>
  );
};

export default GeneralCMS;
