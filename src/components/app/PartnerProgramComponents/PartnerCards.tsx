import React from "react";
import PartnerSubCards from "./PartnerSubCards";

function PartnerCards() {
  return (
    <section>
      <div className="innerContainer max-xl:px-5 pb-10">
        <h1 className="text-center max-sm:text-[26px]  max-lg:text-[30px] max-md:mb-8 text-[44px] leading-tight font-black text-[#131313] font_family_heading">
          Why Become a MTC Partner?
        </h1>

        <PartnerSubCards />
      </div>
    </section>
  );
}

export default PartnerCards;
