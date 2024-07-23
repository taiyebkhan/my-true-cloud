import React from "react";
import Events8 from "./../../../assets/img/Events-img-8.png";

export default function EventSubscribeForm() {
  return (
    <section className="bg-[#EDF8FF] max-h-[500px]">
      <div className="innerContainer relative top-0 left-0">
        <h1 className="text-center max-sm:text-xl max-md:text-[25px] max-lg:text-[35px] text-[44px] leading-tight font-extrabold text-[#131313] font_family_heading max-sm:pt-10 pt-20 relative top-0 z-10">
          Subscribe for events updated
        </h1>

        <div className="relative max-lg:top-[-55px] top-[-130px]">
          <img
            src={Events8}
            alt=""
            className="max-sm:w-[380px] max-md:w-[500px] max-lg:w-[700px] max-w-[900px] m-auto z-10 "
          />
          <form className="absolute top-[182px] left-[444px]">
            <input
              type="text"
              placeholder="Name"
              className="w-[444px] max-w-[850px] rounded-3xl p-2.5 outline-0"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-[444px] max-w-[850px] rounded-3xl p-2.5 outline-0 my-5"
            />
            <button className="w-[444px] max-w-[850px] rounded-3xl p-2.5 outline-0 bg-[#0D71AC] text-[#000]">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
