import React from "react";
import ConsultingServicesHeader from "../components/app/ServicesPages/ConsultingServicesComponents/ConsultingServicesHeader/ConsultingServicesHeader";
import ConsultingServicesSlider from "../components/app/ServicesPages/ConsultingServicesComponents/ConsultingServicesSlider/ConsultingServicesSlider";
import ConnectEnterpriseSection from "../components/partials/ConnectEnterpriseSection/ConnectEnterpriseSection";

const ConsultingServicesPage = () => {
  return (
    <>
      <ConsultingServicesHeader />
      <ConsultingServicesSlider />
      <ConnectEnterpriseSection
        heading="Drive campus-wide connection in a scalable way"
        text="When you need our services, we have the internal resources and expert channel partners that can come in and bring immediate value to your organization."
      />
    </>
  );
};

export default ConsultingServicesPage;
