import React from "react";
import img from "../../../../../assets/img/erp-images/erp-about.png";

const ErpAbout = () => {
  return (
    <section className="mb-9" >
      <div className="innerContainer flex justify-between items-center ">
        <img src={img} alt="img" className="max-w-[620px]" />

        <div className="w-[640px] text-lg font-normal font-['Montserrat'] tracking-wide">
          It will help to standardize processes, contain costs and provide
          increased visibility to decision makers across multiple business
          locations and users with no cost to global deployments. My ERP is the
          Best in Class where functionality, ease of use, speed truly supports
          the business and adds True Value to your organization. In addition to
          that our Total Cost of Ownership, Ability to Tailor Functionality
          without Programming along with True integrated products and great
          support is a differentiating factor.
        </div>
      </div>
    </section>
  );
};

export default ErpAbout;
