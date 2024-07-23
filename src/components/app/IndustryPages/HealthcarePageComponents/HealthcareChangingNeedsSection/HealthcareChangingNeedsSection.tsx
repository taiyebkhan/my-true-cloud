import { PersonRounded } from "@mui/icons-material";
import React from "react";
import ScaleIcon from "../../../../icon/ScaleIcon";
import SecurityLockIcon from "../../../../icon/SecurityLockIcon";
import MobileIcon from "../../../../icon/MobileIcon";

const cardData = [
  {
    heading: "User-friendliness",
    text: "This gives employees a fast start in their new digital process and long-term satisfaction",
    icon: <PersonRounded />,
  },

  {
    heading: "Scalability ",
    text: "Supports multiple deployment models to fit your IT ecosystem with complete feature parity.",
    icon: <ScaleIcon />,
  },

  {
    heading: "Security",
    text: "Control the flow of your documents and data and how they're later accessed.",
    icon: <SecurityLockIcon />,
  },
  {
    heading: "Mobility",
    text: "Anywhere. Anytime. Any device. Keep your distributed teams and work-from-home colleagues connected.",
    icon: <MobileIcon />,
  },
];

const HealthcareChangingNeedsSection = () => {
  return (
    <>
    <section className="mb-[135px] max-lg:mb-[85px]">
      <div className="innerContainer max-lg:px-8">
        <h2 className="mb-6 text-center max-md:text-xl max-md:leading-[29px] max-md:font-black">
          Built for the changing needs of healthcare
        </h2>
        <p className="text-center max-w-[1094px] mx-auto mb-[75px]">
          HIPAA compliance is required of all healthcare providers, payers and
          clearinghouses. Providers include hospitals, clinics, nursing homes,
          private practice physicians, dentists and suppliers. Payers include
          group health plans insurers, health maintenance organizations (HMOs),
          Medicare / Medicaid, and government healthcare programs.
          Clearinghouses include billing service providers, re-pricing companies
          and value-added networks. In short, all healthcare organizations in
          the United States need to develop a HIPAA compliance strategy.
        </p>

        <div className="grid grid-cols-4 gap-x-6 justify-between max-md:grid-cols-1 max-lg:grid-cols-2 max-[1400px]:px-8  max-lg:px-0">
          {cardData.map((item, i) => (
            <div key={i} className="p-[42px] pb-10 rounded-2xl bgGray my-1.5 max-md:h-[177px] max-md:p-[26px]">
              <span className="w-14 h-14 rounded-full flex justify-center items-center bg-white mb-4 max-md:w-[34px] max-md:h-[34px] max-md:p-[9.5px]">
                {item.icon}
              </span>
              <h6 className="text-2xl colorPrimary mb-3 font-extrabold fontInter max-md:text-[15px] max-md:leading-[18.15px] max-md:font-extrabold max-md:mb-0">
                {item.heading}
              </h6>
              <p className="text-[15px] max-md:text-xs max-md:leading-[22.32px]">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default HealthcareChangingNeedsSection;
