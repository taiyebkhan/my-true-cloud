import React from "react";
import Education2 from "./../../../../assets/img/eductaion/Education-2.png";

function EducationBgCard() {
  return (
    <section className="bgDark">
      <div className="innerContainer max-md:py-10 py-20 max-md:flex-col-reverse max-lag:gap-x-5 max-[1216px]:gap-x-10 gap-x-20 flex max-xl:px-5">
        <div className="w-full max-w-[575px]">
          <img
            src={Education2}
            alt=""
            className="w-full max-xs:w-[320px] mx-auto  max-lg:w-[380px] max-[1216px]:w-[450px] max-w-[575px]"
          />
        </div>
        <div className="text-[#FFFFFF] max-md:mb-10 lg:py-10">
          <h2 className="mb-5 max-lg:mb-2 max-[780px]:leading-tight max-xs:mb-2 max-sm:text-xl max-lg:text-[25px]  max-xl:text-[35px] text-[44px]">
            Enhance experiences for students, faculty, and staff, to build for
            the future.
          </h2>
          <p className="">Do it all through one connected platform.</p>
        </div>
      </div>
    </section>
  );
}

export default EducationBgCard;
