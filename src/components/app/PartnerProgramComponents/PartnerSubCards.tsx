import React from "react";
import parse from "html-react-parser";

import icon1 from "./../../../assets/img/Partner-icon-1.png";
import icon2 from "./../../../assets/img/Partner-icon-2.png";
import icon3 from "./../../../assets/img/Partner-icon-3.png";
import icon4 from "./../../../assets/img/Partner-icon-4.png";
import icon5 from "./../../../assets/img/Partner-icon-5.png";
import icon6 from "./../../../assets/img/Partner-icon-6.png";
import icon7 from "./../../../assets/img/Partner-icon-7.png";
import icon8 from "./../../../assets/img/Partner-icon-8.png";
import icon9 from "./../../../assets/img/Partner-icon-9.png";
import icon10 from "./../../../assets/img/Partner-icon-10.png";
import icon11 from "./../../../assets/img/Partner-icon-11.png";
import icon12 from "./../../../assets/img/Partner-icon-12.png";
import icon13 from "./../../../assets/img/Partner-icon-13.png";
import icon14 from "./../../../assets/img/Partner-icon-14.png";
import icon15 from "./../../../assets/img/Partner-icon-15.png";
import icon16 from "./../../../assets/img/Partner-icon-16.png";
import icon17 from "./../../../assets/img/Partner-icon-17.png";
import Partner4 from "./../../../assets/img/Partner-img-4.png";
import Partner5 from "./../../../assets/img/Partner-img-5.png";
import Partner6 from "./../../../assets/img/Partner-img-6.png";
import Partner7 from "./../../../assets/img/Partner-img-7.png";
import Partner8 from "./../../../assets/img/Partner-img-8.png";

const iconData = [
  {
    heading: "Go to Market Quickly with",
    img: Partner4,
    imgWidth: "max-sm:w-[205px]",
    points: [
      {
        text: "World-class cloud-based solutions customers want and need",
        icon: icon1,
      },
      {
        text: "Expanding product roadmap to meet the challenges of an evolving mobile world",
        icon: icon2,
      },
      {
        text: "Role base pricing model so your customers only pay for what they need and want",
        icon: icon3,
      },
    ],
  },
  {
    img: Partner5,
    imgWidth: "max-sm:w-[190px]",
    points: [
      {
        text: "Flexible contracts (month-to-month or long-term) and customers own their data",
        icon: icon4,
      },
      {
        text: "High reliability – SAS 70 Type III Data center environment",
        icon: icon5,
      },
      {
        text: "Experienced service provider dedicated to your success",
        icon: icon6,
      },
    ],
  },
  {
    heading: "Gets Benefit from",
    img: Partner6,
    imgWidth: "max-sm:w-[190px]",
    points: [
      {
        text: "Generous product discounts on a broad range of products and services",
        icon: icon7,
      },
      {
        text: "Compensated on all business you bring to MTC",
        icon: icon8,
      },
      {
        text: "Strong recurring revenue model – Rewarded for long-term customer relationships",
        icon: icon9,
      },
    ],
  },
  {
    img: Partner7,
    imgWidth: "max-sm:w-[190px]",
    points: [
      {
        text: "Branding and hosting options (For Qualified Partners)",
        icon: icon10,
      },
      {
        text: "Lead referrals",
        icon: icon11,
      },
      {
        text: "Sales and marketing support",
        icon: icon12,
      },
      {
        text: "Dedicated sales and technical support team",
        icon: icon13,
      },
      {
        text: "Company listing on our website",
        icon: icon14,
      },
    ],
  },
  {
    img: Partner8,
    imgWidth: "max-sm:w-[193px]",
    points: [
      {
        text: "Co-op Marketing development fund program Regular contact with MTC Senior Management",
        icon: icon15,
      },
      {
        text: "Your own dedicated environment on MTC data server. (For Qualified Partners)",
        icon: icon16,
      },
      {
        text: "Use of MTC’s Products for internal-use, demo, sales, and marketing purposes. (For Qualified Partners)",
        icon: icon17,
      },
    ],
  },
];

const PartnerSubCards: React.FC<{}> = () => {
  return (
    <section>
      {iconData.map((item, i) => (
        <>
          <h1 className="max-sm:text-[26px] max-lg:text-[30px] text-[44px] leading-tight font-bold text-[#131313] font_family_heading max-md:mt-0 mt-10">
            {item.heading}
          </h1>
          <div
            className={` flex max-sm:flex-col-reverse ${
              (i + 1) % 2 === 0 ? "flex-row-reverse" : ""
            }`}
          >
            <div className="max-sm:w-full w-[50%]">
              <div className="flex max-w-[395px] flex-col max-lg:ml-5 ml-[52px] my-10">
                {item.points.map((data) => (
                  <div className="flex max-sm:gap-[15px]  gap-[30px] max-sm:py-1 py-3">
                    <div>
                      <img
                        src={data.icon}
                        alt=""
                        className="max-lg:w-[40px]  max-w-[56px]"
                      />
                    </div>
                    <div>
                      <p className="max-lg:text-[14px] text-lg ">
                        {parse(data.text)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className=" max-lg:w-[40%]  max-w-[50%] m-auto">
              <img src={item.img} alt="" className={item.imgWidth} />
            </div>
          </div>
        </>
      ))}
    </section>
  );
};

export default PartnerSubCards;
