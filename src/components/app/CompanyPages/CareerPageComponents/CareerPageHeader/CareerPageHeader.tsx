import React from "react";
import ButtonPrimary from "../../../../partials/Buttons/ButtonPrimary";
import bgImg from "../../../../../assets/img/career-page-images/header-bg.png";
import img from "../../../../../assets/img/career-page-images/header-img.png";

const CareerPageHeader = () => {
  return (
    <header className="relative max-md:pt-2 md:max-lg:py-10 max-md:pb-10 pb-32 pt-[75px]">
      <img
        src={bgImg}
        alt="img"
        className="absolute w-screen max-h-[800px] top-[28%] bottom-0 -z-10 left-1/2 -translate-x-1/2"
      />

      <div className="innerContainer">
        <h2 className="max-w-screen-lg mx-auto font-black text-center mb-5">
          Let’s Succeed Together in a Rewarding Environment
        </h2>
        <p className="max-w-[910px] text-center mx-auto mb-8">
          MYTrueCloud is striving to be different from the typical corporate
          entity. There are no politics here, our main focus is on our customers
          and how our solutions solve their problems. We are looking for team
          members that want the challenge of working with cutting-edge
          technology and helping our customer get the most from MTC’s solutions
        </p>

        <ButtonPrimary className="mx-auto mb-10">View open roles</ButtonPrimary>
        <div className=" w-full max-w-[1150px] mx-auto  ">
          <img src={img} alt="img" />
        </div>
      </div>
    </header>
  );
};

export default CareerPageHeader;
