import React, { useEffect } from "react";
import MyDocumentsHeader from "../components/app/ProductPages/MyDocuments/MyDocumentsHeader/MyDocumentsHeader";
import MyDocumentsManagementSystem from "../components/app/ProductPages/MyDocuments/MyDocumentsManagementSystem/MyDocumentsManagementSystem";
import MyDocumentsDeepAnalyticsSection from "../components/app/ProductPages/MyDocuments/MyDocumentsDeepAnalyticsSection/MyDocumentsDeepAnalyticsSection";
import MyDocumentsFunctionalitySection from "../components/app/ProductPages/MyDocuments/MyDocumentsFunctionalitySection/MyDocumentsFunctionalitySection";
import ProductPricingComponent from "../components/partials/ProductPricingComponent/ProductPricingComponent";
import img from "../assets/img/my-document-management-system-img.png";

const MyDocumentsPage = () => {
  return (
    <>
      <MyDocumentsHeader />
      <MyDocumentsManagementSystem
        img={img}
        heading="Document Management System"
        text="A Document Management System (DMS) needs to provide an infrastructure
          that (1) systematically organizes the vast amount of data (not just
          documents) pouring into a company; (2) provides forensic monitoring of
          the 3-W’s (who, what and when) regarding each document especially for
          compliance-driven organizations; (3) incorporates a powerful workflow
          engine to drive productivity and approval; and (4) allows for seamless
          file sharing from within and outside the company which is as easy as
          “Drag and Drop”."
          
        afterImgText="The days of keeping rooms filled with file cabinets are coming to a
          close with more and more people working remote, companies looking to
          become more efficient and government regulations pushing for the
          digitizing of files in many industries. My Documents is the only DMS
          solution on the market that can address all of these key requirements
          while being protected in an above military-grade secure platform. Our
          DMS solution can be deployed as a stand alone offering or as an
          integrated solution with our CRM, Social Business, Web-Conferencing
          and/or Security modules."
      />
      <MyDocumentsDeepAnalyticsSection />
      <MyDocumentsFunctionalitySection />
      <ProductPricingComponent sectionClasses="mb-28" />
    </>
  );
};

export default MyDocumentsPage;
