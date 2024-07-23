import React from "react";
import styles from "./AboutKeyElementSection.module.css";
import img from "../../../../assets/img/about-key-element-img.png";
import QuotesIcon from "../../../icon/QuotesIcon";

const Card: React.FC<{ heading: string; text: string; width?: string }> = ({
  heading,
  text,
  width,
}) => {
  return (
    <div
      className={`max-md:w-full max-md:mb-10  ${
        width ? width : "md:max-w-[394px]"
      }`}
    >
      <div className="flex mb-5 max-sm:ml-8 max-xs:justify-start items-center gap-x-3 justify-center">
        <div
          className={`${styles.linearGradient} w-[34px] h-5 bg-gradient-to-b shadow`}
        ></div>
        <h2 className="font-bold max-xs:text-xl max-lg:text-[25px] font-['Inter'] max-xs:text-left text-center">
          {heading}
        </h2>
      </div>
      <div className="max-xs:pl-5 max-md:pl-7 pl-10 max-xs:pb-2 pb-4 relative">
        <div
          className={`${styles.linearGradient} bg-gradient-to-b absolute left-0 h-full w-[80%] -z-10`}
        />

        <p className="max-md:pl-6 max-md:pb-5 max-lg:pl-2 max-lg:leading-relaxed pl-8 max-lg:pb-3 pb-6 bg-white font-normal">
          {text}
        </p>
      </div>
    </div>
  );
};

const cardData = [
  {
    heading: "Our Vision",
    text: "Our vision is simple yet profound: to bethe catalyst for sustainable growth and success in every venture we undertake.We envision a world where innovation flourishes, businesses thrive, andcommunities prosper. Through our strategic investments and unwaveringdedication, we aim to create lasting value for our stakeholders and contributepositively to the global economy.",
  },
  {
    heading: "Our Portfolio",
    text: "Our portfolio reflects our commitment to diversity, innovation, and growth. From emerging startups to established industry leaders, we invest in companies with the vision, drive, and potential to make a meaningful impact. With a focus on sectors such as technology,  finance, and beyond, our portfolio encompasses a wide range of opportunities for value creation and long-term success.",
  },
  {
    heading: "Our Values",
    text: "Integrity, transparency, and accountability are the cornerstones of our operations. We conduct business with the highest ethical standards, prioritize the well-being of our stakeholders, and embrace diversity and inclusivity in all aspects of our work. By upholding these values, we cultivate trust, foster meaningful relationships, and uphold our reputation as a trusted partner and responsible corporate citizen.",
  },
];

function AboutKeyElementSection() {
  return (
    <section className="max-sm:mb-5 max-md:mb-10 mb-40">
      <div className="innerContainer">
        <p className=" max-w-[1120px] max-xs:text-sm mx-auto text-center max-sm:mb-14 max-lg:mb-20 mb-28 text-lg font-normal font-['Montserrat'] leading-[30.42px] tracking-wide">
          MTC understands a key element in achieving efficiency and productivity
          is simplicity. Our comprehensive CRM solution goes beyond the
          boundaries of traditional CRM solutions by including features that
          will differentiate your sales team from the laundry list of
          competitors, and empower the sales and marketing teams to collaborate
          in a simple environment to form winning strategies.
        </p>

        <div className=" flex gap-x-10 max-md:flex-col justify-between items-center max-sm:mb-[60px]  mb-[136px]">
          {/* <div className="relative  w-full">
            <div className="max-md:mb-10 w-full md:max-w-[554px]">
              <div className="flex mb-5 max-sm:ml-8 max-xs:justify-start items-center gap-x-3 justify-center">
                <div
                  className={`${styles.linearGradient} w-[34px] h-5 bg-gradient-to-b shadow`}
                ></div>
                <h2 className="font-bold max-xs:text-xl font-['Inter'] max-xs:text-left text-center">
                  Our Approach
                </h2>
              </div>
              <div className="pl-10  pb-4 relative">
                <div
                  className={`${styles.linearGradient} bg-gradient-to-b absolute left-0 h-full w-[80%] -z-10`}
                />

                <p className="max-md:pl-6 max-md:pb-5 max-lg:pl-2 max-lg:leading-relaxed pl-8 max-lg:pb-3 pb-6 bg-white font-normal font-['Montserrat']">
                  At Panaya Holdings, we believe in the powerof strategic
                  partnerships and collaborative endeavors. Our approach is
                  rootedin meticulous research, prudent risk management, and a
                  deep understanding ofmarket dynamics. By leveraging our
                  expertise, resources, and network, weempower our portfolio
                  companies to achieve their full potential and navigatethe
                  complexities of today's business landscape with confidence.
                </p>
              </div>
            </div>
          </div> */}
          <div className="max-md:max-w-lg">
            <Card
              width="md:max-w-[554px]"
              heading={"Our Approach"}
              text={
                "At Panaya Holdings, we believe in the powerof strategic partnerships and collaborative endeavors. Our approach is rootedin meticulous research, prudent risk management, and a deep understanding ofmarket dynamics. By leveraging our expertise, resources, and network, weempower our portfolio companies to achieve their full potential and navigatethe complexities of today's business landscape with confidence."
              }
            />
          </div>

          <img
            src={img}
            alt="img"
            // max-xs:w-[240px]  max-xs:h-[200px] max-sm:w-[380px]
            className="max-sm:w-full max-sm:h-auto max-md:w-[90%] max-[840px]:w-[300px] max-md:h-[300px] max-lg:w-[380px] max-lg:h-[250px] max-xl:w-[500px] max-w-[652px]"
          />
        </div>

        <div className="flex max-md:flex-col max-xl:gap-x-[24px]  gap-x-[74px] justify-between">
          {cardData.map((item) => (
            <Card heading={item.heading} text={item.text} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutKeyElementSection;
