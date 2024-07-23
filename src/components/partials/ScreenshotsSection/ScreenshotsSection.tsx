import React from "react";
import img from '../../../assets/img/crm-screenshots-img.png'
import smallImg from '../../../assets/img/screen-shot-small-img.png'

const ScreenshotsSection = () => {
  return (
    <section className="max-sm:mb-11" >
      <div className="innerContainer">
        <h2 className="text-center max-xs:mb-2 max-md:mb-4 mb-8 font-black">
          Screenshots
        </h2>
        <p className="max-w-[1059px] max-sm:mb-3 mx-auto text-center text-neutral-900 font-normal max-xs:leading-5 max-md:leading-6 leading-[30.42px] tracking-wide">
          Lorem ipsum dolor sit amet consectetur. Lacus faucibus tellus lectus
          justo egestas. Massa a pulvinar felis mattis leo in semper in. Lorem
          ipsum dolor sit amet consectetur. Lacus faucibus tellus lectus justo
          egestas. Massa a pulvinar felis mattis leo in semper in.
        </p>
      </div>

      <div className="max-w-[1467px] mx-auto" >
        <img src={img} alt="img" className="w-full max-sm:hidden" />
        <img src={smallImg} alt="img" className="w-full max-w-96 mx-auto max-sm:block hidden" />
      </div>
    </section>
  );
};

export default ScreenshotsSection;
