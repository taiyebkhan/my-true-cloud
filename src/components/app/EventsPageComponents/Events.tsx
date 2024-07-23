import React from "react";
import ButtonPrimary from "../../partials/Buttons/ButtonPrimary";
import Events1 from "./../../../assets/img/Events-img-1.png";

export default function Events() {
  return (
    <section className="bg-[#131313]">
      <div className="innerContainer max-xl:px-5  max-md:pt-5 pt-16 pb-[100px] max-md:flex-col-reverse flex ">
        <div className="  max-lg:w-[500px] max-w-[560px] pb-10  m-auto">
          <h1 className="max-sm:text-[26px] max-lg:text-5xl text-6xl Line-height-[72.8px] font-black text-[#FFFFFF] font_family_heading md:pb-4">
            Events
          </h1>
          <p className="max-sm:text-sm max-xs:w-[314px]  max-sm:w-[434px] text-lg Line-height-[30px] Letter-spacing-[3%] font_family font-normal text-[#FFFFFF] pt-5">
            Banking professionals face numerous operational challenges; from
            maintaining federal regulatory compliance to employing advanced
            security procedures for the protection of their customers data.
          </p>
          <div className="w-[181px] h-[62px] rounded-lg pt-5">
            <ButtonPrimary>Book a Demo</ButtonPrimary>
          </div>
        </div>
        <div className="max-sm:w-[312px] max-lg:w-[500px] max-w-[600px] max-md:pb-5 md:pt-8 m-auto">
          <img src={Events1} alt="" />
        </div>
      </div>
    </section>
  );
}
