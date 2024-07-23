import React from "react";

export default function EventsGartnerHeading() {
  return (
    <section>
      <div className="innerContainer max-xl:px-5 text-center mb-10">
        <h1 className="max-sm:text-xl max-lg:text-[30px] text-[44px] leading-tight font-black text-[#131313] font_family_heading max-sm:pb-2 pb-5">
          Worldwide Gartner Events Calendar
        </h1>
        <a
          href="https://www.gartner.com/en/conferences/calendar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0D71AC] font-semibold text-center text-xl"
        >
          http://www.gartner.com/EventsCal
        </a>
      </div>
    </section>
  );
}
