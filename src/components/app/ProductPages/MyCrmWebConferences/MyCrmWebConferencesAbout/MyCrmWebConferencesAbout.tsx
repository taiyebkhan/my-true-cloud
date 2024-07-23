import React from "react";
import img from "../../../../../assets/img/my-crm-web-conferences/my-crm-web-conferences-about.png";

const MyCrmWebConferencesAbout = () => {
  return (
    <section className="max-md:mb-12 max-lg:mb-14 mb-20 max-lg:pt-16">
      <div className="innerContainer flex items-center gap-x-[75px] justify-between  max-lg:flex-col max-lg:gap-y-4">
        <img src={img} alt="img" className="max-xs:max-w-[312px] max-sm:max-w-[80%] max-lg:max-w-lg max-xl:max-w-[45%] max-w-screen-sm" />
        <p className="max-lg:max-w-full max-w-[596px] ">
          Besides these many business benefits, the cost saving considerations
          of using MY Web Conferences are significant. No telephone or web
          conferencing costs – yes free, reduced travel costs and increased
          Productivity. The web meeting solution can be deployed as a stand
          alone offering or as an integrated solution with our DMS, Social
          Business and/or Security modules. If you have a global organization
          (even in those countries that are difficult to conduct web
          conferencing), MTC has its own secured proprietary SSL Virtual Private
          Network that will open the door to the whole world.
        </p>
      </div>
    </section>
  );
};

export default MyCrmWebConferencesAbout;
