import React from "react";
import img from "../../../../../assets/img/training-services-images/header-img.png";
import waveImg from "../../../../../assets/img/training-services-images/header-bg-design.png";

const TrainingServicesHeader = () => {
  return (
    <section className="max-sm:pt-5 pt-16  max-sm:pb-14 pb-28 relative">
      <img
        src={waveImg}
        alt="img"
        className="absolute w-screen max-xs:h-[280px] max-md:h-[580px] max-2xl:h-[660px] max-h-[800px] max-xs:top-[45%] top-[28%] bottom-0 -z-10 left-1/2 -translate-x-1/2"
      />

      <div className="innerContainer">
        <h2 className="font-black text-center mb-5 max-w-screen-lg mx-auto">
          As with Anything New, There is a Learning / Transition Period
        </h2>
        <p className="max-w-[1245px] mx-auto text-center">
          We have found that customers that invest (mainly time) in training
          before, during and after the implementation will achieve the highest
          level of success, acceptance and adoption by the users of MTC. As with
          anything new, there is a transition period and with software,
          transition is critical. Most individuals like to study before taking
          the big test (yes, there are a few of you who were A students cramming
          the night before). If well-planned training is not done prior to going
          live, your people are going to be asked to jump in while dealing with
          the day-to-day pressures.
        </p>

        <div>
          <img
            src={img}
            alt="img"
            className="max-xs:w-[315px] max-w-[823] mx-auto mt-7"
          />
        </div>
      </div>
    </section>
  );
};

export default TrainingServicesHeader;
