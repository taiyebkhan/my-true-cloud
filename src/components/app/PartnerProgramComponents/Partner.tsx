import React from "react";
import "../../../App.css";

import Partner1 from "./../../../assets/img/Partner-img-01.png";
export default function Partner() {
  return (
    <section>
      <div className=" relative top-0">
        <img src={Partner1} alt="" />
        <h1 className="max-sm:text-sm max-lg:text-[26px] resleft max-xl:text-[37px] resHeading text-[40px] leading-tight font-semibold text-[#FFFFFF] font_family_heading absolute max-xl:top-[55px] max-xl:left-[105px] top-[90px] left-[145px] z-10">
          MY TrueCloud <br /> Partner <br /> Program
        </h1>
      </div>
      <h1 className="max-sm:text-sm max-lg:text-[26px] resleft-top max-xl:text-[37px] resHeading  text-[40px] leading-tight font-semibold text-[#FFFFFF] font_family_heading absolute max-lg:top-[220px]  max-xl:top-[268px] max-xl:left-[100px] top-[340px] left-[145px] z-10">
        Grow Your <br /> Business as a <br /> MTC Partner
      </h1>

      <div className="innerContainer max-xl:px-5 max-md:my-5 my-20">
        <p className="text-center max-sm:text-sm text-lg  Line-height-[30px] Letter-spacing-[3%] font_family font-normal text-[#131313] max-w-[1160px] m-auto ">
          MTC is focused on serving the SMB market.  We know that SMB customers
          want great solutions but just as important, a great Partner. A Partner
          who is an expert in the SMB domain, one who is in close proximity and
          offers a broad range of solutions. MTC understands a strong Alliance
          Partner network is the best way to help our customers succeed. We view
          our Alliance Partners as a vital extension of our organization.
        </p>
      </div>
    </section>
  );
}
