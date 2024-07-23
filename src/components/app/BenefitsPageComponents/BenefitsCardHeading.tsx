import React from "react";
import Benefits12 from "./../../../assets/img/Benefits-img-12.png";

const ulData = [
  ". Reduce costs",
  ". Increase efficiencies",
  ". Enable Secure Global Collaboration",
  ". Become more competitive",
  ". Become more Compliant with Federal Regulation",
  ". Secure your data with state of the art Strong 2 Factor Authentication",
];

function BenefitsCardHeading() {
  return (
    <section>
      <div className="innerContainer  py-10">
        <p className="text-center text-lg Line-height-[30px] Letter-spacing-[3%] font_family_heading font-bold text-[#0D71AC] py-5 px-14 max-w-[1096px] mx-auto">
          If you answered <span className="text-[#131313]">yes</span> to any of
          these questions, it is a good time to consider the transition to
          SaaS.  You will quickly find that SaaS has a lot of upsides which will
          help you
        </p>
        <div className="py-5 relative top-0">
          <img src={Benefits12} alt="" />
          <ul className="max-w-[555px] absolute top-[208px] font-normal text-lg Line-height-[40px] Letter-spacing-[3%] font_family text-[#FFFFFF]">
            {ulData.map((item, i) => (
              <li className="py-1 pl-24">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default BenefitsCardHeading;
