import React from "react";
import img10 from "./../../../assets/img/Security-img-10.png";
import ButtonPrimary from "../../partials/Buttons/ButtonPrimary";

export default function SecurityPricing() {
  return (
    <>
      <div className="bg-[#EDF8FF]">
        <div className="innerContainer relative top-0">
          <div className="w-[60%]">
            <div className="pt-20">
              <h1 className=" text-4xl leading-10 font-extrabold text-[#141414] font_family_heading pb-4">
                Pricing
              </h1>
              <p className="text-lg leading-7 tracking-widest font_family font-normal text-[#262626] pb-5">
                Customer Relationship Management (CRM) is all about how you want
                to touch your Prospects and Customers. MTC understands a key
                element in achieving efficiency and produc
              </p>
              <h4 className="text-2xl leading-10 tracking-widest font_family font-medium text-[#141414]">
                For only 20$/Month
              </h4>
            </div>
            <div className="w-[181px] h-[62px] rounded-lg pt-5">
              <ButtonPrimary>Book a Demo</ButtonPrimary>
            </div>
          </div>
          <div className="max-w-[500px] absolute top-[50px] right-[100px]">
            <div>
              <img src={img10} alt="" className="max-w-[350px]"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
