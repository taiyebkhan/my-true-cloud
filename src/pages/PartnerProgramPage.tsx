import React from "react";
import Partner from "../components/app/PartnerProgramComponents/Partner";
import PartnerImgPage from "../components/app/PartnerProgramComponents/PartnerImgPage";
import PartnerCards from "../components/app/PartnerProgramComponents/PartnerCards";
import PartnerBecomeToday from "../components/app/PartnerProgramComponents/PartnerBecomeToday";

const PartnerProgramPage = () => {
  return (
    <>
      <Partner />
      <PartnerImgPage />
      <PartnerCards />
      <PartnerBecomeToday />
    </>
  );
};

export default PartnerProgramPage;
