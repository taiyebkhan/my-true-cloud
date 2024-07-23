import React from "react";
import EventsSubCards from "./EventsSubCards";

export default function EventsCards() {
  return (
    <section>
      <div className="innerContainer max-xl:px-5  mb-10">
        <h1 className="text-center max-sm:text-[26px] max-lg:text-[35px] text-[44px] leading-tight font-black text-[#131313] font_family_heading max-md:mt-10 mt-20">
          Industry Events
        </h1>

        <EventsSubCards />
      </div>
    </section>
  );
}
