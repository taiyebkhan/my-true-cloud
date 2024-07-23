import React from "react";
import image_container from "./../../../assets/img/Security-img-2.png";
import mobileImg from "../../../assets/img/security-page-images/security-about-small-img.png";

export default function SecurityCardComponet() {
  return (
    <>
      <div className="innerContainer max-xl:px-5 py-0 max-md:flex-col-reverse  min-sm:px-10 flex max-xl:justify-between flex min-lg:py-14">
        <div className="image_container">
          <div className="">
            <img
              src={image_container}
              alt=""
              className="max-sm:w-[230px] max-lg:w-[350px] max-w-[450px] m-auto max-md:hidden"
            />

            <img
              src={mobileImg}
              alt=""
              className="max-xs:max-w-[280px] max-sm:max-w-[300px] max-lg:max-w-[350px] max-w-[450px] m-auto max-md:block hidden"
            />
          </div>
        </div>
        <div className="px- max-lg:ml-1 max-lg:px-0 max-lg:py-3 ml-16  py-10 px-14">
          <h4 className="max-lg:text-lg text-[24px] Line-height-[38px] Letter-spacing-[3%] font_family font-bold text-[#131313]">
            MTC’s security solutions are ideal for any organization that must
            meet high Federal regulatory standards (such as HIPAA, SOX and GLBA)
            regarding data privacy and documentation.
          </h4>
          <p className="max-lg:text-sm text-lg Line-height-[30px] Letter-spacing-[3%] font_family font-normal text-[#131313] pt-3">
            My TrueCloud has developed a proprietary solution using 2-Factor
            Authentication with SSL Virtual Private Network Tunneling to create
            an easy to deploy Token-less (an industry first) above militaryz
            grade security solution. Click here for more information on our new
            Invisible Cloud Token Technology. There are simply no collaboration
            vendors today, other than MTC, who can deliver this level of
            security. Industries that handle patient information, customer
            financial information, confidential HR information and highly
            sensitive intellectual property cannot accept anything less than
            above military-grade security.
          </p>
        </div>
      </div>
    </>
  );
}
