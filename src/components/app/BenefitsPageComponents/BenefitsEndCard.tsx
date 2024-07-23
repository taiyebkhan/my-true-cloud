import React from "react";
import Benefits13 from "./../../../assets/img/Benefits-img-13.png";

function BenefitsEndCard() {
  return (
    <section className="bg-[#F1F1F1]">
      <div className="innerContainer flex py-10">
        <div className="w-full max-w-[1066px] bg-[#FFFFFF] my-20">
          <p className=" max-lg:py-[95px] py-[115px] max-xl:text-xl max-xl:w-[650px] text-center font-extrabold Line-height-[36px] Letter-spacing-[3%] font_family_heading text-2xl text-[#131313] max-w-[792px] m-auto">
            Transitioning to SaaS is a smart investment for companies that want
            to grow and stay competitive.  The SaaS model has flourished in
            recent years because of the many benefits it offers to businesses of
            all sizes and types.
          </p>
        </div>
        <div className="   translate-y-[30px] translate-x-[-73px] ">
          <img
            src={Benefits13}
            alt=""
            className="max-lg:w-[240px] max-w-[287px]"
          />
        </div>
      </div>
    </section>
  );
}

export default BenefitsEndCard;
