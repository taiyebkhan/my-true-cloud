import React from "react";
import parse from "html-react-parser";
import CollaborationIcon from "../../../icon/CollaborationIcon";
import BuildingIcon from "../../../icon/BuildingIcon";
import MessageIcon from "../../../icon/MessageIcon";
import { PriceChange, Security } from "@mui/icons-material";
import { motion } from "framer-motion";

const Card: React.FC<{
  heading: string;
  iconColor: string;
  icon?: JSX.Element | React.ReactNode;
  text: string;
  link?: string;
  index: number;
}> = (props) => {
  return (
    <motion.div
      className="w-full bg-white max-sm:py-4 max-md:py-5 py-[30px] max-sm:px-3 pr-9 px-7 rounded-2xl"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3 * (props.index + 1),
      }}
    >
      {/* <div className="w-full bg-white py-[30px] max-sm:px-3 pr-9 px-7 rounded-2xl"> */}
      <div
        className={`max-sm:w-8 max-sm:h-8 w-[43px] h-[43px] rounded-full max-sm:mb-1.5 mb-3 flex items-center justify-center`}
        style={{ backgroundColor: props.iconColor }}
      >
        {props.icon}
      </div>
      <h3 className="max-xs:text-xs max-sm:text-sm max-md:text-lg max-lg:text-xl text-2xl font-extrabold font-['Inter'] max-sm:mb-1.5 mb-2.5">
        {parse(props.heading)}
      </h3>
      <p className="max-sm:hidden mb-1 max-sm:text-xs max-md:text-sm text-[15px] font-normal font-['Montserrat'] leading-relaxed tracking-wide">
        {props.text}
        <br />
      </p>

      <p className="max-sm:block hidden mb-1 max-xs:text-[10px] max-sm:text-xs max-md:text-sm text-[15px] font-normal font-['Montserrat'] leading-relaxed tracking-wide">
        {props.text.slice(0, 70)}...
        <br />
      </p>
      <a
        href={props.link}
        className="colorPrimary max-md:text-sm text-[15px] font-bold font-['Montserrat'] underline leading-relaxed tracking-wide"
      >
        READ MORE
      </a>
      {/* </div> */}
    </motion.div>
  );
};

const cardData = [
  {
    heading: "TRUE <br />COLLABORATION",
    text: "MyTrueCloud sets the standard for Cloud collaboration solutions. Our applications provide secure mobile solutions for today’s complex...",
    iconColor: "#9ECAFF",
    link: "#",
    icon: <CollaborationIcon />,
  },

  {
    heading: "TRUE MOBILE <br />OFFICE",
    text: "The phrase “Any Time, Any Where, Any Device” has become synonymous with the adoption of mobile technology...",
    iconColor: "#AC9EFF",
    link: "#",
    icon: <BuildingIcon />,
  },

  {
    heading: "TRUE <br />COMPLIANCE",
    text: "Companies needing to comply with HIPAA, SOX or GLBA regulations understand the complexities of applying the regulations and the...",
    iconColor: "#9ECAFF",
    link: "#",
    icon: <MessageIcon />,
  },
  {
    heading: "TRUE <br />SOLUTIONS",
    text: "As a leading technology innovator, MTC wants to partner with you to execute game-changing transformations...",
    iconColor: "#9ECAFF",
    link: "#",
    icon: <MessageIcon />,
  },
  {
    heading: "TRUE <br />PRICING",
    text: "MYTrueCloud offers the broadest and deepest collaboration functionality on the market with flexible pricing plans that will meet..",
    iconColor: "#FFD29E",
    link: "#",
    icon: <PriceChange fontSize="medium" sx={{ fill: "#AD4F26" }} />,
  },
  {
    heading: "TRUE <br/>SECURITY",
    text: "Data privacy is the single biggest reason for not adopting cloud and mobile solutions. MTC harnesses the power of the cloud with...",
    iconColor: "#C6EFCF",
    link: "#",
    icon: <Security fontSize="medium" sx={{ fill: "#4B8E5B" }} />,
  },
];

const AdvantagesSection = () => {
  return (
    <section className="lightBackground max-sm:py-9 max-md:py-12 py-16">
      <div className="innerContainer grid max-lg:grid-cols-2 max-xl:grid-cols-3 grid-cols-4 max-sm:gap-3 gap-x-6 gap-y-8 max-sm:px-8 max-[1400px]:px-2">
        <motion.div
          className="w-full max-md:p-10 pt-16 pb-20 px-20 relative col-span-2 bgDark rounded-2xl"
          initial={{ opacity: 0, transform: "translateX(-100px)" }}
          whileInView={{ opacity: 1, transform: "translateX(0px)" }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: "backOut",
            delay: 0.5,
          }}
        >
          <button className="w-[132px] h-[38px] mb-5 px-1.5 py-[7px] bgPrimaryLight rounded-[21px] justify-center items-center gap-0.5 inline-flex">
            <div className="self-stretch text-center text-black text-base font-medium font-['Inter'] leading-normal">
              Why Us?
            </div>
          </button>
          <h2 className="text-white font-extrabold">
            My True Cloud <br />
            Experiences
          </h2>
        </motion.div>

        {cardData.map((item, i) => (
          <Card key={i} {...item} index={i} />
        ))}
      </div>
    </section>
  );
};

export default AdvantagesSection;
