import React from "react";
import ErpHeader from "../components/app/ProductPages/ErpComponents/ErpHeader/ErpHeader";
import ErpIntegrateSection from "../components/app/ProductPages/ErpComponents/ErpIntegrateSection/ErpIntegrateSection";
import ErpAbout from "../components/app/ProductPages/ErpComponents/ErpAbout/ErpAbout";
import ErpPositiveDecisionsSection from "../components/app/ProductPages/ErpComponents/ErpPositiveDecisionsSection/ErpPositiveDecisionsSection";
import ErpCompleteVersatileSection from "../components/app/ProductPages/ErpComponents/ErpCompleteVersatileSection/ErpCompleteVersatileSection";
import ErpEverythingYouNeedSection from "../components/app/ProductPages/ErpComponents/ErpEverythingYouNeedSection/ErpEverythingYouNeedSection";
import ScreenshotsSection from "../components/partials/ScreenshotsSection/ScreenshotsSection";

const ErpPage = () => {
  return (
    <>
      <ErpHeader />
      <ErpIntegrateSection />
      <ErpAbout />
      <ErpPositiveDecisionsSection />
      <ErpCompleteVersatileSection />
      <ErpEverythingYouNeedSection />
      <ScreenshotsSection />
    </>
  );
};

export default ErpPage;
