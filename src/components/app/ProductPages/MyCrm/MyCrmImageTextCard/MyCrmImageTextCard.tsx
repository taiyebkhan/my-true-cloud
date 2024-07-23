import React from "react";
// import effect from "../../../../../assets/img/center-effect.png";
import effect from "../../../../../assets/img/effect.png";

import ButtonPrimary from "../../../../partials/Buttons/ButtonPrimary";
import parse from "html-react-parser";

const MyCrmImageTextCard: React.FC<{
  img: string;
  imgClasses: string;
  cardClasses?: string;
  heading: string;
  points: string[];
  effectClasses?: string;
}> = ({ img, heading, points, imgClasses, cardClasses, effectClasses }) => {
  return (
    <div
      className={`bg-white shadow rounded-3xl max-sm:pb-6 max-md:py-8 max-lg:py-9 max-lg:min-h-0 min-h-[527px] max-xl:px-8 px-[70px] max-lg:flex-col flex max-lg:justify-start justify-between items-center max-xl:gap-x-10 gap-x-20 relative ${cardClasses}`}
    >
      <img src={img} alt="img" className={`${imgClasses} max-xs:max-w-full max-sm:max-w-[80%] max-lg:max-w-[50%] max-lg:mb-5`} />
      <div className="max-md:w-full">
        <h1 className="max-lg:hidden max-xl:text-5xl font-extrabold font-['Inter'] mb-5">
          {parse(heading)}
        </h1>
        <ul className="pl-5 list-disc max-xs:text-xs max-sm:text-sm max-md:text-base max-lg:text-lg text-xl font-normal font-['Inter'] tracking-wide mb-8">
          {points.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <ButtonPrimary py="py-3">Read More</ButtonPrimary>
      </div>

      <img
        src={effect}
        alt="effect"
        className={`absolute -z-10 opacity-80 ${effectClasses}`}
      />
    </div>
  );
};

export default MyCrmImageTextCard;
