import React from "react";
import parse from "html-react-parser";
const BankingServicesImgCard: React.FC<{
  heading: string;
  para: string;
  img: string;
  reverse: string;
  imgStyles: string;
}> = ({ heading, para, img, reverse, imgStyles }) => {
  return (
    <div className={`innerContainer `}>
      <div className={`py-10 flex  ${reverse} rounded-xl`}>
        <div className="py-10 ml-20">
          <h1 className="text-[44px] leading-tight font-black text-[#131313] font_family_heading pb-5">
            {parse(heading)}
          </h1>
          <p className="text-lg Line-height-[30px] Letter-spacing-[3%] font_family font-normal text-[#131313]">
            {para}
          </p>
        </div>

        <div className="max-w-[442px] pt-8">
          <img src={img} alt="" className={`${imgStyles}`} />
        </div>
      </div>
    </div>
  );
};

export default BankingServicesImgCard;
