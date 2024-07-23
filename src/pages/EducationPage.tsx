import React from "react";
import EducationHeader from "../components/app/IndustryPages/EducationPage/EducationHeader";
import EducationBgCard from "../components/app/IndustryPages/EducationPage/EducationBgCard";
import EducationCards from "../components/app/IndustryPages/EducationPage/EducationCards";
import EducationEndCard from "../components/app/IndustryPages/EducationPage/EducationEndCard";

function EducationPage() {
  return (
    <>
      <EducationHeader />
      <EducationBgCard />
      <EducationCards />
      <EducationEndCard />
    </>
  );
}

export default EducationPage;
