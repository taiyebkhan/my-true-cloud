import React from "react";
import img from "../../../../../assets/img/healthcare/about-hipaa.png";

const HealthcareAboutHipaa = () => {
  return (
    <>
    <section className="max-md:mb-16 max-lg:mb-[85px] mb-[132px] max-lg:pt-14 relative">
        <div className="absolute w-full h-full bgGray top-0" />

       <div className="innerContainer relative flex max-lg:flex-col max-lg:items-center items-end justify-between max-lg:px-8 max-[1400px]:px-8">
        <div className="max-w-[696px] max-lg:py-0 max-xl:py-14 py-20">
          <h2 className="mb-5.5 max-md:text-xl max-md:leading-[29px] max-md:font-black">
            What is <span className="colorPrimary">HIPAA</span> ?
          </h2>
          <p>
            HIPAA stands for the Health Insurance Portability and Accountability
            Act. HIPAA is a federal guideline that aims to ensure that patient
            information and records are protected and maintain their integrity.
            HIPAA consists of three parts; a transactions element that is
            designed to get users to submit claims in a specific electronic
            manner rather than on paper. A privacy element that is designed to
            protect patients’ medical details. And lastly, a security element to
            make sure unauthorized persons cannot access the data.
          </p>
        </div>

        <img
          src={img}
          alt="img"
          className="max-sm:max-w-[326px] max-sm:w-full max-lg:max-w-[60%] max-xl:max-w-[50%] max-w-screen-sm max-lg:translate-y-7 max-xl:translate-y-8 translate-y-14 max-lg:mx-auto max-md:mx-auto max-md:mt-6"
        />
      </div>
    </section>
    </>
  );
};

export default HealthcareAboutHipaa;
