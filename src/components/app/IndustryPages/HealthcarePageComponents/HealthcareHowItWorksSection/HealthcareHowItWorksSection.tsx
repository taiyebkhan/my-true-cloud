import React from "react";
import img from "../../../../../assets/img/healthcare/how-it-works.png";

const HealthcareHowItWorksSection = () => {
  return (
    <>
      <section className="mb-[122px] max-md:mb-[50px]">
        <div className="innerContainer max-lg:flex-col-reverse flex items-end justify-between relative max-lg:px-8 max-[1400px]:px-8">
          <img
            src={img}
            alt="img"
            className="max-lg:max-w-[300px] max-lg:mx-auto max-w-[442px] max-xl:translate-x-[10%] translate-x-[40%] max-md:w-[199px] max-md:h-[199px]"
          />
          <div className="bgGray absolute -z-10 h-full top-0 max-lg:left-[50%] left-[30%] w-screen" />

          <div className="max-sm:pt-10 max-sm:pb-3 max-md:pb-10 pt-16 pb-[74px] max-w-screen-lg w-full relative">
            <div className="max-w-[669px] max-lg:ml-0 ml-auto">
              <h2 className="mb-5 max-md:text-xl max-md:leading-[26px] max-md:font-black">How it works?</h2>
              <p className="max-md:text-xs max-md:leading-[20.28px] max-md:font-normal ">
                HIPAA places increasing pressure on organizations to store and
                appropriately manage electronic documents and other types of
                content. HIPAA requires a wide range of healthcare documents to
                be kept for specified periods of time and also imposes strict
                data disposal processes. It also establishes restrictions for
                access to patient documents and information. The first step in
                the process of implementing HIPAA compliance is a thorough risk
                assessment. The follow on steps are developing a detailed action
                plan, implementation and administration of the plan, and an
                ongoing audit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HealthcareHowItWorksSection;
