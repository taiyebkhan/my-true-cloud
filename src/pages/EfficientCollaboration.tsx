import React from "react";
import EfficientCollaborationHeader from "../components/app/IndustryPages/EfficientCollaboration/EfficientCollaborationHeader/EfficientCollaborationHeader";
import EfficientCollaborationHelpSection from "../components/app/IndustryPages/EfficientCollaboration/EfficientCollaborationHelpSection/EfficientCollaborationHelpSection";
import EfficientCollaborationMtcBenefits from "../components/app/IndustryPages/EfficientCollaboration/EfficientCollaborationMtcBenefits/EfficientCollaborationMtcBenefits";

const EfficientCollaboration = () => {
  return (
    <>
      <EfficientCollaborationHeader
        mainHeading="Efficient Collaboration for
            <br /> Distributed Employees"
        heading="ENTERPRISE"
        description="Enterprises need to collaborate between distributed teams and
            business partners. MTC secure mobile collaboration platform allows
            employees in multiple offices to share and access files as if they
            are in a single location. Remote employees and business partners can
            securely access and store files without using complex VPN services
            or dedicated FTP sites and FTP servers. MTC Cloud solutions
            eliminate the need for file server hardware, software and
            maintenance, helping businesses increase productivity while lowering
            capital and operational expenses."
      />
      {/* <EfficientCollaborationAboutSection /> */}
      <EfficientCollaborationHelpSection />
      <EfficientCollaborationMtcBenefits />
    </>
  );
};

export default EfficientCollaboration;
