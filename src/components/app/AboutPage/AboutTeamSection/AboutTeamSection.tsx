import React, { useState } from "react";
import styles from "./AboutTeamSection.module.css";
import teamImg1 from "../../../../assets/img/about-team-img-1.png";
import teamImg2 from "../../../../assets/img/about-team-img-2.png";
import teamImg3 from "../../../../assets/img/about-team-img-3.png";
import teamImg4 from "../../../../assets/img/about-team-img-4.png";

const teamData = [
  {
    img: teamImg1,
    name: "Name",
    designation: "Designation",
  },
  {
    img: teamImg2,
    name: "Name",
    designation: "Designation",
  },
  {
    img: teamImg3,
    name: "Name",
    designation: "Designation",
  },
  {
    img: teamImg4,
    name: "Name",
    designation: "Designation",
  },
];

const AboutTeamSection = () => {
  const [activeCard, setActiveCard] = useState<null | number>(null);

  return (
    <section className="max-md:mb-10 max-lg:mb-20 mb-28">
      <div className="innerContainer">
        <h2 className="text-center mb-6  font-black">
          Tha <span className="colorPrimary">Team</span>
        </h2>

        <p className=" max-w-[1164px] max-xs:text-sm mx-auto max-sm:mb-8 mb-16 text-center text-neutral-900 text-lg font-normal font-['Montserrat'] leading-[30.42px] tracking-wide">
          Meet our innovative team, dedicated to revolutionizing the way
          businesses harness the power of the cloud. With diverse backgrounds
          and a passion for cutting-edge technology, we're committed to
          delivering seamless solutions tailored to your needs."
        </p>

        <div className="grid max-lg:grid-cols-2   grid-cols-4 max-sm:gap-3 md:gap-x-7 justify-between">
          {teamData.map((item, i) => (
            <div
              onClick={() => {
                if (activeCard === i) {
                  setActiveCard(null);
                  return;
                }
                setActiveCard(i);
              }}
              key={i}
              className="sm:px-3 sm:py-4 flex-col max-lg:items-center justify-start items-start max-sm:gap-[1px] gap-[7px] inline-flex relative cursor-pointer"
            >
              <div
                className="border rounded-lg max-xs:rounded-sm py-[16px] px-[12px] max-w-[310px] max-h-[393px]"
                style={{ boxShadow: "0px 1px 4px 0px #00000040" }}
              >
                <img
                  alt="user-img"
                  className="w-full max-h-[299px]"
                  src={item.img}
                />
                <div
                  className={`pt-2 relative z-10 ${
                    activeCard === i
                      ? styles.activeNameDesignationContainer
                      : ""
                  } ${styles.nameDesignationContainer}`}
                >
                  <p className="text-justify max-sm:text-sm text-xl font-normal font-['Noto Sans']">
                    NAME
                  </p>
                  <p className="text-xl  max-sm:text-base font-light italic font-['Inter']">
                    Designation
                  </p>
                </div>
              </div>

              <div
                className={`${styles.hoverCardContainer} ${
                  activeCard === i ? styles.activeHoverCard : ""
                }`}
              >
                <div className="text-lg max-lg:text-lg max-xs:text-[10px] font-normal font-['Montserrat'] leading-snug max-[1200px]:text-sm max-[527px]:text-xs max-[675px]:text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut laboreUt enim ad minim veniam.
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeamSection;
