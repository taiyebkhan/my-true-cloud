import React from "react";
import MyCrmHeader from "../components/app/ProductPages/MyCrm/MyCrmHeader/MyCrmHeader";
import MyCrmDeepAnalytics from "../components/app/ProductPages/MyCrm/MyCrmDeepAnalytics/MyCrmDeepAnalytics";
import MyCrmFunctionality from "../components/app/ProductPages/MyCrm/MyCrmFunctionality/MyCrmFunctionality";
import ProductPricingComponent from "../components/partials/ProductPricingComponent/ProductPricingComponent";
import ScreenshotsSection from "../components/partials/ScreenshotsSection/ScreenshotsSection";

const MyCrmPage = () => {
  return (
    <>
      <MyCrmHeader />
      <MyCrmDeepAnalytics />
      <MyCrmFunctionality />
      <ProductPricingComponent sectionClasses="max-md:mb-24 mb-40" />
      <ScreenshotsSection />
    </>
  );
};

export default MyCrmPage;
