import React from "react";
import PharmaceuticalHeader from "../components/app/PharmaceuticalPageComponents/PharmaceuticalHeader/PharmaceuticalHeader";
import PharmaceuticalBenefitsSection from "../components/app/PharmaceuticalPageComponents/PharmaceuticalBenefitsSection/PharmaceuticalBenefitsSection";
import img from "../assets/img/pharmaceutical-page-images/bottom-img.png";

const PharmaceuticalPage = () => {
  return (
    <>
      <PharmaceuticalHeader />
      <PharmaceuticalBenefitsSection />

      <img
        src={img}
        alt="img"
        className="max-w-[1217px] w-full mx-auto max-md:translate-y-5 translate-y-16"
      />
    </>
  );
};

export default PharmaceuticalPage;
