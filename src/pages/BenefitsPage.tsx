import React from "react";
import Benefits from "../components/app/BenefitsPageComponents/Benefits";
import BenefitsSubCards from "../components/app/BenefitsPageComponents/BenefitsSubCards";
import BenefitsTransition from "../components/app/BenefitsPageComponents/BenefitsTransition";
import BenefitsCardHeading from "../components/app/BenefitsPageComponents/BenefitsCardHeading";
import BenefitsEndCard from "../components/app/BenefitsPageComponents/BenefitsEndCard";

const BenefitsPage = () => {
  return (
    <>
      <Benefits />
      <BenefitsSubCards />
      <BenefitsTransition />
      <BenefitsCardHeading />
      <BenefitsEndCard />
    </>
  );
};

export default BenefitsPage;
