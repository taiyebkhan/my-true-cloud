import React from "react";

export default function AboutJoinUs() {
  return (
    <section className="bg-[#131313] max-md:py-28 py-[138px]">
      <div className="innerContainer">
        <div className="max-w-[1040px] m-auto">
          <h1 className="text-center max-xs:text-[25px] max-md:text-[30px] text-[44px] leading-tight font-extrabold text-[#FFFFFF] font_family_heading">
            <span className="text-[#199DEB]">Join Us</span> on the Journey
          </h1>
          <p className="text-center max-xs:text-sm text-lg Line-height-[30px] Letter-spacing-[3%] font_family font-normal text-[#FFFFFF] pt-5 max-md:px-0 px-10">
            Whether you're an entrepreneur seekinginvestment, a seasoned
            professional looking for new opportunities, or aninvestor interested
            in partnering with us, we invite you to join us on ourjourney.
            Together, we can unlock the full potential of tomorrow's
            innovations,drive sustainable growth, and shape a brighter future
            for generations to come.
          </p>
          {/* 
          <div className="text-center text-lg Line-height-[30px] Letter-spacing-[3%] font_family font-normal text-[#199DEB] pt-5">
            <a href="https://mytruecloud.com/partner-application-form">
              Click Here for Partner Application Form
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
}
