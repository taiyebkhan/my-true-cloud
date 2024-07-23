import React from "react";
import security_icon1 from "./../../../assets/img/security-page-images/protect-resources-img-1.png";
import security_icon2 from "./../../../assets/img/security-page-images/protect-resources-img-2.png";
import security_icon3 from "./../../../assets/img/security-page-images/protect-resources-img-3.png";

const data = [
  {
    img: security_icon1,
    text: "Improve your cloud security posture",
  },
  {
    img: security_icon2,
    text: "Defend against evolving threats",
  },
  {
    img: security_icon3,
    text: "Control access to critical cloud apps and resources",
  },
];

export default function SecurityHelpCard() {
  return (
    <>
      <div className="innerContainer bg-[#131313] max-xl:mx-5 rounded-xl max-md:py-12 max-lg:py-16 max-xl:pb-20 pt-[75px] pb-[105px] max-md:mt-12 max-md:mb-[74px] max-lg:my-20 my-28">
        <h2 className="text-center max-sm:text-xl max-lg:text-2xl max-sm:w-[200px] max-w-[645px] m-auto text-[44px] Line-height-[38px] Letter-spacing-[3%] font_family_heading font-black text-[#FFFFFF]">
          Help protect your resources
        </h2>
        <p className="text-center max-md:mb-10 mb-[62px] Line-height-[30px] max-w-[700px] m-auto Letter-spacing-[3%] font_family font-normal text-[#FFFFFF] max-sm:pb-5 pt-4">
          Stay ahead of threats with real-time monitoring and proactive security
          measures tailored to your unique needs.
        </p>
        <div className="security_icon max-sm:flex-col flex max-lg:gap-x-5 gap-y-9 gap-x-[106px] max-sm:items-center max-lg:justify-between justify-center">
          {data.map((item) => (
            <div className="max-sm:max-w-56 max-md:max-w-40 max-lg:max-w-56 max-w-[290px]">
              <img
                src={item.img}
                className="max-md:max-w-24 max-lg:max-w-[120px] max-w-[150px] mx-auto max-sm:mb-3 max-md:mb-4 mb-8"
                alt="img"
              />
              <h4 className="max-md:text-base max-lg:text-xl text-2xl capitalize text-center font-bold text-[#75CCFF] ">{item.text}</h4>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
