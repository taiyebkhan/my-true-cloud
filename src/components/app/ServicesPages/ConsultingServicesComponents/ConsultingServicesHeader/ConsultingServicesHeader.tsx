import React from "react";
import styles from "./ConsultingServicesHeader.module.css";
import EfficientCollaborationHeader from "../../../IndustryPages/EfficientCollaboration/EfficientCollaborationHeader/EfficientCollaborationHeader";

const ConsultingServicesHeader = () => {
  return (
    <EfficientCollaborationHeader
      headerClasses={styles.header}
      mainHeading="CONSULTING SERVICES"
      heading="The Old Adage “Practice Makes Perfect” Applies to <span className='colorPrimary'>MTC’s Deep Domain Expertise</span>"
      description="MTC has been providing secure collaboration solutions for many years. We have addressed many of the business and technical issues unique to data privacy, mobility and integration with 3rd party solutions. We are confident that MTC delivers the most effective and easy to use out-of-the-box solutions. Also, our customers have access to MTC tools that can allow them to customize their own solution. "
    />
    
  );
};

export default ConsultingServicesHeader;
