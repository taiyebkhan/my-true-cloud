import React from "react";
import styles from "./IndustryLegalPageHeader.module.css";
import EfficientCollaborationHeader from "../../EfficientCollaboration/EfficientCollaborationHeader/EfficientCollaborationHeader";

const IndustryLegalPageHeader = () => {
  return (
    <EfficientCollaborationHeader
      headerClasses={styles.header}
      mainHeading="MY Documents Litigation Tools <br />For <span className='colorSecondary'>e-Discovery</span>"
      heading="When to Use MY Documents <br />Litigation Tools for Live Discovery"
      description="When your needs outpace your resources or multiple parties want a neutral platform, MY Documents will provide you a simple solution to complex litigation. Access your case anywhere, anytime using Internet Explorer along with any Internet connection."
    />
  );
};

export default IndustryLegalPageHeader;
