import React from "react";
import ShadowArrowRight from "../../../../icon/ShadowArrowRight";

const cardData = [
  {
    heading: "Engineering Manager",
    text: "We’re looking for an experienced engineering manager to join our team.",
    jobType: "Full-time",
  },
  {
    heading: "Product Designer",
    text: "We’re looking for a mid-level product designer to join our team.",
    jobType: "Full-time",
  },
  {
    heading: "Engineering Manager",
    text: "We’re looking for an experienced engineering manager to join our team.",
    jobType: "Full-time",
  },
  {
    heading: "Product Designer",
    text: "We’re looking for a mid-level product designer to join our team.",
    jobType: "Full-time",
  },
  {
    heading: "Product Designer",
    text: "We’re looking for a mid-level product designer to join our team.",
    jobType: "Full-time",
  },
  {
    heading: "Product Designer",
    text: "We’re looking for a mid-level product designer to join our team.",
    jobType: "Full-time",
  },
];

const CareerOpportunitiesSection = () => {
  return (
    <section className="max-md:mb-10 max-lg:mb-20 mb-[140px]">
      <div className="innerContainer">
        <h2 className="max-w-[630px] text-center mx-auto mb-7">
          Some opportunities for you to explore
        </h2>

        <div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 grid-cols-3 gap-5">
          {cardData.map((item, i) => (
            <div
              key={i}
              className=" max-xs:p-5 max-sm:p-10 max-[800px]:p-5 p-12 pb-11 shadow-md bgGray rounded-2xl flex flex-col justify-between"
            >
              <div>
                <h4 className="max-sm:text-xl text-2xl mb-3 font-extrabold">
                  {item.heading}
                </h4>
                <p className="leading-8 mb-8">{item.text}</p>
              </div>

              <div className="flex justify-between items-end">
                <p className="font-bold text-[15px] colorPrimary">
                  {item.jobType}
                </p>
                <button className="max-xs:w-[45px] max-xs:h-[45px] w-[70px] h-[70px] hover:shadow-md transition-all duration-200 active:scale-90 rounded-full bgPrimary flex items-center justify-center">
                  <ShadowArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerOpportunitiesSection;
