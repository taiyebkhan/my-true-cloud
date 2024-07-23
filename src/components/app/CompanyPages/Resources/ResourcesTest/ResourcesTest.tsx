import React from "react";
import img from "../../../../../assets/img/resources/Quotes.png";
import next from "../../../../../assets/img/resources/Next.png";
import prev from "../../../../../assets/img/resources/Previous.png";

const Data = [
  {
    text:
      "Quisquam similique molestiae quia quod dolorum et. Aliquid blanditiis voluptatem maxime qui et voluptas minus. Non provident pariatur nisi. Repellat voluptas culpa eius.",
  },
  {
    text:
      "Quisquam similique molestiae quia quod dolorum et. Aliquid blanditiis voluptatem maxime qui et voluptas minus. Non provident pariatur nisi. Repellat voluptas culpa eius.",
  },
  {
    text:
      "Quisquam similique molestiae quia quod dolorum et. Aliquid blanditiis voluptatem maxime qui et voluptas minus. Non provident pariatur nisi. Repellat voluptas culpa eius.",
  },
];

const ResourcesTest = () => {
  return (
    <div className="w-full h-[640px] bg-[#F1F1F1] rounded-[14px] relative">
      <div className="h-[116px] w-[48px] border border-sky-500 absolute flex flex-col justify-between">
        <img src={prev} alt="" className="h-[50px] w-[50px]" />
        <img src={next} alt="" className="h-[50px] w-[50px]" />
      </div>
      <div className="grid grid-cols-2 px-40 py-12 gap-12">
        <div className="h-[540px] flex-col overflow-scroll overflow-x-hidden scroll-smooth rounded-5">
          {Data.map((item, index) => (
            <div
              key={index}
              className=" bg-[#FFFFFF] h-[30%] p-7 text-xs leading-6 flex-col my-4 relative"
            >
              <p className="p-"> {item.text}</p>
              <img
                src={img}
                alt=""
                className="absolute h-[50px] w-[50px] top-[-20px]"
              />
            </div>
          ))}
        </div>

        <div className="border h-[540px] border-sky-400 p-2 bg-[#FFFFFF]">
          <div className="w-full h-[401.63px] bg-gray-500" />
          <div className="flex flex-col w-full border border-sky-300 py-6">
            <p className="font-['inter'] text-[20px] text-center m-auto">
              Byron Rolfson
            </p>
            <p className="m-auto">Designation, Company</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesTest;
