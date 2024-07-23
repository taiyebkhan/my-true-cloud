import React from "react";
import img from "../../../../../assets/img/manufacturing-page-images/person-img.png";

const ManufacturingBusinessMovingForwardSection = () => {
  return (
    <section className="lightBackground max-lg:pt-20 pt-28">
      <div className="innerContainer flex items-end justify-center">
        <img
          src={img}
          alt="img"
          className=" max-lg:w-[250px] max-w-[309px] max-lg:translate-x-[20px] max-xl:translate-x-0 translate-x-16 relative z-10"
        />
        <div className="-translate-x-16 max-w-screen-lg bg-white rounded-tr-2xl rounded-tl-2xl w-full  max-lg:py-14 py-20 text-center">
          <div className="max-lg:w-[550px] max-w-[722px] mx-auto">
            <h2 className="max-lg:w-[440px] mx-auto max-lg:text-[31px] mb-5 fontInter font-extrabold leading-none">
              Your business needs to keep moving forward
            </h2>
            <p className="max-lg:w-[500px] mx-auto">
              MTC helps to drive this transformation and enable innovation and
              reduces total cost of ownership.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingBusinessMovingForwardSection;
