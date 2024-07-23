import React from "react";
import WaitPointIcon from "../../../../icon/WaitPointIcon";
import img from "../../../../../assets/img/erp-images/erp-complete-versatile.png";

const data = [
  {
    text: "Fast, Secured Web-Based, integrated “Best Practice” Business Administration Software Available on Any Device, At Anytime and Anywhere.",
  },
  {
    text: "“Low Footprint” Efficient and Fast, with Absolutely Minimal Network Traffic over a Secured Virtual Private Network with Identity Protection",
  },
  {
    text: "Scripts Easily Readable and Modifiable by any Business.",
  },
  {
    text: "Platform Independence with no reliance on any Propriety Technologies with complete integration",
  },
];

const ErpCompleteVersatileSection = () => {
  return (
    <section className="mb-24">
      <div className="innerContainer">
        <div className="max-w-[743px] mx-auto mb-[54px]">
          <h2 className="text-center font-black font-['Inter'] leading-[57.20px] mb-6">
            Complete, versatile and powerful
          </h2>

          <p className="text-center text-lg font-normal font-['Montserrat'] leading-[30.42px] tracking-wide">
            Designed and Developed with very specific goals in mind. These goals
            have consistently underpinned development since its inception.
          </p>
        </div>

        <div className="flex gap-x-12 items-center">
          <div className="py-14 px-9 lightBackground rounded-2xl flex flex-col gap-y-8">
            {data.map((item, i) => (
              <div key={i} className="w-full flex gap-x-5">
                <div className="w-full max-w-[43px] h-[43px] bgPrimaryMedium rounded-[33px] flex items-center justify-center">
                  <WaitPointIcon />
                </div>

                <p className="text-lg font-normal font-['Montserrat'] leading-[30.42px] tracking-wide">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          <img src={img} alt="img" className="max-w-2xl" />
        </div>
      </div>
    </section>
  );
};

export default ErpCompleteVersatileSection;
