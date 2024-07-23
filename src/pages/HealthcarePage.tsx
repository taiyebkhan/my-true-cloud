import React from "react";
import HealthcareHeader from "../components/app/IndustryPages/HealthcarePageComponents/HealthcareHeader/HealthcareHeader";
import HealthcareAboutHipaa from "../components/app/IndustryPages/HealthcarePageComponents/HealthcareAboutHipaa/HealthcareAboutHipaa";
import HealthcareChangingNeedsSection from "../components/app/IndustryPages/HealthcarePageComponents/HealthcareChangingNeedsSection/HealthcareChangingNeedsSection";
import HealthcareHowItWorksSection from "../components/app/IndustryPages/HealthcarePageComponents/HealthcareHowItWorksSection/HealthcareHowItWorksSection";
import MyDocumentsManagementSystem from "../components/app/ProductPages/MyDocuments/MyDocumentsManagementSystem/MyDocumentsManagementSystem";
import img from "../assets/img/healthcare/why-mtc.png";

const HealthcarePage = () => {
  return (
    <>
      <HealthcareHeader />
      <HealthcareAboutHipaa />
      <HealthcareChangingNeedsSection />
      <HealthcareHowItWorksSection />
      <MyDocumentsManagementSystem
        img={img}
        heading="Why MyTrueCloud?"
        text="You will most likely need to perform separate assessments for your business, transactions and security. Each assessment must include policy, procedure and practice evaluations. You must document these measures up to and beyond specific deadlines, and audits will cover policy and procedure.
To be compliant, organizations must satisfy the intent of the law. They must have the mechanism in place that guarantees safe electronic storage, access and transmission of patient records."
        afterImgText="Your Healthcare organization must become HIPAA compliant; our DMS platform can be used to help your organization in its efforts to meet these federally mandated storage, management and security requirements of your patient¡¯s records. It is important to note that there are aspects of HIPAA which are beyond the scope of document management software."
      />
    </>
  );
};

export default HealthcarePage;
