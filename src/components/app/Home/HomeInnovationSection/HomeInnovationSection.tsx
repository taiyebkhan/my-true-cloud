import React from "react";
import { motion } from "framer-motion";
import img from "../../../../assets/img/home-game-changing-innovation.png";
import SecurityLockIcon from "../../../icon/SecurityLockIcon";
import DragAndDropIcon from "../../../icon/DragAndDropIcon";
import TokenIcon from "../../../icon/TokenIcon";

const data = [
  {
    title: "MY SECURITY",
    text: "Businesses spend significant resources (time, energy, and money) on a daily basis to gather, manage, and disseminate documents.",
    link: "#",
    icon: <SecurityLockIcon color="#0D71AC" />,
  },
  {
    title: "DRAG AND DROP",
    text: "Creating files is only half of the job. Sharing the information within your organization is just as important, and for many businesses...",
    link: "#",
    icon: <DragAndDropIcon />,
  },
  {
    title: "INVISIBLE CLOUD TOKEN",
    text: "MY TrueCloud’s Invisible Cloud-Token is a true game changer. Invisible Cloud-Token uses proprietary technology to deliver the industries...",
    link: "#",
    icon: <TokenIcon />,
  },
];

const HomeInnovationSection = () => {
  return (
    <section className="max-md:mb-16 max-lg:mb-20 mb-32">
      <div className="innerContainer">
        <h2 className="text-center font-black font-['Inter'] leading-[57.20px] max-xs:mb-1 max-lg:mb-10 mb-[60px]">
          Game Changing Innovation
        </h2>

        {/* <p className="max-w-[1059px] mx-auto mb-16 text-center text-lg font-normal font-['Montserrat'] leading-[30.42px] tracking-wide">
          Lorem ipsum dolor sit amet consectetur. Lacus faucibus tellus lectus
          justo egestas. Massa a pulvinar felis mattis leo in semper in. Lorem
          ipsum dolor sit amet consectetur. Lacus faucibus tellus lectus justo
          egestas. Massa a pulvinar felis mattis leo in semper in.
        </p> */}

        <div className="flex justify-center max-lg:flex-col-reverse gap-y-5 max-xl:justify-between max-lg:gap-x-12 max-xl:gap-x-10 gap-x-28 items-center">
          <div className="max-w-screen-sm max-sm:px-5 max-xs:py-[30px] max-md:py-8 max-xl:px-8 py-14 px-11 pr-14 lightBackground rounded-2xl flex flex-col gap-y-8">
            {data.map((item, i) => (
              <motion.div
                key={i}
                className="w-full flex gap-x-5"
                initial={{ opacity: 0, transform: "translateX(-50px)" }}
                whileInView={{ opacity: 1, transform: "translateX(0px)" }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: 0.35 * (i + 1),
                }}
              >
                <div className="w-full max-w-[43px] h-[43px] -mt-2 bgPrimaryMedium rounded-[33px] flex justify-center items-center">
                  {item.icon}
                </div>
                <div>
                  <div className="mb-3 max-xs:text-[15px] max-sm:text-base max-md:text-lg max-lg:text-xl text-2xl font-extrabold font-['Inter']">
                    {item.title}
                  </div>
                  <div className="">
                    <p className="text-black max-xs:text-xs max-sm:text-sm text-[15px] font-normal font-['Montserrat'] leading-relaxed tracking-wide">
                      {item.text}
                    </p>
                    <a
                      href="#"
                      className="colorPrimary max-xs:text-xs max-sm:text-sm text-[15px] font-bold font-['Montserrat'] underline leading-relaxed tracking-wide"
                    >
                      READ MORE
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.img
            className="max-sm:w-[80%] max-xs:max-w-[300px] max-xl:max-w-[430px] max-w-[480px]"
            initial={{
              opacity: 0,
              transform: "translateX(300px) rotate(100deg)",
            }}
            whileInView={{
              opacity: 1,
              transform: "translateX(0px) rotate(0deg)",
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            src={img}
            alt="img"
          />
          {/* <img
            src={img}
            alt="img"
            className="max-sm:w-[80%] max-xs:max-w-[300px] max-xl:max-w-[430px] max-w-[480px]"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default HomeInnovationSection;
