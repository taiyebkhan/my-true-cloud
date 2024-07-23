import React from "react";
// import img from "../../../../../assets/img/my-document-management-system-img.png";

const MyDocumentsManagementSystem: React.FC<{
  heading: string;
  text: string;
  img: string;
  afterImgText: string;
}> = (props) => {
  return (
    <section>
      <div className="innerContainer">
        <h2 className="text-center max-xs:text-xl max-lg:text-[35px] text-[44px] font-black font-['Inter'] mb-5 leading-[57.20px]">
          {props.heading}
        </h2>
        <p className="max-xs:text-sm max-sm:text-base max-w-[1120px] mx-auto text-center text-lg font-normal font-['Montserrat'] leading-[30.42px] tracking-wide mb-12">
          {props.text}
        </p>
      </div>
      <img
        src={props.img}
        alt="img"
        className="innerContainer max-w-[1120px] w-full mx-auto relative z-10"
      />
      <div className="bgDark max-xs:pt-14 max-sm:pt-28 pt-44 max-sm:pb-10 pb-20  max-xs:-translate-y-8  max-sm:-translate-y-20  -translate-y-28">
        <div className="max-w-[1120px] max-xs:text-sm max-sm:text-base px-5 mx-auto text-center text-white text-lg font-normal font-['Montserrat'] leading-[30.42px] tracking-wide">
          {props.afterImgText}
        </div>
      </div>
    </section>
  );
};

export default MyDocumentsManagementSystem;
