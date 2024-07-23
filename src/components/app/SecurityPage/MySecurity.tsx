import React from "react";
import img0 from "./../../../assets/img/Security-img-0.png";
import img from "../../../assets/img/Security-img-1.png";
import ButtonPrimary from "../../partials/Buttons/ButtonPrimary";

export default function MySecurity() {
  return (
    <>
      <header>
        <div className="innerContainer max-xl:px-5 flex gap-x-5 max-md:flex-col min-sm:px-10 py-5 md:pt-20 max-xl:justify-between relative top-0">
          <div className="left-side xl:w-[50%] max-md:pt-0 max-lg:pt-4 pt-12">
            <h1 className="max-sm:text-[30px] max-lg:text-[40px] text-[56px] Line-height-[72px] Letter-spacing-[3%] font_family_heading font-black text-[#131313]">
              MY SECURITY
            </h1>
            <h3 className="max-xs:text-xs max-md:text-base max-lg:text-lg text-[24px] max-sm:mb-1 max-md:mb-2 mb-3 Line-height-[40px] Letter-spacing-[3%] font_family font-bold text-[#131313]">
              Achieve Compliance and Peace of Mind with Strong 2 Factor
              Authentication
            </h3>
            <p className="Line-height-[30px] Letter-spacing-[3%] font_family font-normal text-[#131313] mb-4">
              Data privacy is noted by CIO’s as the single biggest reason for
              not adopting cloud and mobile solutions. My Security used in
              conjunction with My Documents will provide the security and
              forensics to ensure your company knows exactly what is happening
              with your data. My Security can be purchased as a stand alone
              system (same new technology being introduced into Credit Card
              security today) or with any of MTC’s collaborative solutions.
            </p>

            <ButtonPrimary>Book a Demo</ButtonPrimary>
          </div>
          <div className="right-side ">
            <img
              src={img0}
              alt=""
              className="absolute w-[1522px] max-sm:top-[-1px] max-sm:left-[0px] mx-sm:w-[767px] top-[-80px] left-[140px] z-[-1]"
            />
            <div className="w-[400px] m-auto max-lg:w-[370px] max-xl:w-[450px] w-[559.47px] ">
              <img
                src={img}
                alt=""
                className="z-10 relative max-sm:w-[334px] "
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
