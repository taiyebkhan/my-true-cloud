import React from "react";
import MySecurity from "../components/app/SecurityPage/MySecurity";
import SecurityCardComponet from "../components/app/SecurityPage/SecurityCardComponet";
import SecurityHelpCard from "../components/app/SecurityPage/SecurityHelpCard";
import SecurityEndHeading from "../components/app/SecurityPage/SecurityEndHeading";
import SecurityImgComponet from "../components/app/SecurityPage/SecurityImgComponet";
import ScreenshotsSection from "../components/partials/ScreenshotsSection/ScreenshotsSection";
import ProductPricingComponent from "../components/partials/ProductPricingComponent/ProductPricingComponent";

const SecurityPage = () => {
  return (
    <>
      <MySecurity />
      <SecurityCardComponet />
      <SecurityHelpCard />
      <SecurityEndHeading
        heading="End-to-end protection of your resources"
        paragraph="Rest easy knowing that our robust encryption protocols ensure end-to-end protection for your valuable resources."
      />
      <SecurityImgComponet />
      <ScreenshotsSection />
      <ProductPricingComponent sectionClasses="mb-[120px]" />
    </>
  );
};

export default SecurityPage;
