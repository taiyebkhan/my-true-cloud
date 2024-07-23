import React from "react";
import styles from "./PharmaceuticalBenefitsSection.module.css";
import ImgTextFlexComponent from "../../../partials/ImgTextFlexComponent/ImgTextFlexComponent";
import img from "../../../../assets/img/pharmaceutical-page-images/benefits-of-mtc-img.png";
import BorderDashCards from "../../../partials/BorderDashCards/BorderDashCards";

import img1 from "../../../../assets/img/pharmaceutical-page-images/card-1.png";
import img2 from "../../../../assets/img/enterprises-images/card-4.png";
import img3 from "../../../../assets/img/industry-legal-page-images/dash-card-4.png";
import img4 from "../../../../assets/img/BankingServices-img-4.png";

const cardData = [
  {
    heading: "Compliant File Sharing for Research and Development",
    text: "Traditional methods of sharing files over email, FTP and USB drive all have security flaws, and often run the risk of violating HIPAA compliance and FDA regulations. MTC DMS offers companies a secure method to share specific folders and files of any size. DMS enables users to create shared, permission-based folders, which serve as the focal point of a sustained collaborative effort.",
    img: img1,
    imgCasses: "max-w-[566px]",
  },
  {
    heading: "Collaborate Across Multiple Offices and Remote Teams",
    text: "Whether it’s project managers, lab researchers or the sales team in the field presenting to medical service providers, they need a fast and reliable way to collaborate. MTC DMS cloud solution connects multiple offices and remote teams making them feel like they’re working from one location. Features like automatic file versioning ensures that when a change is made to a file a newer version is automatically created and added to the folder containing the earlier version.",
    img: img2,
    imgCasses: "max-w-[420px]",
  },
  {
    heading: "Secure File Access with Enforced Folder Permissions",
    text: "Remote file access is becoming a necessity for pharmaceutical employees, but access beyond the firewall using a traditional VPN can be cumbersome and slow. MTC DMS solves that problem by offering secure online file access with enforced user authentication and folder permissions. No matter what location or access method (web browser, mapped drive, secure FTP, desktop sync, mobile/tablet app) employees are always authenticated using company specific authentication policies.",
    img: img3,
    imgCasses: "max-w-[352px]",
  },
  {
    heading: "Complete Control and Visibility",
    text: "Employees don’t always have online access to their files, but saving critical company data such as lab results and drug approval processes on personal laptops or mobile devices can lead to serious security issues. DMS addresses the security needs of medical companies by providing complete control over folder access and real-time visibility on all user activity. Administrators can deactivate inactive user accounts and easily assign and revoke permissions on any folder. MTC DMS also provides administrators with a rich set of audit reports to monitor file usage and user activity.",
    img: img4,
    imgCasses: "max-w-[440px]",
  },
];

const PharmaceuticalBenefitsSection = () => {
  return (
    <>
      <section className="bgGray max-md:pb-10 max-lg:pb-20 pb-[157px] max-md:mb-10 mb-20 relative z-10">
        <div className="innerContainer">
          <h2 className="font-black mx-auto text-center max-sm:mb-16 max-md:mb-14 mb-24">
            Benefits of MTC Cloud Based <br />
            Collaboration Platform
          </h2>

          <ImgTextFlexComponent
            img={img}
            textContainerWidthClass="max-w-[755px] w-full mx-auto"
            heading="Cloud File Sharing for <br />Pharmaceutical and Biomedical"
            text="Corporations in the pharmaceutical and biomedical industries are constantly adopting new technologies to meet and exceed the increasing demands of sales and marketing teams, patients, healthcare professionals, researchers and other business partners. Driven by the need to reduce costs and increase productivity, they are moving away from traditional methods of information sharing and are adopting easier and more secure online platforms."
          />
        </div>
      </section>

      <section className="max-md:mb-0 mb-12">
        <div
          className={`innerContainer flex flex-col gap-y-10 ${styles.cardsContainer}`}
        >
          {cardData.map((item, i) => (
            <ImgTextFlexComponent
              img={item.img}
              key={i}
              cardClasses={
                !(i % 2)
                  ? `flex-row-reverse ${styles.oddCard}`
                  : styles.evenCard
              }
              textContainerWidthClass={`max-w-[692px] bg-white pb-3 ${
                i % 2 ? "" : "pl-4"
              }`}
              heading={item.heading}
              text={item.text}
              imgClasses={item.imgCasses}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default PharmaceuticalBenefitsSection;
