import React from "react";
import ButtonPrimary from "../../../partials/Buttons/ButtonPrimary";
import img from "../../../../assets/img/pharmaceutical-page-images/header-img.png";
import bgImg from "../../../../assets/img/pharmaceutical-page-images/header-bg.png";

const PharmaceuticalHeader = () => {
  return (
    <header className="max-sm:mb-[50px] max-lg:mb-[80px]  mb-[105px] max-xs:pt-0 max-md:pt-5 pt-14 relative">
      <div className="innerContainer text-center">
        <h1 className=" md:mb-5 max-sm:text-[30px] font-black">
          PHARMACEUTICAL
        </h1>
        <p className="text-center mb-7 max-w-[1010px] mx-auto">
          Corporations in the pharmaceutical and biomedical industries are
          constantly adopting new technologies to meet and exceed the increasing
          demands of sales and marketing teams, patients, healthcare
          professionals, researchers and other business partners.
        </p>

        <ButtonPrimary className="mx-auto">Book a Demo</ButtonPrimary>

        <img src={img} alt="img" className="max-w-[840px] w-full mx-auto" />
      </div>
      <img
        src={bgImg}
        alt="img"
        className="absolute w-screen top-1/2 left-1/2 -translate-x-1/2 -z-10"
      />
    </header>
  );
};

export default PharmaceuticalHeader;
