import React from "react";
import styles from "./MyDocumentsHeader.module.css";
import img from "../../../../../assets/img/my-documents-header.png";
import img1 from "./../../../../../assets/img/Benefits-img-0.png";
import ButtonPrimary from "../../../../partials/Buttons/ButtonPrimary";

const MyDocumentsHeader = () => {
  return (
    <section className="relative  max-sm:pt-5 max-md:pt-10 pt-16 max-xs:mb-5 max-sm:mb-0 max-md:mb-16 max-lg:mb-24 mb-32">
      <div className={styles.backgroundEffect}></div>
      <div className=" max-lg:pl-0 max-[1128px]:pl-[40px] pl-[120px] flex max-md:flex-col justify-between items-center">
        <div className="max-lg:px-5 max-w-2xl">
          <h1 className=" max-sm:leading-relaxed max-sm:text-[30px] max-lg:text-[40px] text-[56px] font-black font-['Inter'] md:mb-3">
            MY DOCUMENTS
          </h1>
          <p className=" max-sm:text-base max-lg:text-xl text-2xl font-bold font-['Montserrat'] tracking-wide mb-2.5">
            Secure Document Management with Workflow and Forensics
          </p>
          <p className="max-sm:text-sm  max-sm:text-[14px] text-lg font-normal font-['Montserrat'] max-sm:leading-relaxed tracking-wide mb-5">
            MTC’s ultra secure cloud-based solutions address the issue of data
            security to remove a significant barrier in the adoption of an
            aggressive cloud strategy. MTC’s solutions are ideal for any
            organization that must meet high regulatory standards (such as
            HIPAA, SOX and GLBA) regarding data privacy and documentation
          </p>

          <ButtonPrimary className="min-w-[180px]">Book a Demo</ButtonPrimary>
        </div>

        <img
          src={img}
          alt="img"
          className=" max-md:hidden md:block max-lg:w-[350px] max-[1280px]:w-[480px] max-w-3xl"
        />
        <img
          src={img1}
          alt="img"
          className="max-md:block md:hidden w-full max-w-2xl mx-auto"
        />
      </div>
    </section>
  );
};

export default MyDocumentsHeader;
