import React from "react";
import Education3 from "./../../../../assets/img/eductaion/Education-3.png";

function EducationEndCard() {
  return (
    // <section className="bgDark">
    //   <div className="innerContainer max-md:items-center max-md:flex-col flex">
    //     <div className="w-full max-[880px]:w-[550px] max-w-[1150px] bg-[#FFFFFF] md:ml-10 mt-20">
    //       <p className="max-md:w-full max-[880px]:text-[15px] max-md:w-[560px] max-[880px]:w-[550px] max-lg:py-[50px] py-[72px] text-[#131313] md:pr-28 max-xl:text-lg max-xl:w-[650px] text-center font-extrabold Line-height-[36px] Letter-spacing-[3%] font_family_heading text-xl text-[#131313] max-w-[770px] m-auto">
    //         Deliver seamless experiences to achieve success. Connect
    //         departments, increase collaboration, and secure your campus through
    //         digital transformation.
    //       </p>
    //     </div>
    //     <div className="md:lg:translate-y-[61px] md:translate-y-[52px] md:translate-x-[-157px] md:translate-x-[-200px]">
    //       <img
    //         src={Education3}
    //         alt=""
    //         className="max-lg:w-[300px] max-w-[380px]"
    //       />
    //     </div>
    //   </div>
    // </section>

    <section className="bgDark pt-[73px]">
      <div className="innerContainer relative">
        <div className="max-md:hidden absolute h-[92%] w-[80%] bg-white left-12 bottom-0" />

        <div className="max-md:px-5 max-md:bg-white max-md:flex-col flex items-center gap-x-8 gap-y-9 max-md:pt-7 justify-end relative z-10">
          <p className="max-md:ml-0 max-[1200px]:ml-12 max-sm:text-sm max-md:text-base max-lg:text-lg text-xl max-w-[663px] text-center max-md:leading-none max-lg:leading-6 leading-8">
            Deliver seamless experiences to achieve success. Connect
            departments, increase collaboration, and secure your campus through
            digital transformation.
          </p>

          <img src={Education3} alt="img" className="max-sm:max-w-56 max-lg:max-w-sm max-w-md" />
        </div>
      </div>
    </section>
  );
}

export default EducationEndCard;
