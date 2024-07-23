import React, { useState } from "react";
import img1 from "../../../../../assets/img/industry-legal-page-images/dash-card-1.png";
import img2 from "../../../../../assets/img/industry-legal-page-images/dash-card-2.png";
import img3 from "../../../../../assets/img/industry-legal-page-images/dash-card-3.png";
import img4 from "../../../../../assets/img/industry-legal-page-images/dash-card-4.png";
import img5 from "../../../../../assets/img/industry-legal-page-images/dash-card-5.png";
import img6 from "../../../../../assets/img/industry-legal-page-images/dash-card-6.png";
import img7 from "../../../../../assets/img/industry-legal-page-images/card-4.png";
import BorderDashCards from "../../../../partials/BorderDashCards/BorderDashCards";

const cardData = [
  {
    heading: "Review",
    text: "MY Documents is ideal for large or small scale discovery – Electronically Stored Information (ESI), scanned documents, transcripts, and work product.",
    img: img1,
  },
  {
    heading: "Electronic Discovery",
    text: "Whether you require preservation, collection, or forensics, MY Documents can work with you. We will consult and devise strategies to take the overwhelming volume of ESI and shrink it, so you spend fewer hours reviewing online and lessen the associated costs.",
    img: img2,
  },
  {
    heading: "Production",
    text: "Use built-in petrifaction and production tools to complete the course of the review, or leverage our services to do this for you.",
    img: img3,
  },
  {
    heading: "Workflow Tools",
    text: "Automatic allocation of document sets, foldering, and saved searches (personal and shared) allow you to parse out and organize your review in an organic and flexible manner.",
    img: img4,
  },
  {
    heading: "Ease of Use",
    text: "The MY Documents interface is clean and uncomplicated so you can focus on the review itself.",
    img: img5,
  },
  {
    heading: "Project Management",
    text: "Your dedicated project managers come from the legal industry and understand your needs and urgency. If we have done our jobs well, you will be freed to dedicate your talent to the content of your case, rather than the mechanics of the hosting tool. You can depend on MY Documents whether you have a massive project to harvest, review, and produce – as native files and email, or if you are a participant in any multi-party litigation requiring distinct access for each party involved.",
    img: img6,
  },
  {
    heading: "Security and Collaboration",
    text: "Your material is safe and secure. This applies to physical data, it’s transmission to you via the Internet, and the roles, rights, and access assigned to each person accessing your case. My Documents used in conjunction with My Security will provide the security and forensics to ensure your company knows exactly what is happening with your data.",
    img: img7,
    imgClasses: "max-w-[340px] w-full",
  },
];

const IndustryLegalPageHelpSection = () => {
  return (
    <section className="max-sm:mb-10 max-lg:mb-20 mb-28">
      <div className="innerContainer">
        <h2 className="text-center font-extrabold mb-5">How can we help ? </h2>
        <p className="text-center mb-5">
          Improve efficiency in all aspects of your Documents Management
        </p>

        <BorderDashCards cardData={cardData} cardContainerClasses="mb-10 " />

        <div className="text-center max-w-[1130px] mx-auto">
          <p>
            My TrueCloud has developed a proprietary solution using 2-Factor
            Authentication with SSL Virtual Private Network Tunneling to create
            an easy to deploy Token-less (an industry first) above military
            grade security solution. Click here for more information on our new{" "}
            <a
              rel="noreferrer"
              href="https://www.figma.com/exit?url=https%3A%2F%2Fmytruecloud.com%2Finvisiblecloudtoken%2F"
              target="_blank"
              className="colorPrimary font-bold"
            >
              Invisible Cloud Token
            </a>{" "}
            Technology. There are simply no collaboration vendors today, other
            than MTC, who can deliver this level of security. Industries that
            handle highly sensitive cannot accept anything less than MTC’s above
            military-grade security.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IndustryLegalPageHelpSection;
