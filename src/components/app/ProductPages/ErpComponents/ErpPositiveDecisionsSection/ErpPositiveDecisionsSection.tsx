import React from "react";
import img from "../../../../../assets/img/erp-images/erp-positive-decisions.png";

const ErpPositiveDecisionsSection = () => {
  return (
    <section className="bgGray pt-11 mb-24">
      <div className="innerContainer flex gap-x-10 justify-between items-center ">
        <div className="max-w-screen-sm">
          <h2 className="text-[44px] font-black font-['Inter'] mb-5">
            Positive Decisions Influencing Factors
          </h2>
          <p className="text-lg font-normal font-['Montserrat'] leading-[30.42px] tracking-wide">
            Lower cost of ownership, minimal up front cost mainly coming out of
            your maintenance budget now, reduced cost and effort of upgrades,
            ease and reduced time to implementation with no global cost of
            deployment, Reduced need of IT resources, Best fit Solution and pay
            as you go.
          </p>
        </div>

        <img src={img} alt="img" className="max-w-[584px]" />
      </div>
    </section>
  );
};

export default ErpPositiveDecisionsSection;
