import React from "react";

const RescourcesWhitePaper = () => {
  return (
    <div>
      <h1 className="font-['inter'] text-[24px] font-bold leading-[31px] tracking-normal text-left py-[19px]">
        White Paper
      </h1>
      <div className="bg-white grid grid-cols-2 gap-6">
        <div className="flex flex-col gap-y-6">
          <div>
            <div className="w-[655px] h-[318px] top-407 left-91 rounded-lg bg-gradient-to-r from-[#75BEBA] to-[#BCECE3]">
              <div className="pt-[49px] pl-[52px] w-[370px]">
                <h1 className="font-['inter'] text-3xl font-bold leading-[39px] tracking-normal text-left">
                  My CRM White Paper
                </h1>
                <p className="font-['montserrat'] text-base font-normal leading-[25.35px] tracking-tighter text-left">
                  Because most people are familiar with using the Internet to
                  find what
                </p>
                <button className="font-['inter'] text-lg w-[181px] h-[54px] py-[12] px-[31px] border-2 rounded-[9px] gap-10 bg-white shadow-md mt-[75px]">
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RescourcesWhitePaper;
