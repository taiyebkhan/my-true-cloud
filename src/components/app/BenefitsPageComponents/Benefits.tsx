import React from "react";
import Benefits0 from "./../../../assets/img/Benefits-img-0.png";
import Benefitsbg from "./../../../assets/img/Benefitsbg-img.png";

export default function Benefits() {
  return (
    <section className="bg-[#EDF8FF] max-xs:h-[500px] max-md:h-[580px] max-h-[630px] max-sm:mb-22  max-md:mb-28 max-lg:mb-30 mb-40  relative top-0">
      <div className="innerContainer text-center max-md:pt-5 pt-16 relative">
        <h1 className="max-md:text-[30px] text-[44px] leading-tight font-black text-[#131313] font_family_heading ">
          Benefits of SaaS
        </h1>
        <p className="max-xs:text-sm max-md:text-[15px] text-lg Line-height-[30px] Letter-spacing-[3%] font_family font-normal text-[#131313] p-5 pb-0 max-w-[1096px] m-auto">
          Historically, companies were required to buy, build, and maintain
          their IT infrastructures despite exponential costs. SaaS gives
          companies an alternative. Now, they can subscribe to services built on
          shared infrastructure via the internet.   Today’s competitive
          organizations can’t afford lengthy and complex projects. Most SaaS
          applications can be installed and configured quickly.   MTC’s highly
          configurable modules offer a great deal of flexibility and
          customization without the time and expense of software redesign and
          coding. 
        </p>

        <img
          src={Benefits0}
          alt=""
          className="m-auto relative max-xs:top-[23px] max-md:top-[2px] top-[-60px] z-20"
        />
      </div>
      <img src={Benefitsbg} alt="" className="absolute bottom-0 " />
    </section>
  );
}
