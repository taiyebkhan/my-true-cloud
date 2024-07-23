import React from "react";
import img from "../../../../../assets/img/manufacturing-page-images/move-to-mtc.png";
import effect from "../../../../../assets/img/manufacturing-page-images/square-blur-effect.png";

const ManufacturingWhyMoveToMtc = () => {
  return (
    <section>
      <div className="innerContainer flex max-md:flex-col gap-x-5 justify-between max-md:mb-12 max-lg:mb-32 mb-44">
        <div className="max-w-[616px]">
          <h2 className="mb-5 max-xs:mb-2 max-sm:text-xl max-lg:text-[30px] max-xl:text-[35px]">
            Why You Should Make the Move to MTC
          </h2>
          <p className="max-sm:text-sm max-lg:text-[15px] max-md:mb-5">
            There are many advantages to implementing an ERP solution. My
            TrueCloud is designed for startups, growing business and medium
            sized companies. Our platform is a features rich environment that
            provides scalability, mobility, security and automates your business
            operations that allows end to end visibility while providing
            management with real-time data across the whole organization.
          </p>
        </div>

        <div className="relative mb-4">
          <img src={effect} alt="img" className="absolute -z-10 scale-125" />
          <img
            src={img}
            alt="img"
            className="max-xs:w-[300px] max-sm:w-[340px] max-md:mx-auto max-md:w-[400px] max-lg:w-[338px] max-w-[524px]"
          />
        </div>
      </div>
    </section>
  );
};

export default ManufacturingWhyMoveToMtc;
