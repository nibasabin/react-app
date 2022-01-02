import React, { useContext } from "react";
import "../css/pageDisplaySection.css";
import { HomePage } from "../pages/HomePage";
import { AboutPage } from "../pages/AboutPage";
import { ExperiencePage } from "../pages/ExperiencePage";
import { ContactPage } from "../pages/ContactPage";
import { EducationPage } from "../pages/EducationPage";
import { SkillsPage } from "../pages/SkillsPage";
export const PageDisplaySection = () => {

  return (
        <div className="pageDisplayContainer">
          <div className="pageDisplay">
            <HomePage />
            <AboutPage />
            <SkillsPage />
            <EducationPage />
            <ExperiencePage />
            <ContactPage />
          </div>
        </div>
  );
};
