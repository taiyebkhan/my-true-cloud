import React from "react";
import ButtonPrimary from "../../../../partials/Buttons/ButtonPrimary";
import img from "../../../../../assets/img/erp-images/header-img.png";

const ErpHeader = () => {
  return (
    <header className="pt-20 pb-32 lightBackground relative">
      <div className="innerContainer w-full flex items-center">
        <div className="max-w-screen-sm relative z-10">
          <h1 className="text-[56px] font-black font-['Inter'] mb-6">ERP</h1>

          <p className="mb-3 text-2xl font-bold font-['Montserrat'] leading-10 tracking-wide">
            Make Data-Driven Decisions, Elevate & Accelerate Performance,
            Optimize Processes with MTC ERP
          </p>
          <p className="mb-5 text-lg font-normal font-['Montserrat'] leading-[30.42px] tracking-wide">
            My True ERP has a wide range of feature suitable for many business
            particularly distributed businesses in a wholesale, distribution and
            manufacturing environment. When combined with a 3rd party
            interactive desktop Point of Sale System with a Rewards program it
            can form the hub of a dispersed multi-branch retail management
            system.
          </p>

          <ButtonPrimary>Book a Demo</ButtonPrimary>
        </div>

        <img src={img} alt="img" className="absolute right-0 top-0 h-full" />
      </div>
    </header>
  );
};

export default ErpHeader;
