import React from "react";
import AboutHeader from "../components/app/AboutPage/AboutHeader/AboutHeader";
import AboutKeyElementSection from "../components/app/AboutPage/AboutKeyElementSection/AboutKeyElementSection";
import AboutTeamSection from "../components/app/AboutPage/AboutTeamSection/AboutTeamSection";
import AboutWhyUsSection from "../components/app/AboutPage/AboutWhyUsSection/AboutWhyUsSection";
import AboutJoinUs from "../components/app/AboutPage/AboutJoinUs";

const AboutPage = () => {
  return (
    <>
      <AboutHeader />
      <AboutKeyElementSection />
      <AboutTeamSection />
      <AboutWhyUsSection />
      <AboutJoinUs />
    </>
  );
};

export default AboutPage;
