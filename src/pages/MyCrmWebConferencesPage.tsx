import React from "react";
import MyCrmWebConferencesHeader from "../components/app/ProductPages/MyCrmWebConferences/MyCrmWebConferencesHeader/MyCrmWebConferencesHeader";
import MyCrmWebConferencesAbout from "../components/app/ProductPages/MyCrmWebConferences/MyCrmWebConferencesAbout/MyCrmWebConferencesAbout";
import MyCrmWebConferenceFunctionality from "../components/app/ProductPages/MyCrmWebConferences/MyCrmWebConferenceFunctionality/MyCrmWebConferenceFunctionality";
import ProductPricingComponent from "../components/partials/ProductPricingComponent/ProductPricingComponent";

const MyCrmWebConferencesPage = () => {
  return (
    <>
      <MyCrmWebConferencesHeader />
      <MyCrmWebConferencesAbout />
      <MyCrmWebConferenceFunctionality />
      <ProductPricingComponent sectionClasses="max-md:mb-20 mb-32" />
    </>
  );
};

export default MyCrmWebConferencesPage;
