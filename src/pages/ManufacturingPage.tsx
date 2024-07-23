import React from "react";
import ManufacturingHeader from "../components/app/IndustryPages/ManufacturingPageComponents/ManufacturingHeader/ManufacturingHeader";
import ManufacturingWhyMoveToMtc from "../components/app/IndustryPages/ManufacturingPageComponents/ManufacturingWhyMoveToMtc/ManufacturingWhyMoveToMtc";
import ManufacturingAdvantagesSection from "../components/app/IndustryPages/ManufacturingPageComponents/ManufacturingAdvantagesSection/ManufacturingAdvantagesSection";
import ConnectEnterpriseSection from "../components/partials/ConnectEnterpriseSection/ConnectEnterpriseSection";
import ManufacturingBusinessMovingForwardSection from "../components/app/IndustryPages/ManufacturingPageComponents/ManufacturingBusinessMovingForwardSection/ManufacturingBusinessMovingForwardSection";

const ManufacturingPage = () => {
  return (
    <>
      <ManufacturingHeader />
      <ManufacturingWhyMoveToMtc />
      <ManufacturingAdvantagesSection />
      <ConnectEnterpriseSection
        heading="Connect the enterprise on one platform"
        text="Connect IT and operations, without compromising security. Give all
            stakeholders the information they need with a clear, visible process
            to get products to market on schedule. Achieve operational
            excellence, meet customer expectations, protect against threats, and
            empower your workforce."
      />
      <ManufacturingBusinessMovingForwardSection />
    </>
  );
};

export default ManufacturingPage;
