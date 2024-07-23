import React from "react";
import img from "../../../../../assets/img/healthcare/header.png";
import ButtonPrimary from "../../../../partials/Buttons/ButtonPrimary";

const HealthcareHeader = () => {
  return (
    <header className="mb-2 pt-12 max-lg:mb-[70px]" >
      <div className="innerContainer">
        <h1 className="max-w-7xl max-xs:text-xl text-center mx-auto mb-[22px]">
          <span className="colorPrimary">MTC</span> DMS Hosted Document
          Management System for the Healthcare Industry
        </h1>

        <p className="max-w-[1010px] mx-auto text-center mb-7 max-md:leading-[20.28px]">
          Healthcare Document Management must embrace federal requirements of
          HIPAA Compliance. This information will explain how medical
          practitioners and healthcare entities such as doctor’s offices,
          clinics, hospitals, HMOs and pharmacies can utilize document
          management software such as MTC DMS to achieve compliance with HIPAA.
        </p>

        <ButtonPrimary className="mx-auto">Book a Demo</ButtonPrimary>

        <img
          src={img}
          alt="img"
          className="w-full -z-10 relative max-lg:translate-y-0 -translate-y-32 max-lg:mt-6 max-lg:pt-0 max-[1211px]:pt-44"
        />
      </div>
    </header>
  );
};

export default HealthcareHeader;
