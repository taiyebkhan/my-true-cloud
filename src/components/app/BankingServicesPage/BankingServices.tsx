import React from "react";
import ButtonPrimary from "../../partials/Buttons/ButtonPrimary";
import banking1 from "./../../../assets/img/BankingServices-img-1.png";
import banking2 from "./../../../assets/img/BankingServices-img-0.png";

function BankingServices() {
  return (
    <>
      <div className="innerContainer  max-xl:px-5 flex max-md:flex-col min-sm:px-10 py-5 md:pt-20 max-2xl:justify-between  py-10 flex ">
        <div className="z-[-1]">
          <img
            src={banking2}
            alt=""
            className="absolute  max-sm:left-[-500px] max-sm:top-[-300px]  max-md:left-[-266px] max-md:top-[-260px] max-lg:top-[-138px]  max-lg:left-[-125px]  top-[-90px] left-0 z-[-1] max-w-[900px]"
          />
        </div>
        <div className="max-md:w-full w-2/4 md:pt-20 md:pb-10">
          <h1 className="max-lg:text-3xl max-xl:text-4xl text-6xl Line-height-[72.8px] font-black text-[#131313] font_family_heading pb-4">
            BANKING / <br /> FINANCIAL SERVICES
          </h1>
          <p className="max-md:text-sm text-lg Line-height-[30px] Letter-spacing-[3%] font_family font-normal text-[#131313]">
            Banking professionals face numerous operational challenges; from
            maintaining federal regulatory compliance to employing advanced
            security procedures for the protection of their customers data.
          </p>
          <div className="w-[181px] h-[62px] rounded-lg pt-5">
            <ButtonPrimary>Book a Demo</ButtonPrimary>
          </div>
        </div>
        <div className="max-md:w-[350px] max-md:m-auto max-lg:w-[400px] max-xl:w-[500px] w-[667.02px] max-md:pt-5 md:pt-24 ml-[-75px] z-[-1]">
          <img src={banking1} alt="" />
        </div>
      </div>
    </>
  );
}

export default BankingServices;
