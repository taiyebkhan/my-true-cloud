import React from "react";
import parse from "html-react-parser";

const ImgTextFlexComponent: React.FC<{
  heading?: string;
  text: string;
  img: string;
  cardClasses?: string;
  imgClasses?: string;
  textContainerWidthClass?: string;
}> = ({
  heading,
  text,
  img,
  cardClasses,
  imgClasses,
  textContainerWidthClass,
}) => {
  return (
    <div
      className={`flex max-lg:flex-col-reverse max-xs:items-start justify-between items-center max-lg:gap-[10px] max-xl:gap-[30px] gap-[120px] ${
        cardClasses ? cardClasses : ""
      }`}
    >
      <div
        className={
          textContainerWidthClass ? textContainerWidthClass : "max-w-[622px]"
        }
      >
        {heading && (
          <h2 className=" max-lg:hidden md:block max-[880px]:text-[22px] max-[1188px]:text-[30px] text-black  max-lg:text-[25px] max-xl:text-[40px] text-[44px] font-black font-['Inter'] mb-5">
            {parse(heading)}
          </h2>
        )}
        <p className="max-xs:text-sm  max-[880px]:text-[13px] -lg:text-[14px] max-xl:text-[16px] text-lg max-xl:leading-relaxed font-normal font-['Montserrat'] leading-[30.42px] tracking-wide">
          {text}
        </p>
      </div>
      <img
        className={`${imgClasses} max-md:mx-auto max-sm:w-[320px] max-md:w-[450px] max-[880px]:w-[300px] max-lg:w-[350px] max-[1190px]:w-[450px]`}
        src={img}
        alt="img"
      />
      {heading && (
        <h2 className="max-lg:block hidden text-black max-xs:text-xl max-sm:text-2xl  max-lg:text-[30px] max-xl:text-[40px] text-[44px] font-black font-['Inter'] mb-3">
          {parse(heading)}
        </h2>
      )}
    </div>
  );
};

export default ImgTextFlexComponent;
