import React from "react";
import styles from "./MyCrmWebConferencesHeader.module.css";
import ButtonPrimary from "../../../../partials/Buttons/ButtonPrimary";
import img from "../../../../../assets/img/my-crm-web-conferences/my-crm-web-conferences-header.png";

const MyCrmWebConferencesHeader = () => {
  return (
    <section className="max-md:pt-10 max-lg:pt-16 pt-[90px] max-xs:mb-2 max-md:mb-5 mb-10">
      <div
        className={`${styles.background} w-[100%] max-xs:h-[88%] max-sm:h-[90%] max-md:h-full max-lg:h-[120%] h-[1000px] absolute -z-10 top-0 rounded-bl-[700px] rounded-br-[700px]`}
      ></div>
      <div className="innerContainer">
        <h2 className="text-center text-[56px] max-sm:leading-8 font-black font-['Inter'] max-md:mb-3 mb-6 max-lg:text-[30px]">
          MY WEB CONFERENCES
        </h2>

        <p className="text-center max-xs:text-xs max-sm:text-base max-md:text-lg max-lg:text-xl text-2xl font-bold font-['Montserrat'] max-md:mb-2 mb-4 tracking-wide">
          Toll Free Webinars and Video/Web Conferencing
        </p>
        <p className="max-w-[1095px] mx-auto text-center max-md:mb-5 mb-7">
          The key is Collaboration among all of the participants. Being able to
          share documents, have open dialogue, sharing an electronic whiteboard
          and creating projects and tasks to manage takeaways from that meeting.
          Then, going a step further, using MTC’s video conferencing
          capabilities, participants can see one another’s face, gestures and
          body language to create the necessary energy and teamwork that will
          drive results.
        </p>

        <ButtonPrimary py="py-3" className="mx-auto max-md:mb-5 mb-8">
          Book a Demo
        </ButtonPrimary>

        <img
          src={img}
          alt="img"
          className="max-w-[1095px] mx-auto max-lg:w-[90%]"
        />
      </div>
    </section>
  );
};

export default MyCrmWebConferencesHeader;
