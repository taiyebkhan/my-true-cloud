import React from "react";
import IndustryLegalPageHeader from "../components/app/IndustryPages/IndustryLegalPageComponents/IndustryLegalPageHeader/IndustryLegalPageHeader";
import IndustryLegalPageEssentialTenantsSection from "../components/app/IndustryPages/IndustryLegalPageComponents/IndustryLegalPageEssentialTenantsSection/IndustryLegalPageEssentialTenantsSection";
import IndustryLegalPageHelpSection from "../components/app/IndustryPages/IndustryLegalPageComponents/IndustryLegalPageHelpSection/IndustryLegalPageHelpSection";

const IndustryLegalPage = () => {
  return (
    <>
     <IndustryLegalPageHeader />
     <IndustryLegalPageEssentialTenantsSection />
     <IndustryLegalPageHelpSection />
    </>
  );
};

export default IndustryLegalPage;
