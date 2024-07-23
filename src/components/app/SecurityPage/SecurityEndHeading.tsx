import React from "react";
import parse from "html-react-parser";

import SecurityScreenshots from "./SecurityScreenshots";

const SecurityEndHeading: React.FC<{ heading: string; paragraph: string }> = ({
  heading,
  paragraph,
}) => {
  return (
    <>
      <div className="innerContainer max-md:pt-0 pt-10">
        <h1 className="text-center max-md:text-2xl max-lg:text-3xl max-sm:w-[300px] max-md:w-[400px] max-w-[990px]  m-auto text-[44px] leading-tight font-black text-[#131313] font_family_heading pb-2">
          {parse(heading)}
        </h1>
        <p className="text-center max-md:text-sm max-sm:w-[300px] max-md:w-[400px] text-lg Line-height-[30px] Letter-spacing-[3%] font_family font-normal text-[#131313] max-w-[718px] m-auto pt-2">
          {paragraph}
        </p>
      </div>
    </>
  );
};
export default SecurityEndHeading;
